// import './.css'

type AddSymptomCardProps = {
    setCurrentPage: (page:string) => void
}

function AddSymptomCard({setCurrentPage}: AddSymptomCardProps) {

  return (
    <article className="symptom-card">
        <h2 className="card-heading">Add a symptom</h2>
        <p className="card-description">Record a symptom and any details you want to remember about it.</p>
        <button onClick={() => setCurrentPage('add-symptom')}>Add a new symptom</button>
        <p className="supporting-card-info">Takes about 2 minutes</p>
    
    </article>
  )
}

export default AddSymptomCard

