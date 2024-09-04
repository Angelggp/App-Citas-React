import { useState, useEffect } from "react"
import Error from "./Error";


export default function Form({pacientes, setPacientes, paciente, setPaciente}) {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    } 
  }, [paciente])



  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)

    return fecha + random
  }



  const handleSubmit = e => {
    e.preventDefault();

    // Validaciones del formulario
    // Validando que no hayan campos vacios
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('Hay almenos un campo sin rellenar')
      setError(true)
      return;
    }
    setError(false)

    const objetoPaciente = { nombre, propietario, email, fecha, sintomas }
    // console.log(objetoPaciente)

    if (paciente.id) {
      // Editando registro
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

      setPacientes(pacientesActualizados)
      setPaciente({})

    }else {
      // Nuevo registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }

    // Reiniciar Formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')


    // console.log('Enviando formulario')
  } 

  return (
    <div className="md:w-1/2 lg:w-2/5 m-2 mb-10">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-5">
        Añade Pacientes y {''}<span className="text-indigo-700 font-bold mb-10">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5">

          { error && 
            <Error msg='No debe dejar campos vacios'/>
          }
          
          {/* Nombre de Mascota */}
        <div className="mb-5"> 
          <label htmlFor="mascota" className="block text-gray-500 font-bold">
            Nombre Mascota
          </label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md " id="mascota" type="text" placeholder="Nombre de la mascota" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        </div>

          {/* Nombre de Propietario */}
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-500 font-bold">
            Nombre Propietario
          </label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md " id="propietario" type="text" placeholder="Nombre del propietario" value={propietario} onChange={(e) => setPropietario(e.target.value)}/>
        </div>

          {/* Nombre de Gmail */}
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-500 font-bold">
            Gmail Propietario
          </label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md " id="email" type="email" placeholder="Gmail del propietario" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
          
          {/* Nombre de Fecha */}
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-500 font-bold">
            Alta
          </label>
          <input className="border-2 w-full p-2 mt-2 rounded-md " id="alta" type="date" value={fecha} onChange={(e) => setFecha(e.target.value)}/>
        </div>

          {/* Nombre de Sintomas */}
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-500 font-bold">
            Síntomas
          </label>
          <textarea className="border-2 rounded-md w-full p-2 mt-2" name="sintomas" id="sintomas" placeholder="Describe los sintomas" value={sintomas} onChange={(e) => setSintomas(e.target.value)}></textarea>
        </div>

        <input className="w-full font-bold text-white bg-indigo-600 hover:bg-indigo-800 transition-all rounded-sm p-2 uppercase cursor-pointer" type="submit" value={ paciente.id ? 'Editar Paciente' : "Agregar Paciente" } /> 
      </form>
    </div>
  )
}
