import "./App.css";
import { Suspense } from "react";
import Bottles from "./components/Bottles/bottles";

const bottlesPromise = fetch("./bouttle.json").then((res) => res.json());

function App() {
  // const waterBottles = [
  //   {
  //     id: 1,
  //     brand: "Aquafina",
  //     sizeML: 500,
  //     price: 20,
  //     material: "Plastic",
  //   },
  //   {
  //     id: 2,
  //     brand: "Mum",
  //     sizeML: 1500,
  //     price: 35,
  //     material: "Plastic",
  //   },
  //   {
  //     id: 3,
  //     brand: "Fresh Drinking Water",
  //     sizeML: 1000,
  //     price: 30,
  //     material: "Plastic",
  //   },
  //   {
  //     id: 4,
  //     brand: "Pran",
  //     sizeML: 600,
  //     price: 18,
  //     material: "Plastic",
  //   },
  //   {
  //     id: 5,
  //     brand: "Spa",
  //     sizeML: 750,
  //     price: 120,
  //     material: "Glass",
  //   },
  // ];

  return (
    <>
      <h1>Buy Awesome Water bottle</h1>
      <Suspense fallback={<h3>Lodding... ...</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
