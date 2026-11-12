import { useState } from 'react'

type AddSymptomProps = {
    setCurrentPage: (page:string) => void
    symptomName: string
    setSymptomName: (name:string) => void
    date: string
    setDate: (date:string) => void
    description: string
    setDescription: (description:string) => void
}


function AddSymptom({setCurrentPage, symptomName, setSymptomName, date, setDate, description, setDescription}: AddSymptomProps) {
    

    //error state
    const [nameError, setNameError] = useState(false)

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        if (!symptomName.trim()) {
            setNameError(true)
            return
        }
        setCurrentPage('symptom-details')
        console.log(symptomName, date, description)
    }

    return (
    <>
        <button className="backtrack-button" onClick={() => setCurrentPage('home')}>Return to Home</button>
        <section className="add">
          <h1 className="add-heading">Add a Symptom</h1>
          <p className="add-paragraph">Record what you expereienced. Only symptom name and date are required.</p>
        </section>
        <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor="symptom-name">Symptom name</label>
                <input id="symptom-name" type="text" value={symptomName} 
                    onChange={(event) =>  {
                        setSymptomName(event.target.value)
                        setNameError(false)
                    }}
                >
                </input>
                {nameError && <p>Symptom name is required</p>}
                
                <label htmlFor="date">Date</label>
                <input id="date" type="date" value={date} onChange={(event) => setDate(event.target.value)}></input>
                <label htmlFor="description">Description</label>
                <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
                <button>Save</button>
                <button type="button" onClick={() => setCurrentPage('home')}>Cancel</button>
            </form>
        </section>
    
    </>
  )
}


export default AddSymptom