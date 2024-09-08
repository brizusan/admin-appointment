import { RegistroForm } from "./RegistroForm";

export const Registro = () => {
  return (
    <section className="space-y-5">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
        Seguimiento de Citas
      </h2>
      <p className="font-semibold">
        Añade Citas y <span className="text-indigo-600">Administralos</span>
      </p>

     <RegistroForm />
    </section>
  );
};
