import { useState, type SyntheticEvent } from 'react'

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

    const [apiError, setApiError] = useState('')

    async function handleSubmit(event:  SyntheticEvent<HTMLFormElement>) {
        event.preventDefault()
        if (!symptomName.trim()) {
            setNameError(true)
            return
        }

        setApiError('')

        try {
            const response = await fetch('http://127.0.0.1:8000/api/symptoms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: symptomName.trim(),
                    date: date,
                    description: description
                })
            })

            if (response.status === 409) {
                setApiError('A symptom with this name and date already exists.')
                return
            }

            if (!response.ok) {
                setApiError('Unable to save symptom. Please try again.')
                return
            }

            const savedSymptom = await response.json()

            setSymptomName(savedSymptom.name)
            setCurrentPage('symptom-details')

        } catch (error) {
            setApiError('Unable to connect to the server. Please try again.')
            console.error(error)
        }
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
                {apiError && <p>{apiError}</p>}

                <button type="submit">Save</button>
                <button type="button" onClick={() => setCurrentPage('home')}>Cancel</button>
            </form>
        </section>
    
    </>
  )
}


export default AddSymptom