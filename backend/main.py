from datetime import date
from typing import Optional

from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.orm import Session
from sqlalchemy import func

from database import SessionLocal
from models import Symptom

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class SymptomCreate(BaseModel):
    name: str
    date: date
    description: Optional[str] = None


class SymptomResponse(BaseModel):
    id: int
    name: str
    date: date
    description: Optional[str] = None

    class Config:
        from_attributes = True


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def root():
    return {"message": "SanaSana backend is running"}


@app.post("/api/symptoms", response_model=SymptomResponse)
def create_symptom(symptom: SymptomCreate, db: Session = Depends(get_db)):
    name = symptom.name.strip()

    if not name:
        raise HTTPException(status_code=400, detail="Symptom name is required")

    existing = db.query(Symptom).filter(
        func.lower(func.trim(Symptom.name)) == name.lower(),
        Symptom.date == symptom.date
    ).first()

    if existing:
        raise HTTPException(
            status_code=409,
            detail="A symptom with this name and date already exists"
        )

    new_symptom = Symptom(
        name=name,
        date=symptom.date,
        description=symptom.description
    )

    db.add(new_symptom)
    db.commit()
    db.refresh(new_symptom)

    return new_symptom


@app.get("/api/symptoms", response_model=list[SymptomResponse])
def get_symptoms(db: Session = Depends(get_db)):
    return db.query(Symptom).order_by(Symptom.date.desc()).all()


@app.get("/api/symptoms/{symptom_id}", response_model=SymptomResponse)
def get_symptom(symptom_id: int, db: Session = Depends(get_db)):
    symptom = db.query(Symptom).filter(
        Symptom.id == symptom_id
    ).first()

    if not symptom:
        raise HTTPException(status_code=404, detail="Symptom not found")

    return symptom
