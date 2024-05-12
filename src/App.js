import React, { useState } from 'react';
import './IMCCalculator.css';

function IMCCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);
  const [weightRange, setWeightRange] = useState('');

  const calculateIMC = () => {
    const weightInKg = parseFloat(weight);
    const heightInMeters = parseFloat(height) / 100; // convertendo cm para metros
    const imc = weightInKg / (heightInMeters * heightInMeters);
    setResult(imc.toFixed(2)); // arredondando para duas casas decimais
    setWeightRange(getWeightRange(imc)); // definindo a faixa de peso de acordo com o resultado
  };

  const getWeightRange = (imc) => {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      return 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      return 'Sobrepeso';
    } else {
      return 'Obesidade';
    }
  };

  return (
    <div className="imc-calculator">
      <h2>Calculadora de IMC</h2>
      <div className="input-group">
        <label>Peso (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Altura (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button className="calculate-btn" onClick={calculateIMC}>Calcular</button>
      {result && (
        <div className="result">
          <h3>Resultado</h3>
          <p>Seu IMC é: {result}</p>
          <p>Faixa de peso: {weightRange}</p>
        </div>
      )}
    </div>
  );
}

export default IMCCalculator;
