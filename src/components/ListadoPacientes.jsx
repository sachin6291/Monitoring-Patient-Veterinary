
import Paciente from "./Paciente"

const ListadoPacientes = ({patients, setOnePatient, deletePatient}) => {



  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen " >
      {/* overflow-y-scroll scroll-smooth focus:scroll-auto */}

      {patients && patients.length ? (
        <>
            <h2 className="font-black text-3xl text-center">
              Patients List
            </h2>
            <p className="text-lg mt-5 text-center mb-10">
              Administrate the {''} 
              <span className="text-cyan-500 font-bold">Patients and Appointment</span>
            </p>
      
            {patients.map(patients=>(
              <Paciente 
                key={patients.id}
                patients={patients}
                setOnePatient={setOnePatient}
                deletePatient={deletePatient}
              />
            ))}
        </>
      ):(
        <>
          <h2 className="font-black text-3xl text-center">
           No Patients
          </h2>
          <p className="text-lg mt-5 text-center mb-10">
            Add Patients {''} 
            <span className="text-cyan-500 font-bold">to the list</span>
          </p>
        </>
      )}



    </div>
  )
}

export default ListadoPacientes