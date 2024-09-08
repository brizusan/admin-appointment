import { ListCita, Registro, Titulo } from "./components";

function App() {
  return (
    <>
      <Titulo />

      <main className="max-w-6xl mx-auto w-11/12 lg:w-full my-8 grid gap-8 md:grid-cols-2 lg:gap-12">
        <Registro />
        <ListCita />
      </main>
    </>
  );
}

export default App;
