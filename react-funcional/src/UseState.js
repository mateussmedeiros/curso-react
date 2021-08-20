import React, { useState } from 'react'

function UseState() {
  const [count, setCount] = useState(0);

  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();

  const somar = () => {
    const num1Formated = parseInt(num1);
    const num2Formated = parseInt(num2);

    setResult(num1Formated + num2Formated);
  }

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>
        Click me!
      </button>

      <br /><br />

      <label htmlFor="num1">Número 1:</label>
      <input type="text" name="num1" value={num1} onChange={e => setNum1(e.target.value)} />

      <br /><br />

      <label htmlFor="num2">Número 2:</label>
      <input type="text" name="num2" value={num2} onChange={e => setNum2(e.target.value)} />

      <br /><br />

      <button onClick={somar}>
        Somar
      </button>

      <br /><br />

      <label>Resultado:</label>
      <input type="text" value={result} />
    </div>
  );
}

export default UseState;
