import { useSate } from 'react';

function App() {
  const [calc, setCalc] = useSate("");
  const [result, setResult] = useSate("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {

    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))

      ) 
      return;
  {
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString);
    }
  }
    

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => updateCalc(i.toString())}
          key={i}>
          {i}
        </button>
      )
    }
    return digits;
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>{result}</span> : ''}
          {calc || "0"}
        </div>
        <div className="operator">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button>Del</button>
        </div>

        <div className="digits"> {createDigits()}
          <button onClick={() => updateCalc('0')}> 0 </button>
          <button onClick={() => updateCalc('.')}> . </button>
          <button> = </button>
        </div>
      </div>
    </div>
  );
}


export default App;
