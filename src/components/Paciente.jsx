
const Paciente = ({patients, setOnePatient, deletePatient}) => {
  const{petName, ownerName, email, date, symptoms, id}=patients

  const handleDelete = () =>{
    const doubleCheck = confirm('Are you shure you want to delete this Patient?')

    if(doubleCheck){
      deletePatient(id)
    }
  }
    return (
      <div className="bg-slate-100 shadow-md rounded-lg py-10 px-5 m-5 my-10">
  
          <p className="font-bold mb-3 text-gray-700 uppercase">Name: {''}
          <span className="font-normal normal-case">{petName}</span>
          </p>
  
          <p className="font-bold mb-3 text-gray-700 uppercase">Owner: {''}
          <span className="font-normal normal-case">{ownerName}</span>
          </p>
  
          <p className="font-bold mb-3 text-gray-700 uppercase">E-mail: {''}
          <span className="font-normal normal-case">{email}</span>
          </p>
  
          <p className="font-bold mb-3 text-gray-700 uppercase">Date: {''}
          <span className="font-normal normal-case">{date}</span>
          </p>
  
          <p className="font-bold mb-3 text-gray-700 uppercase">Synptoms: {''}
          <span className="font-normal normal-case">{symptoms}</span>
          </p>
          <div className="flex justify-between mt-10"> 
            <button
              type="button"
              className="bg-gradient-to-br from-cyan-500 to-blue-600  hover:bg-gradient-to-l py-2 px-10 rounded-lg text-white font-bold uppercase shadow-lg "
              onClick={()=>setOnePatient(patients)}
            >
              Edit
            </button>

            <button
              type="button"
              className="bg-gradient-to-br from-red-600 to-red-800  hover:bg-gradient-to-l py-2 px-10 rounded-lg text-white font-bold uppercase shadow-lg"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
  
      </div>
    )
  }
  
  export default Paciente