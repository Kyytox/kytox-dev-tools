import { useState } from 'react'
import TextField from "@mui/material/TextField";
import ListTools from './listTools';
import ListCategory from './listCategory';
import './App.css'

function App() {

  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    console.log(inputText)
  };


  return (
    <div className="App">
      <ListCategory></ListCategory>
      <div className='main'> 
        <div className="search">
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
        <div className='list-tools'>
          <ListTools
            inputText={inputText}
          ></ListTools>
        </div>
      </div>
    </div>
  )
}

export default App
