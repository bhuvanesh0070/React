import './App.css';
//import { AndCondition } from './components/AndCondition';
// import  ConditionalRendering  from './components/ConditionalRendering';
import { TernaryCondition } from './components/TernaryCondition';
//  import ChildClass from './components/ChildClass';
//  import ChildComponent from './components/ChildComponent';
// import Counter from './components/Counter';

function App() {
  //  const msg="Hi from parent component-app"
  //  const msg1="Hi from parent component class"
  return (

    <div className="App">
      {/* <ChildComponent message={msg}/>
      <ChildClass message={msg1}/>   */}
       {/* <Counter/> 
       <ConditionalRendering/>  */}
      <TernaryCondition/>
      {/* <AndCondition/> */}
    </div>
  );
}

export default App;