import { useEffect } from "react";

import Paciente from "./Paciente";

export default function PacientesList({ pacientes, setPaciente, eliminarPaciente}) {



  return (
    <div className=" md:w-1/2 lg:w-3/5 m-2 mb-10 md:h-screen lg:overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listade de pacientes
          </h2>
          <p className="text-lg mt-5 mb-5 text-center">
            Administra tus {""}
            <span className="text-indigo-700 font-bold mb-10">
              Pacientes y Citas
            </span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            No hay Pacientes
          </h2>
          <p className="text-lg mt-5 mb-5 text-center">
            Agregue un paciente {""}
            <span className="text-indigo-700 font-bold mb-10">
              en el Sistema
            </span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente key={paciente.id} paciente={paciente} />
          ))}
        </>
      )}
    </div>
  );
}
