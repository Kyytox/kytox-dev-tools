import { useState } from 'react'
import TextField from "@mui/material/TextField";
import ListTools from './listTools';
import ListCategory from './listCategory';
import './App.css'

function App() {

  const [inputText, setInputText] = useState("");
  const [selectCateg, setSelectCateg] = useState("");

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    console.log(inputText)
  };


  return (
    <div className="App">
      
      <div className='list-category'>
        <ListCategory
          setSelectCateg={setSelectCateg}
          setInputText={setInputText}
        ></ListCategory>
      </div>
      
      <div className='main'>
        <div className="search">
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            label="Search"
          />
        </div>
        
        <div className='list-tools'>
          <ListTools
            inputText={inputText}
            selectCateg={selectCateg}
            setSelectCateg={setSelectCateg}
          ></ListTools>
        </div>
      </div>
    </div>
  )
}

export default App
