import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./component/CoffeeCard";

const App = () => {
  const coffees = useLoaderData();
  return (
    <div className="m-20">
      <h1 className="text-6xl text-center my-20">Hot Hot Cold Coffee {coffees.length}</h1>
    <div className="grid md:grid-cols-2 gap-4">
    {coffees.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee}></CoffeeCard>
      ))}
    </div>
    </div>
  );
};

export default App;
