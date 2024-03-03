import ColumnReadyToBeServed from "./components/ColumnReadyToBeServed";
import ColumnWaitingIngredients from "./components/ColumnWaitingIngredients";
import MainButton from "./components/MainButton";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl text-center font-extrabold text-gray-900 sm:text-4xl">
          Bienvenidos
        </h1>
        {/* Botón "Pedir un plato" */}
        <div className="mt-10 flex justify-center">
          <MainButton />
        </div>
        <div className="mt-10 grid grid-cols-2 gap-10">
          {/* Columna 1: Esperando ingredientes */}
          <div>
            <ColumnWaitingIngredients />
          </div>
          {/* Columna 2: Listos para retirar */}
          <div>
            <ColumnReadyToBeServed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
