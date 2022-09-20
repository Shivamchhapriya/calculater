import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
// import AddIcon from '@mui/icons-material/Add';
// import QueueIcon from '@mui/icons-material/Queue';

function Calculater() {

  let[result,setresult]=useState("")
  let[history,sethistory]=useState("")

  function display(e){
    sethistory(history.concat(e.target.name))
    setresult(result.concat(e.target.name))
  }
 
  function setResult(){
    try{
      setresult(eval(result))
    }
    catch(errr){
      setresult("Error")
    }
  }
  function clear(){
    setresult(" ")
    sethistory(" ")
  }
  
  function delete_Once(){
    setresult()
    sethistory()
  }



  return (
    <>
    <div className='background-body'>
      <div className='calculater-box'>
       
        <div className='result'>
          <div className='history'><p>{history}</p></div>
          <div className='total-result'><h4>{result}</h4></div>
        </div> 

        <div className='button-box'>
          <button name='AC' onClick={clear}>AC</button>
          <button name='CE' onClick={delete_Once}>CE</button>
          <button name='%' onClick={display}>%</button>
          <button name='/'id='device' onClick={display}>/</button>

          <button className="button-margin" onClick={display} name="7">7</button>
          <button className="button-margin" onClick={display} name="8">8</button>
          <button className="button-margin" onClick={display} name="9">9</button>
          <button name="*" id="multi" onClick={display}>x</button>

          <button className="button-margin" onClick={display} name="4">4</button>
          <button className="button-margin" onClick={display} name="5">5</button>
          <button className="button-margin" onClick={display} name="6">6</button>
          <button name='-' id='decrese' onClick={display}>-</button>

          <button className="button-margin" onClick={display} name="1">1</button>
          <button className="button-margin" onClick={display} name="2">2</button>
          <button className="button-margin" onClick={display} name="3">3</button>
          <button name='+' id='add' onClick={display}>+</button>

          <button name="0" id="empty" onClick={display}>0</button>
          <button name="." onClick={display}>.</button>
          <button name="=" id="total" onClick={setResult}>=</button>

        </div>


      </div>
    </div>
    </>
  );
}




export default Calculater;
