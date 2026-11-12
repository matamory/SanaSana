type SymptomDetailsProps = {
    symptomName: string
    date: string
    description: string
    setCurrentPage: (page:string) => void
}


function SymptomDetails({symptomName, date, description, setCurrentPage}: SymptomDetailsProps) {

  return (
    <>
        <button className="backtrack-button" onClick={() => setCurrentPage('my-symptoms')}>Return to My Symptoms</button>
        <section className="details">
          <h1 className="details-heading">Symptom Details</h1>
          <h2>{symptomName}</h2>
          <p>{date}</p>
          <h3 className="details-description-heading">Description</h3>
          <p>{description}</p>
        </section>
        
    </>
  )
}

export default SymptomDetails