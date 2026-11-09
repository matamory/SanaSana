// import './Home.css'
import AddSymptomCard from '../components/AddSymptomCard.tsx'
import MySymptomsCard from '../components/MySymptomsCard.tsx'


function Home() {

  return (
    <>
    
          <h1 className="hero-heading">A lot can happen between medical visits</h1>
          <p className="hero-paragraph">SanaSana helps you keep track of your symptoms so you can feel more prepared for your next appointment.</p>
    
        <AddSymptomCard />
        <MySymptomsCard />
    
    </>
  )
}

export default Home

