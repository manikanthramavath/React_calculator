import { useState } from 'react';
import Button from './Button';

function App() {
const [calc,setcalc]=useState("");
const [result,setResult]=useState("");
const   ops=['/','*','+','-'];
const Updatecalc=value=>{
  if(
    ops.includes(value)&&calc===''||
    ops.includes(value  )&&ops.includes(calc.slice(-1))

  ){return;}
  setcalc(calc+value);
  if (!ops.includes(value)){
    setResult(eval(calc+value));
  }
}
const calcualte =()=>{
  setcalc(eval(calc).toString());
}
const deletelast=()=>{
  if(calc==''){
    return;
  }
  const value=calc.slice(0,-1);
  setcalc(value);
}
  return (
  <>

    <div className="App">
      <div className="calculator">
        <div className="display">
          {result?<span>({result})</span>:''}&nbsp;
          {calc||"0"}
        </div>
        <div className="operators">
          <button onClick={()=>Updatecalc('+')}>+</button>
          <button onClick={()=>Updatecalc('*')}>*</button>
          <button onClick={()=>Updatecalc('-')}>-</button>
          <button onClick={()=>Updatecalc('/')}>/</button>
          <button onClick={deletelast}>DEl</button>
        </div>
        <div className="digits">
          <button onClick={()=>Updatecalc('1')}>1</button>
          <button onClick={()=>Updatecalc('2')}>2</button>
          <button onClick={()=>Updatecalc('3')}>3</button>
          <button onClick={()=>Updatecalc('4')}>4</button>
          <button onClick={()=>Updatecalc('5')}>5</button>
          <button onClick={()=>Updatecalc('6')}>6</button>
          <button onClick={()=>Updatecalc('7')}>7</button>
          <button onClick={()=>Updatecalc('8')}>8</button>
          <button onClick={()=>Updatecalc('9')}>9</button>
          <button onClick={()=>Updatecalc('0')}>0</button>
          <button onClick={()=>Updatecalc('.')}>.</button>
          <button onClick={calcualte}>=</button>
        </div>
      </div>
      </div></>
  );
}

export default App;
