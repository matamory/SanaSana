
import { useState } from 'react'
type AddSymptomProps = {
    setCurrentPage: (page:string) => void
}


function AddSymptom({setCurrentPage}: AddSymptomProps) {
    const [symptomName, setSymptomName] = useState('')

    const today = new Date()
    const localDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
    const [date, setDate] = useState(localDate)
   
    const [description, setDescription] = useState('')

    //error state
    const [nameError, setNameError] = useState(false)

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        if (!symptomName.trim()) {
            setNameError(true)
            return
        }
        console.log(symptomName, date, description)
    }

    return (
    <>
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
                <button onClick={() => setCurrentPage('home')}>Cancel</button>
            </form>
        </section>
    
    </>
  )
}


export default AddSymptom