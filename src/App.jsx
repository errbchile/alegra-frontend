import ColumnReadyToBeServed from "./components/ColumnReadyToBeServed";
import ColumnStatistics from "./components/ColumnStatistics/ColumnStatistics";
import ColumnWaitingIngredients from "./components/ColumnWaitingIngredients";
import Dishes from "./components/Dishes/Dishes";
import MainButton from "./components/MainButton";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen pt-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/4">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Bienvenidos
            </h1>
          </div>
          <div className="w-full lg:w-3/4  flex flex-wrap gap-1">
            <Dishes />
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <MainButton />
        </div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="bg-gray-200 p-2 rounded-lg">
            <ColumnWaitingIngredients />
          </div>
          <div className="bg-gray-200 p-2 rounded-lg">
            <ColumnReadyToBeServed />
          </div>
          <div className="bg-gray-200 p-2 rounded-lg">
            <ColumnStatistics />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
