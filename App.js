/*import React from "react"
import ReactDOM from "react-dom/client";
import App3 from "./App3";
function App () {
    //let message = "comming froom root app.js";
  return (
    <>
      <h1>this is App</h1> 
      <App3></App3>
    </>
  );
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
export default App;
*/
import {useState} from "react";
import Card from "./Card";
import Header from "./Header";
import Total from "./Total";
import img1 from "./image/mobile-1.jpg";
import img2 from "./image/mobile-2.jpg";
import img3 from "./image/mobile-3.jpg";
import img4 from "./image/mobile-4.jpg";

let products=[
  {
    name:"Redmi 4",
    path: img1,
    price:9000,
  },
  {
    name:"Samsung M13",
    path:img2,
    price:10000,
  },
  {
    name:"Redmi A1",
    path:img3,
    price:13000,
  },
  {
    name:"Redmi 9A",
    path:img4,
    price:20000,
  },
];
function App() {
  let [cartItems, setCartItems]=useState(0);
  let [total, setTotal]=useState(0);
  function addToCart(){
    setCartItems(cartItems+1);
  }
  function removeFromCart(){
    setCartItems(cartItems-1);
  }
  function changeTotal(t){
    console.log(t);
    setTotal(total+t);
  }
  return (
    <>
      <Header cartItems={cartItems} />
      <main>
        {products.map((e)=>(
          <Card
            product={e}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            changeTotal={changeTotal}
          />
        ))}
      </main>
      <Total total={total} />
    </>
  );
}
export default App;