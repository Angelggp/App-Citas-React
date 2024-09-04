
import { useState, useEffect } from 'react'
import Header from './assets/components/Header'
import Form from './assets/components/Form'
import PacientesList from './assets/components/PacientesList'


export default function App() {

  console.log('Componente renderizado...')

  const [pacientes, setPacientes] = useState(() => {
    const pacienteStorage = JSON.parse(localStorage.getItem('pacientes')) ?? []
    return pacienteStorage
  });
  //     console.log('Get paciente',pacienteStorage)
  //     setPacientes(pacienteStorage))


  const [paciente, setPaciente] = useState({})

  useEffect(() => console.log('useEffect for here'), [])

  // useEffect(() => {
  //   const getLS = () => {
  //     const pacienteStorage = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  //     console.log('Get paciente',pacienteStorage)
  //     setPacientes(pacienteStorage)
  //   }
  //   getLS();
  // },  [])


  useEffect(() => {
    localStorage.setItem('pacientes',JSON.stringify(pacientes))
    console.log('Set paciente',pacientes)
  }, [pacientes] )




  const eliminarPaciente = id => { 
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id )
    setPacientes(pacientesActualizados)
    console.log(pacientes)
   }

  return (
    <>
      <Header/>
      <div className='mt-12 md:flex lg:ml-10 lg:mr-10'>
        <Form
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
        />
        <PacientesList pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
      </div>
    </>
  )
}

