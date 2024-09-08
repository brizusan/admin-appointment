import { useForm } from "react-hook-form";
import { ErrorMessage } from "../ErrorMessage";
import type { DraftAppointment } from "../../types";
import { useAppointmentStore } from "../../store";
import { useEffect, useMemo } from "react";

export const RegistroForm = () => {

  const appointments = useAppointmentStore( (state)=>state.appointments)
  const addAppointment = useAppointmentStore( (state)=>state.addAppointment)
  const updateAppointment = useAppointmentStore( (state)=>state.updateAppointment)
  const activeId = useAppointmentStore((state) => state.activeId)
  
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<DraftAppointment>();

  useEffect(() => {
    if (activeId) {
      const appointment = appointments.find(
        (appointment) => appointment.id === activeId
      );

      setValue('name' , appointment?.name || '')
      setValue('caretaker' , appointment?.caretaker || '')
      setValue('date' , appointment!.date)
      setValue('email' , appointment?.email || '')
      setValue('symptoms' , appointment?.symptoms || '')

    }
  }, [activeId]);


  const registerData = (data: DraftAppointment ) => {
    if (activeId) {
      updateAppointment(data);
    }else{
      addAppointment(data);
    }
    reset();
  };


  const isEdit = useMemo(()=> activeId !== "", [activeId])

  return (
    <form
      onSubmit={handleSubmit(registerData)}
      className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 space-y-2"
      noValidate
    >
      <div className="">
        <label htmlFor="name" className="text-sm uppercase font-bold">
          Paciente
        </label>
        <input
          id="name"
          className="w-full p-3  border border-gray-100"
          type="text"
          placeholder="Nombre del Paciente"
          {...register("name", {
            required: "Este campo es obligatorio",
          })}
        />
        {errors.name && (
          <ErrorMessage>{errors.name.message as string}</ErrorMessage>
        )}
      </div>

      <div className="">
        <label htmlFor="caretaker" className="text-sm uppercase font-bold">
          Propietario
        </label>
        <input
          id="caretaker"
          className="w-full p-3  border border-gray-100"
          type="text"
          placeholder="Nombre del Propietario"
          {...register("caretaker", {
            required: "Este campo es obligatorio",
          })}
        />
        {errors.caretaker && (
          <ErrorMessage>{errors.caretaker.message as string}</ErrorMessage>
        )}
      </div>

      <div className="">
        <label htmlFor="email" className="text-sm uppercase font-bold">
          Email
        </label>
        <input
          id="email"
          className="w-full p-3  border border-gray-100"
          type="email"
          placeholder="Email de Registro"
          {...register("email", {
            required: "Este campo es obligatorio",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email invalido",
            },
          })}
        />
        {errors.email && (
          <ErrorMessage>{errors.email.message as string}</ErrorMessage>
        )}
      </div>

      <div className="">
        <label htmlFor="date" className="text-sm uppercase font-bold">
          Fecha Alta
        </label>
        <input
          id="date"
          className="w-full p-3  border border-gray-100"
          type="date"
          {...register("date", {
            required: "Este campo es obligatorio",
          })}
        />
        {errors.date && (
          <ErrorMessage>{errors.date.message as string}</ErrorMessage>
        )}
      </div>

      <div className="">
        <label htmlFor="symptoms" className="text-sm uppercase font-bold">
          Síntomas
        </label>
        <textarea
          id="symptoms"
          className="w-full p-3  border border-gray-100"
          placeholder="Síntomas del paciente"
          {...register("symptoms", {
            required: "Este campo es obligatorio",
          })}
        ></textarea>
        {errors.symptoms && (
          <ErrorMessage>{errors.symptoms.message as string}</ErrorMessage>
        )}
      </div>

      <input
        type="submit"
        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
        value={`${isEdit ? 'Actualizar Cita' : 'Registrar Cita'}`}
      />
    </form>
  );
};
