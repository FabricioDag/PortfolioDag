import React, { useState } from 'react';
import style from './Calculator.module.css';
import { add, subtract, multiply, divide } from './operations.js';

// LIMITAR O USO DE . A SOMENTE UM
// LIMITAR O NUMERO DE DIGITOS
// FIXAR TAMANHO EXPRESSÃO MESMO ZERADA

const Calculator = () => {
  const [value1, setValue1] = useState(''); // Armazena o primeiro número
  const [value2, setValue2] = useState(''); // Armazena o segundo número
  const [operator, setOperator] = useState(''); // Armazena o operador

  const [mainValue, setMainValue] = useState('0');

  const [onReset, setOnReset] = useState(false);

  // Função para capturar o input no main value
  const handleInput = (value) => {
    if (onReset) {
      clearAll();
      setOnReset(false);
    }

    if (mainValue == '0' && value!='.') {
      setMainValue(value);
    } 

    if (mainValue == '.' && mainValue.includes('.')){
      alert('Apenas um ponto')
    }

    if(mainValue<99999){
      setMainValue(mainValue + value)
    } else{
      alert('Limite de digitos atingido')
    }

  };

  // Função para lidar com operadores //e realizar cálculo automático se aplicável
  const handleOperator = (newOperator) => {
    if (operator == '') {
      // se nunca clicou em operador
      setValue1(mainValue); // manda o main value para value1 // inclusive 0
      resetMainValue(); // reseta main value
      setOperator(newOperator); // seta operador
    } else if (operator !== '' && value1 && mainValue !== '0') {
      // se ja clicou em operador e ja tem value1 e mainValue nao é 0
      setValue1(calculate(value1, mainValue)); // faz resultado do calculo ir para value1
      setValue2(''); // zera o value 2
      resetMainValue(); // reseta main value
      setOperator(newOperator); // bota o operador novo
    }
  };

  // Função lidar com igual
  const handleEquals = () => {
    if (value1 && operator && !onReset) {
      setValue2(mainValue);
      setMainValue(calculate(value1, mainValue));
      setOnReset(true);
    } else if (operator && value2) {
      setValue1(mainValue);
      setMainValue(calculate(value1, mainValue));
    }
  };

  // Função zera main value
  const resetMainValue = () => {
    setMainValue(0);
  };

  // Função que realiza o cálculo
  const calculate = (A, B) => {
    let res = null;
    switch (operator) {
      case '+':
        res = add(A, B);
        break;
      case '-':
        res = subtract(A, B);
        break;
      case '*':
        res = multiply(A, B);
        break;
      case '/':
        res = divide(A, B);
        break;
      default:
        res = 'Erro';
    }
    return res;
  };

  // Função que reseta tudo
  const clearAll = () => {
    setValue1('');
    setValue2('');
    setOperator('');
    resetMainValue();
  };

  const del = () => {
    if (mainValue.length !== 1) {
      let aux = mainValue.slice(0, -1);
      setMainValue(aux);
    } else {
      resetMainValue();
    }
  };

  return (
    <div className={`${style.Calculator}  application`}>
      <div className={style.calculatorWrapper}>
        <div className={style.display}>
          <p className={style.displayExpression}>
            {/* Expressão: */}
            {value1} {operator} {value2} {onReset ? '=' : ''}
          </p>
          <p className={style.displayMainNumber}>
            {/* NAtual/Result: */}
            {mainValue}
          </p>
        </div>
        <div className={style.buttonsWrapper}>
          {/* ------------ Linha 1 -------------- */}
          <button onClick={clearAll}>C</button>
          <button onClick={del}>Del</button>
          <button onClick={() => handleOperator('%')}>%</button>
          <button onClick={() => handleOperator('/')}>/</button>

          {/* ------------ Linha 2 -------------- */}
          <button onClick={() => handleInput('7')}>7</button>
          <button onClick={() => handleInput('8')}>8</button>
          <button onClick={() => handleInput('9')}>9</button>
          <button onClick={() => handleOperator('*')}>*</button>

          {/* ------------ Linha 3 -------------- */}
          <button onClick={() => handleInput('4')}>4</button>
          <button onClick={() => handleInput('5')}>5</button>
          <button onClick={() => handleInput('6')}>6</button>
          <button onClick={() => handleOperator('-')}>-</button>

          {/* ------------ Linha 4 -------------- */}
          <button onClick={() => handleInput('1')}>1</button>
          <button onClick={() => handleInput('2')}>2</button>
          <button onClick={() => handleInput('3')}>3</button>
          <button onClick={() => handleOperator('+')}>+</button>

          {/* ------------ Linha 5 -------------- */}
          <button onClick={() => alert('Upgrade Calculator Soon')}>UP</button>
          <button onClick={() => handleInput('0')}>0</button>
          <button onClick={() => handleInput('.')}>.</button>
          <button onClick={() => handleEquals()}>=</button>
        </div>

        {/* <p>onreset: {onReset ? 'true' : 'false'}</p> */}
      </div>
    </div>
  );
};

export { Calculator };
