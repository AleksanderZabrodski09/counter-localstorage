import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState<number>(() => {
    let valueAsString = localStorage.getItem('countValue')
    if (valueAsString) {
      let newValue = JSON.parse(valueAsString)
      return newValue
    } else return 0
  })

  const onClickHandler = () => {
    setValue(value + 1)
  }

  useEffect(() => {
    localStorage.setItem('countValue', JSON.stringify(value))
  }, [value])


  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={onClickHandler}>inc</button>

    </div>
  );
}

export default App;
