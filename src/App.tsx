import React from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootReducerType} from './bll/store';
import {insCounterAC} from './bll/counter-reducer';

function App() {

  const value=useSelector<AppRootReducerType, number>(state => state.counter.value)
  const dispatch = useDispatch()
  const onClickHandler = () => {
    dispatch(insCounterAC())
  }


  // const [value, setValue] = useState<number>(() => {
  //   let valueAsString = localStorage.getItem('countValue')
  //   if (valueAsString) {
  //     let newValue = JSON.parse(valueAsString)
  //     return newValue
  //   } else return 0
  // })
  //

  //
  // useEffect(() => {
  //   localStorage.setItem('countValue', JSON.stringify(value))
  // }, [value])


  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={onClickHandler}>inc</button>

    </div>
  );
}

export default App;
