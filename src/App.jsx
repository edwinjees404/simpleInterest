import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; 

function App() {

  const [principle, setPrinciple] = useState("");
  const [rate, setRate] = useState("");
  const [year, setYear] = useState("");
  const [interest, setInterest] = useState(0);
  const [isPrinciple, setIsPrinciple] = useState(true);
  const [isRate, setIsRate] = useState(true);
  const [isYear, setIsYear] = useState(true);

  const validate = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const isValid = value.match(/^[0-9]+$/);

    if (isValid) {
      if (name === 'principle') {
        setIsPrinciple(true);
        setPrinciple(value);
      } else if (name === 'rate') {
        setIsRate(true);
        setRate(value);
      } else if (name === 'year') {
        setIsYear(true);
        setYear(value);
      }
    } else {
      if (name === 'principle') {
        setIsPrinciple(false);
      } else if (name === 'rate') {
        setIsRate(false);
      } else if (name === 'year') {
        setIsYear(false);
      }
    }
  };

  const handleReset= () => {
    setPrinciple("");
    setRate("");
    setYear("");
    setInterest("");       
    setIsPrinciple(true);
    setIsRate(true);       
    setIsYear(true);      
  }
  const handleCalculate = ()=>{
    setInterest((principle * rate * year) / 100)
  }

  return (
    <>
      <div style={{ height: '100vh' }} className="bg-dark-w-100 d-flex justify-content-center align-items-center">
        <div style={{ width: '500px' }} className="p-5 bg-light rounded">
          <h1>Simple Interest App</h1>
          <p>Calculate your simple interest easily</p>
          <div style={{ height: '150px' }} className="bg-warning rounded d-flex justify-content-center align-items-center flex-column">
            <h1>$ {interest}</h1>
            <p>Total Simple Interest</p>
          </div>
          <div>
            <div className="mb-3 mt-3">
              <TextField
                id="outlined-basic"
                label="Principal Amount"
                variant="outlined"
                className="w-100"
                name="principle"
                onChange={validate}
                value={principle}
              />
              {!isPrinciple && <span className="text-danger">*invalid input</span>}
            </div>
            <div className="mb-3">
              <TextField
                id="outlined-basic"
                label="Rate of Interest (p.a)%"
                variant="outlined"
                className="w-100"
                name="rate"
                onChange={validate}
                value={rate}
              />
              {!isRate && <span className="text-danger">*invalid input</span>}
            </div>
            <div className="mb-3">
              <TextField
                id="outlined-basic"
                label="Year (yr)"
                variant="outlined"
                className="w-100"
                name="year"
                onChange={validate}
                value={year}
              />
              {!isYear && <span className="text-danger">*invalid input</span>}
            </div>
            <div className="mb-3 d-flex justify-content-between">
              <Button variant="contained" onClick={handleCalculate} disabled={isPrinciple && isRate && isYear ? false:true}>Calculate</Button>
              <Button variant="outlined" onClick={handleReset}>Reset</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;