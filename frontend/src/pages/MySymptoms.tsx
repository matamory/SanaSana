type MySymptomsProps = {
    setCurrentPage: (page:string) => void
    symptomName: string
    date: string
}



function MySymptoms({ setCurrentPage, symptomName, date}: MySymptomsProps) {

  return (
    <>
        <button className="backtrack-button" onClick={() => setCurrentPage('home')}>Return to Home</button>
        <section className="symptoms">
          <h1 className="symptoms-heading">My Symptoms</h1>
          <p className="symptoms-paragraph">Select any entry to view its details.</p>

        {symptomName ? (
            <article>
            <h2>{symptomName}</h2>
            <p>{date}</p>
            <button onClick={() => setCurrentPage('symptom-details')}>
                View Details
            </button>
            </article>
        ) : (
            <p>You don't have any symptom entries yet.</p>
        )}
        </section>
    
    </>
  )
}


export default MySymptoms