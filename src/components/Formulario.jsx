import {useState, useEffect} from 'react';
import Error from './Error'

const Formulario = ({setPatients, patients, onePatient, setOnePatient}) => {
  
  
  const[petName, setPetName]=useState('')
  const[ownerName, setOwnerName]=useState('')
  const[email, setEmail]=useState('')
  const[date, setDate]=useState('')
  const[symptoms, setSymptoms]=useState('')

  const[error, setError]=useState(false)
useEffect(()=>{
  if(Object.keys(onePatient).length>0){
    setPetName(onePatient.petName)
    setOwnerName(onePatient.ownerName)
    setEmail(onePatient.email)
    setDate(onePatient.date)
    setSymptoms(onePatient.symptoms)
  }else{}
},[onePatient])


  

  const generateId = ()=>{
   const random= Math.random().toString(36).substr(2)
   const time = Date.now().toString(36)
   return random + time
  }



  const handleSubmit= (e)=>{
    e.preventDefault()
    if([petName, ownerName, email, date, symptoms].includes('')){
      setError(true)
      return
    }
    setError(false)
    //object patient

    const obPatient={
      petName,
      ownerName,
      email,
      date,
      symptoms,
    }

    if(onePatient.id){
      obPatient.id=onePatient.id
      
      const updatedPatient = patients.map(patient=>patient.id === onePatient.id ? obPatient : patient)
      setPatients(updatedPatient)
      setOnePatient({})
    }else{
    //passes the infrmation from the form to parent(app.jsx) to fill in the state(patients), the ...patients is so that it adds to the array 
      obPatient.id=generateId()
      setPatients([...patients, obPatient])
    }

    //reset Form after submiting
    setPetName("")
    setOwnerName("")
    setEmail("")
    setDate("")
    setSymptoms("")
   

  }
  



  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Patient Information
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Add Patient and {''} 
        <span className="text-cyan-500 font-bold">Administrate</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className="bg-slate-100 shadow-md rounded-lg py-10 px-5"
      >
        {error && <Error><p>Fill in all the Camps</p></Error>
        }

        <div className="mb-5">
          <label htmlFor="petName" className="block text-gray-700 uppercase font-bold">
            Pet Name
          </label>
          <input 
            id="petName"
            type="text" 
            placeholder="Name of the Pet"
            className="border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md"
            value={petName}
            onChange={(e)=>setPetName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="ownerName" className="block text-gray-700 uppercase font-bold">
            Owner Name
          </label>
          <input 
            id="ownerName"
            type="text" 
            placeholder="Name of the Pet's owner"
            className="border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md"
            value={ownerName}
            onChange={(e)=>setOwnerName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input 
            id="email"
            type="email" 
            placeholder="E-mail of the Pet's owner"
            className="border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="entry" className="block text-gray-700 uppercase font-bold">
            Entry Date
          </label>
          <input 
            id="entry"
            type="date" 
            className="border-2 w-full p-1 mt-2 placeholder-gray-400 rounded-md"
            value={date}
            onChange={(e)=>setDate(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">
            Symptoms
          </label>
          <textarea
            id="symptoms"
            className="border2 w-full p1 mt-2 placeholder-gray-400 rounded-md "
            placeholder="Discribe the Symptoms"
            value={symptoms}
            onChange={(e)=>setSymptoms(e.target.value)}
          />
        </div>

        <input 
          type="submit" 
          className="
            bg-gradient-to-br from-cyan-500 to-blue-600 w-full p-3 rounded-md uppercase text-white font-bold hover:bg-gradient-to-l cursor-pointer transition-colors"
          value={onePatient.id ? "Edit Patient" :"Add Patient"}
        />

      </form>
    </div>
  )
}

export default Formulario