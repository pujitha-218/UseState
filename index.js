/*import React from "react";
import ReactDOM from "react-dom";
function Myapp (){

   return <h2>My First component</h2>;
 }
 ReactDOM.render(<Myapp/>,document.getElementById('root'));
 export default Myapp;*/
//const root=ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Greeting/>);
//export default Greeting;
//import React from "react"
///import ReactDOM from "react-dom/client"
//const Greeting=()=>{
  /*  return(<div>
        <booklist>
            <book><h1><b>Image placeholder</b></h1>
            <bookname><h2>Book Title</h2></bookname>
            <author><h3>Author</h3></author>
            </book>
            <book><h1><b>Image placeholder</b></h1>
            <bookname><h2>Book Title</h2></bookname>
            <author><h3>Author</h3></author>
            </book>
            <book><h1><b>Image placeholder</b></h1>
            <bookname><h2>Book Title</h2></bookname>
            <author><h3>Author</h3></author>
            </book>
        </booklist>    
        </div>)
}
 const root=ReactDOM.createRoot(document.getElementById('root')).render(<Greeting/>)
 export default Greeting; 
  */
/*import React from 'react';
import ReactDOM from "react-dom/client";
import pic from ".images/mypic.jpg";
import App3 from "./App3";
function Index () {
  return (
    <div>
    <img src={pic} />
      <h1>this is App1</h1> 
      <App3></App3>
    </div>
  );
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index/>);
export default Index;*/

/*import React from "react";
import ReactDOM from "react";
import App from "./App";
import { useState } from "react";
function App(apple){
  let message ="coming from root";
  const hanleclick=()=>{
    console.log("clicked............");
    setCount(count+1);
   };
   return (
    <>
      <h2>This is App</h2>
      <p>(apple.mango</p>
      <App></App>
      <button onClick=(handleClick)>Clicked</button>
    </>
   );
}
export default App;*/

/*import react from "react";
 function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
*/ 
/* leoimport React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import "./index.css";
const Greeting = () => {
  const[count,setCount]=useState(0);
  const handleClick = ()=>{
    console.log("clicked");
    setCount(count+1);
  };
return(
  <div>
  <div ClassName="first"><button onClick={handleClick}>clicked{count}times</button></div>
  <div ClassName="first"><button onClick={handleClick}>clicked{count}times</button></div>
  <div ClassName="first"><button onClick={handleClick}>clicked{count}times</button></div>
  <div ClassName="first"><button onClick={handleClick}>clicked{count}times</button></div>
  </div>
)
};
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting/>)*/ 
/*<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content=""width=device-width, initial-scale="1.0">
        <link rel="stylesheet" href="./index2.css">
        
        <title>Happy Birthday</title>
    </head>
     
    <body>

        <div class="card">
            <img src="./leo.jpg" alt="birthday" class="birthday">
        <div class="text">
             <div class="space"></div>
            <h1>HAPPY BIRTHDAY LEO</h1>
            <p>You ve brought so much happiness into our lives ever since you were born. Happy birthday, little star </p>
        </div>
        </div>
    </body>
    */

    import React from "react";
    import ReactDOM from "react-dom/client";
    import App from "./App.js";
    import "./index.css";
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
 

