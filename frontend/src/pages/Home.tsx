// import './Home.css'
import AddSymptomCard from '../components/AddSymptomCard.tsx'
import MySymptomsCard from '../components/MySymptomsCard.tsx'


function Home() {

  return (
    <>
        <section className="hero">
          <h1 className="hero-heading">A lot can happen between medical visits</h1>
          <p className="hero-paragraph">SanaSana helps you keep track of your symptoms so you can feel more prepared for your next appointment.</p>
        </section>

        <section className="symptom-cards">
        <AddSymptomCard />
        <MySymptomsCard />
        </section>
    
    </>
  )
}

export default Home

