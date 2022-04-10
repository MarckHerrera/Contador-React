import './scss/App.scss';
import React from 'react';

function App() {
  let [renderito, setRenderito] = React.useState(0)

  //function color() {
    //document.getElementById('texto').style.color = "purple";
  //}
  function sumar(){
    
    
    setRenderito(renderito+1)
    
  }

  function reset() {
    setRenderito(renderito=0)
    if (renderito === 0) {
      document.getElementById('contador').style.color = "white";
    }
    
  }

  function restar() {
    setRenderito(renderito-1)
    
    
  }


    if (renderito > 0) {
      document.getElementById('contador').style.color = "green";
    } 
    if (renderito < 0) {
      document.getElementById('contador').style.color = "red";
    }

  

  return (

    
    <div className="App">
      <div class="panel">
      <div class="panel-display">
      <h1 id="contador">{renderito}</h1>
      </div>
      <div class="panel-button">
      <button class="item-button" onClick={()=>{restar()}}>-</button>
      <button class="item-button simbol" onClick={()=>{reset()}}>Reset</button>
      <button class="item-button" onClick={()=>{sumar()}}>+</button>
      </div>
    </div>


    </div>
  );
}

export default App;
