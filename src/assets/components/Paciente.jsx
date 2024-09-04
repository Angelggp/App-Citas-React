
export default function Paciente({paciente, setPaciente, eliminarPaciente}) {

  const { nombre, email, fecha, sintomas, id } = paciente

  const handleEliminar = () => {
    const resp = confirm('Deseas eliminar este paciente?')
    if (resp) {
      eliminarPaciente(id)
    }
  }

  return (
    <div className=" bg-white shadow-md px-5 py-5 rounded-md mb-3 mr-1">
          <p className="font-bold uppercase text-gray-500">Nombre: {''} <span className=" font-normal normal-case">{nombre}</span></p>

          <p className="font-bold uppercase text-gray-500 mb-1">Email: {''} <span className=" font-normal normal-case">{email}</span></p>

          <p className="font-bold uppercase text-gray-500 mb-1">Fecha alta: {''} <span className=" font-normal normal-case">{fecha}</span></p>

          <p className="font-bold uppercase text-gray-500 mb-1">Sintomas: {''} <span className=" font-normal normal-case">{sintomas}</span></p>

          <div className="flex justify-between mt-2" >
            <button type="button" className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 transition-all rounded-sm text-white font-bold uppercase" onClick={() => setPaciente(paciente)}>
              Editar
            </button>

            <button type="button" className="px-3 py-1 bg-red-600 hover:bg-red-700 transition-all rounded-sm text-white font-bold uppercase" onClick={handleEliminar}>
              Eliminar
            </button>
          </div>
    </div>
  )
}
