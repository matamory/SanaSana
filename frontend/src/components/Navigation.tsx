// import './.css'
type NavigationProps = {
    setCurrentPage: (page:string) => void
}

function Navigation({setCurrentPage}: NavigationProps) {

  return (
    <article className="navigation">
        <h1 className="brand-heading">SanaSana</h1>
        <div className="navigation-links">
            <button className="navigation-button" onClick={() => setCurrentPage('home')}>Home</button>
            <button className="navigation-button" onClick={() => setCurrentPage('add-symptom')}>Add Symptom</button>
            <button className="navigation-button" onClick={() => setCurrentPage('my-symptoms')}>My Symptoms</button>
        </div>
        
    </article>
  )
}

export default Navigation