import"./App.css";
import childClass from "./component/childComponent";
import childComponent from "./component/childComponent";
function App() {
  const msg="Hi from parent component-app";
  const msg1="Hi from parent component class"
  return (
    <div className="App">
        <childComponent>
          <childClass message={msg1}/>
        </childComponent>
    </div>
  )
}

export default App;
