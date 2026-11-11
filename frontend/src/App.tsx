import './App.css'

import Navigation from './components/Navigation.tsx'
import Home from './pages/Home.tsx'
import AddSymptom from './pages/AddSymptom.tsx'
import MySymptoms from './pages/MySymptoms.tsx'


import { useState } from 'react'

function App() {

  const [currentPage, setCurrentPage] = useState('home')

  return (
    <>
      <Navigation setCurrentPage={setCurrentPage} />

      {currentPage === 'home' && <Home />}
      {currentPage === 'add-symptom' && <AddSymptom setCurrentPage={setCurrentPage}/>}
      {currentPage === 'my-symptoms' && <MySymptoms />}
    </>
  )
}

export default App
