import React, { useState } from 'react'

import useStore from './calcReducer'

function ReducerHook() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const [store, dispatch] = useStore();

  const sum = () => {
    const num1Formated = parseInt(num1);
    const num2Formated = parseInt(num2);

    dispatch({
      type: 'SUM',
      payload: num1Formated + num2Formated
    })
  }

  const sub = () => {
    const num1Formated = parseInt(num1);
    const num2Formated = parseInt(num2);

    dispatch({
      type: 'SUB',
      payload: num1Formated - num2Formated
    })
  }

  return (
    <div>
      <label htmlFor="num1">Número 1:</label>
      <input type="text" name="num1" value={num1} onChange={e => setNum1(e.target.value)} />

      <br /><br />

      <label htmlFor="num2">Número 2:</label>
      <input type="text" name="num2" value={num2} onChange={e => setNum2(e.target.value)} />

      <br /><br />

      <button onClick={sum}>Somar</button>
      <button onClick={sub}>Subtrair</button>

      <br /><br />

      <label>Resultado:</label>
      <input type="text" value={store.result} readOnly />
    </div>
  );
}

export default ReducerHook;
