import './App.css'

import Navigation from './components/Navigation.tsx'
import Home from './pages/Home.tsx'
import AddSymptom from './pages/AddSymptom.tsx'
import MySymptoms from './pages/MySymptoms.tsx'
import SymptomDetails from './pages/SymptomDetails.tsx'


import { useState } from 'react'

function App() {

  const [currentPage, setCurrentPage] = useState('home')

  const [symptomName, setSymptomName] = useState('')

  const today = new Date()
  const localDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
  const [date, setDate] = useState(localDate)

  
  const [description, setDescription] = useState('')
   

  return (
    <>
      <Navigation setCurrentPage={setCurrentPage} />

      {currentPage === 'home' && 
        <Home
          setCurrentPage={setCurrentPage} 
        />
      }

      {currentPage === 'add-symptom' && 
        <AddSymptom 
          setCurrentPage={setCurrentPage} 
          symptomName={symptomName} 
          setSymptomName={setSymptomName}
          date={date}
          setDate={setDate}
          description={description}
          setDescription={setDescription}
        />
      }

      {currentPage === 'symptom-details' && 
        <SymptomDetails
          symptomName={symptomName} 
          date={date}
          description={description}
          setCurrentPage={setCurrentPage}
        />
      }

      {currentPage === 'my-symptoms' && 
        <MySymptoms 
          setCurrentPage={setCurrentPage}      
          setSymptomName={setSymptomName}
          setDate={setDate}
          setDescription={setDescription}
        />
      }
    </>
  )
}

export default App
