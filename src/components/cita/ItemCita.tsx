import { useAppointmentStore } from "../../store";
import type  { Appointment } from "../../types";

type ItemCitaProps = {
  appointment: Appointment
}
export const ItemCita = ({appointment}: ItemCitaProps) => {

  const deleteAppointment = useAppointmentStore((state) => state.deleteAppointment)
  const editAppointment = useAppointmentStore((state) => state.editAppointment)

  return (
    <div className="bg-white shadow-md rounded-lg p-4 px-5  space-y-1">
      <p className="text-right tracking-widest font-bold">
        Fecha de Alta : <span className="font-normal">{appointment?.date.toString()}</span>
      </p>
      <p className="font-semibold hidden">
        id : <span className="font-normal">{appointment?.id}</span>{" "}
      </p>
      <p className="font-semibold">
        Propietario : <span className="font-normal">{appointment?.caretaker}</span>{" "}
      </p>
      <p className="font-semibold">
        Paciente : <span className="font-normal">{appointment?.name}</span>{" "}
      </p>
      <p className="font-semibold">
        Email : <span className="font-normal">{appointment?.email}</span>{" "}
      </p>
      <p className="font-semibold">
        Síntomas : <span className="font-normal">{appointment?.symptoms}</span>
      </p>

      <div className="flex  justify-between pt-2">
        <button 
          onClick={() => editAppointment(appointment.id)}
          className="w-[180px] bg-blue-500 hover:bg-blue-600 transition-colors rounded-md py-1 text-white font-semibold">
          Editar
        </button>
        <button 
          onClick={() =>{
            const confirm = window.confirm('¿Deseas eliminar esta Cita?')
            if(confirm) deleteAppointment(appointment.id)
          }}
          className="w-[180px] bg-red-500 hover:bg-red-600 transition-colors rounded-md py-1 text-white font-semibold">
          Eliminar
        </button>
      </div>
    </div>
  );
};
