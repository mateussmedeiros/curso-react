import React, { useState, useEffect } from 'react'

function USeEffect() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const somar = () => {
    const num1Formated = parseInt(num1);
    const num2Formated = parseInt(num2);

    setResult(num1Formated + num2Formated);
  }

  useEffect(() => {
    console.log(`Variável num 1: ${num1} e Variável num 2: ${num2}`)
  }, [num1, num2])

  return (
    <div>
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

export default USeEffect;
