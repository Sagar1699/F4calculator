import React, { useState } from "react";

function Calculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const validateInputs = () => {
    setError("");

    if (!number1 && !number2) {
      setError("Please enter both numbers.");
      setResult("");
      return false;
    }
    if (!number1) {
      setError("Num 1 Can't be empty.");
      setResult("");
      return false;
    }
    if (!number2) {
      setError("Num 2 Can't be empty.");
      setResult("");
      return false;
    }
    if (isNaN(number1) || isNaN(number2)) {
      setError("Please enter valid numbers. Input Should be a number");
      setResult("");
      return false;
    }
    return true;
  };
  const addition = () => {
    if (validateInputs() === true) {
      const sum = parseFloat(number1) + parseFloat(number2);
      setResult(`Result: ${sum}`);
    }
  };

  const subtraction = () => {
    if (validateInputs() === true) {
      const difference = parseFloat(number1) - parseFloat(number2);
      setResult(`Result: ${difference}`);
    }
  };
  const multiplication = () => {
    if (validateInputs() === true) {
      const product = parseFloat(number1) * parseFloat(number2);
      setResult(`Result: ${product}`);
    }
  };
  const division = () => {
    if (validateInputs() === true) {
      // check for division by zero
      if (parseFloat(number2) === 0) {
        setError("Result will be infinity, try another combination...");
        setResult("");
      } else {
        const quotient = parseFloat(number1) / parseFloat(number2);
        setResult(`Result: ${quotient}`);
      }
    }
  };

  return (
    <div className="container">
      <h2>React Calculator</h2>

      <div>
        <input
          type="text"
          placeholder="Num 1"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Num 2"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
      </div>

      <div>
        <button onClick={addition}>+</button>
        <button onClick={subtraction}>-</button>
        <button onClick={multiplication}>*</button>
        <button onClick={division}>/</button>
      </div>
      
      {error && (
        <div className="msg suc3">Error!</div>
      )}

      {error && <div className="msg err">{error}</div>}
       
      {result && (
        <div className="msg suc2">Success!</div>
      )}

      {result && <div className="msg suc">{result}</div>}

      
    </div>
  );
}

export default Calculator;