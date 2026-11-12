// import './.css'
// import './.css'
type MySymptomsCardProps = {
    setCurrentPage: (page:string) => void
}

function MySymptomsCard({setCurrentPage}: MySymptomsCardProps ) {

  return (
    <article className="symptom-card">
        
        <h2 className="card-heading">My Symptoms</h2>
        <p className="card-description">Browse your symptom entries by date and view their details.</p>
        <button  onClick={() => setCurrentPage('my-symptoms')}>View my symptoms</button>
        <p className="supporting-card-info">View your full history</p>
    
    </article>
  )
}

export default MySymptomsCard
