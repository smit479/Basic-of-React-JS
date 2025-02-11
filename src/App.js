//import logo from './logo.svg';
import './App.css';
import Greet  from './components/Functional_Components/Greet';
import Welcome from './components/Class_Component/Welcome';
import States from './components/States/states';
import FunctionalClick from './components/Event_handling/FunctionClick';
import ClassClick from './components/Event_handling/ClassClick';
import Parentcom from './components/parent_child/parentcom';
import IfLoop from './components/Conditionals/ifloop';
import List from './components/List/List';
import ListKeys from './components/List/ListKeys';
import Sheet1 from './components/StyleSheet/Sheet1';
import styles from  './appStyles.module.css'

//classClicked

//import JSX2 from './components/JSXworld/JSX2'

function App() {
  return (
    <div className="App">

      <div class="row">
        <div class="col-md-4"><Greet name ="Smit" heroName="KRISH">
        <p>THIS IS CHILDREN</p></Greet></div>
        <div class="col-md-4"><Greet name ="SMitPanchal" heroName="KRISH">
        <button>Send</button></Greet></div>
        <div class="col-md-4"> <Welcome name ="Smit" heroName="KRISH1"/></div>
      </div>
      {/* Functional  Compoments Props*/}
      
      
      


        {/* Class Compoments Props*/}
        <Welcome name ="Smit" heroName="KRISH"/>
        <Welcome name ="Smit" heroName="KRISH"/>


         {/* State Updating*/}
        <States></States>
        <FunctionalClick />
        <ClassClick></ClassClick>


        <Parentcom/>
  <IfLoop></IfLoop>
  <List></List>
  <ListKeys></ListKeys>
  <Sheet1 primary ={true}></Sheet1>
 
  <h1 className={styles.success}>Error</h1>
       
          

      {/* <Greet></Greet>
      <Welcome></Welcome>
      <JSX2></JSX2> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload   .
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
