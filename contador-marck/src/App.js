import './scss/App.scss';
import React from 'react';

function App() {
  let [renderito, setRenderito] = React.useState(0)
  

  function sumar(){
    
    
    setRenderito(renderito+1)
    
  }

  function reset() {
    setRenderito(renderito=0)
    
  }

  function restar() {
    setRenderito(renderito-1)
    
    
  }

    function blanco() {
      if (renderito === 0) {
        document.getElementById('contador').style.color = "white";
      } if (renderito > 0) {
        document.getElementById('contador').style.color = "green";
      } 
      if (renderito < 0) {
        document.getElementById('contador').style.color = "red";
      }
      
    }

    React.useEffect(()=>{
      blanco();
    })
    
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
