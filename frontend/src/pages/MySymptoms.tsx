import { useState, useEffect } from 'react'

type Symptom = {
    id: number
    name: string
    date: string
    description: string | null
}

type MySymptomsProps = {
    setCurrentPage: (page:string) => void
    setSymptomName: (name: string) => void
    setDate: (date: string) => void
    setDescription: (description: string) => void
}


function MySymptoms({ setCurrentPage, setSymptomName, setDate, setDescription}: MySymptomsProps) {

    const [symptoms, setSymptoms] = useState<Symptom[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        async function fetchSymptoms() {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/symptoms')

                if (!response.ok) {
                    throw new Error('Unable to retrieve symptoms')
                }

                const data = await response.json()
                setSymptoms(data)

            } catch (error) {
                setError('Unable to load your symptoms. Please try again.')
                console.error(error)
            }
        }

        fetchSymptoms()
    }, [])

    function handleViewDetails(symptom: Symptom) {
        setSymptomName(symptom.name)
        setDate(symptom.date)
        setDescription(symptom.description ?? '')
        setCurrentPage('symptom-details')
    }


  return (
    <>
        <button className="backtrack-button" onClick={() => setCurrentPage('home')}>Return to Home</button>
        <section className="symptoms">
          <h1 className="symptoms-heading">My Symptoms</h1>
          <p className="symptoms-paragraph">Select any entry to view its details.</p>

        {error && <p>{error}</p>}

        {!error && symptoms.length === 0 ? (
            <p>You don't have any symptom entries yet.</p>
        ) : (
        symptoms.map ((symptom) => (
            <article key={symptom.id}>
            <h2>{symptom.name}</h2>
            <p>{symptom.date}</p>
            <button onClick={() => handleViewDetails(symptom)}>
                View Details
            </button>
            </article>
        ))
            
        )}
        </section>
    
    </>
  )
}


export default MySymptoms