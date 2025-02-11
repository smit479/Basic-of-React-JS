import React,{Component} from "react";
//import Childcom from "./childcom";
class ifloop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false, // Correctly initializing state
    };
   
  }

/// If Loop Simple

  // render() {
  //   if(this.state.isLoggedin ==true)
  //   return (
  //     <div>
  //       <hr></hr>
  //       <h1>HI</h1>
       
  //     </div>
  //   );
  //   else{
  //     return (
  //       <div>
  //         <hr></hr>
  //         <h1>Bye</h1>
         
  //       </div>
  //     );
  //   }
  // }

  
  render() {
    /// Ternary Operator

    // return(
    //   this.state.isLoggedin ? <div> Welcome</div>:<div>HI</div>
    // )

    /// ShortCirciuting
    return this.state.isLoggedin && <div>Welcome</div>
    
  }
}

export default ifloop;
