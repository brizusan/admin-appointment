export interface Appointment
{ 
  id : string;
  caretaker: string;
  date: Date;
  email: string;
  name: string;
  symptoms: string;
}


export type DraftAppointment = Omit<Appointment, 'id'>