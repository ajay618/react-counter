import { useState } from "react";
import Counter from "./Counter";
import Employee from "./Employee";

function App() {
  const [count , setCount] = useState (0)
  
  const incrementCount = () => setCount(count + 1)

  let obj = {
    title : "First Counter",
    count , 
    place : "Alakode"
  }

  let employee = [
    {name :"Ajay Joy", place : "Kannur"},
    { name :"Ann Maria", place : "Ernakulam"},
    {name :"Unnimaya", place : "Palakad"}
  ]
  
  return (
    <div className="App">
    <button onClick={incrementCount}>Add</button>
    <Counter {...obj}/>
    <Counter title='Second Counter' count = {count}/>
    {employee.map( (emp , index ) => (
         <Employee key = {index}  name = {emp.name} place = {emp.place }/>
      ))}
    </div>
  );
}

export default App;
