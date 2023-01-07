import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [value, setValue] = useState<number>(0)

  const onClickHandler = () => {
    setValue(value + 1)
  }
  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={onClickHandler}>inc</button>
      <button onClick={onClickHandler}>setLocalStorage</button>
      <button onClick={onClickHandler}>getFromLocalStorage</button>
    </div>
  );
}

export default App;
