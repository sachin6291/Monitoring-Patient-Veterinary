import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"



function App() {



  const[patients, setPatients]=useState(JSON.parse(localStorage.getItem('patients')) ?? [])
  const[onePatient, setOnePatient]=useState({})



  useEffect(()=>{
    localStorage.setItem('patients', JSON.stringify(patients))},[patients])

  const deletePatient =(id)=>{
    const remainingPatients = patients.filter((individual)=>individual.id !== id)
    setPatients(remainingPatients)
    }
  return (
      <div className="container mx-auto mt-20">
        <Header
        
        />
        <div className="mt-12 md:flex">
          <Formulario
            patients={patients}
            setPatients={setPatients}
            onePatient={onePatient}
            setOnePatient={setOnePatient}
          />
          <ListadoPacientes
            patients={patients}
            setOnePatient={setOnePatient}
            deletePatient={deletePatient}
          />
        </div>
      </div>
  )
}
export default App
