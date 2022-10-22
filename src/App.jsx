import { useState } from 'react'
import { Tools, } from '../tools';
import './App.css'

function App() {

  console.log(Tools)
  const sortlistTools = Tools.sort(()=> Math.random() - 0.5);
  console.log(sortlistTools)
  const listTools = sortlistTools.map((item) => 
    <div className='box'>
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        <img src={item.img}></img>      
        <div class="overlay">
          <p>{item.site}</p>
          <p>{item.description}</p>
        </div>
      </a>
    </div>
);

  return (
    <div className="App">
      <div className='list-tools'>
        {listTools}
      </div>
    </div>
  )
}

export default App
