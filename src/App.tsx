import React, {useState} from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState<number>(0)

  const onClickHandler = () => {
    setValue(value + 1)
  }
  const setLocalStorageHandler = () => {
    // localStorage.setItem('countValue',value.toString())
    localStorage.setItem('countValue',JSON.stringify(value))
  }

  const getFromLocalStorageHandler = () => {
    //code
  }

  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={onClickHandler}>inc</button>
      <button onClick={setLocalStorageHandler}>setLocalStorage</button>
      <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
    </div>
  );
}

export default App;
