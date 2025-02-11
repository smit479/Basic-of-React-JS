import React from "react";

function FunctionalClick() {
  function onClickHandler(){
    alert("hello World of SMIT")
  }

  function onClickHandler2(){
    alert("hello World of SMIT2")
  }
  
  return (
    <div>
      <br></br>
      <hr></hr>
     <button onClick={function(event){ onClickHandler(event); onClickHandler2();}}>Click Me</button>
    </div>
  );
}

export default FunctionalClick;
