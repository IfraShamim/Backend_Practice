import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
 const [joke,setJoke] = useState([]);

 useEffect(() => {
 axios.get('/api/jokes')
 .then((response)=>{
  setJoke(response.data)
 })
 .catch((error)=>{
  console.log(error);
 })
 })
 

  return (
    <>
     <h1>JOKE: {joke.length}</h1>
     {
      joke.map((joke,index)=> (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
     }
    </>
  )
}

export default App
