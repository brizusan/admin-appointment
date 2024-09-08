import { useMemo } from "react";
import { useAppointmentStore } from "../../store";
import { ItemCita } from "./ItemCita";

export const ListCita = () => {
  const appointments = useAppointmentStore((state) => state.appointments);

  const isEmpty = useMemo(() => appointments.length === 0, [appointments]);

  return (
    <section className="space-y-5">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
        Listado de Citas
      </h2>
      {isEmpty ? (
        <p className="font-semibold">
          Comienza agregando citas y{" "}
          <span className="text-indigo-600">podras vizualizarlas</span>
        </p>
      ) : (
        <p className="font-semibold">
          Administracion de <span className="text-indigo-600"> Citas</span>
        </p>
      )}

      {isEmpty ? (
        <p className="font-semibold text-center ">No hay Citas Registradas</p>
      ) : (
        <section className="grid gap-2">
          {appointments.map((appointment) => (
            <ItemCita key={appointment.id} appointment={appointment} />
          ))}
        </section>
      )}
    </section>
  );
};
