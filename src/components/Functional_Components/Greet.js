import React from "react";

//function Greet(){
  //  return <h1>Hello World </h1>
//}

// Export default Greet
//const Greet =() => <h1>Hello World2</h1>

// Named Exporter
//export const Greet =() => <h1>Hello World3</h1>


//Props  : access props by props.name with Children

// Props cannot changed with any circumstances and can be changed with App.js

// Full Defined Props
// export const Greet =(props) =>{
//   //props.name ="SMIT"
//   return(
// <div>
//   <h1>Hello {props.name} & {props.heroName} </h1>
//   {props.children}
// </div>

//   )
// } 


/// What is need from props
// 1st Method for Calling
//export const Greet =({name,heroName}) =>{
// 2st Method for Calling
  export const Greet =props =>{

    const {name,heroName} = props

  //props.name ="SMIT"
  return(
<div>
  <h1>Hello {name} & {heroName} </h1>

</div>

  )
} 




export default Greet;
