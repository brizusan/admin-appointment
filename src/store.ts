import { create } from "zustand";
import type { Appointment, DraftAppointment } from "./types";
import { devtools , persist } from "zustand/middleware";

type AppointmentState = {
  appointments: Appointment[];
  activeId: string;
  addAppointment: (appointment: DraftAppointment) => void;
  deleteAppointment: (id: Appointment["id"]) => void;
  editAppointment: (id: Appointment["id"]) => void;
  updateAppointment: (appointment: DraftAppointment) => void;
};

export const useAppointmentStore = create<AppointmentState>()(
  devtools(
    persist((set) => ({
    appointments: [],
    activeId: "",

    addAppointment: (appointment: DraftAppointment) =>
      set((state) => ({
        appointments: [
          ...state.appointments,
          { ...appointment, id: crypto.randomUUID() },
        ],
      })),

    deleteAppointment: (id) =>
      set((state) => ({
        appointments: state.appointments.filter(
          (appointment) => appointment.id !== id
        ),
      })),

    editAppointment: (id) =>
      set(() => ({
        activeId: id,
      })),

    updateAppointment: (appointment) => {
      set((state) => ({
        appointments: state.appointments.map((item) =>
          item.id === state.activeId
            ? { id: state.activeId, ...appointment }
            : item
        ),
        activeId: "",
      }));
    },
  }),{
    name: "appointment-storage"
  })
));
