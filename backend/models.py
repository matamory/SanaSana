from sqlalchemy import Column, Integer, String, Date, Text
from database import Base


class Symptom(Base):
    __tablename__ = "symptoms"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    date = Column(Date, nullable=False)
    description = Column(Text, nullable=True)