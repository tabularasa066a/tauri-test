import logo from "./assets/react.svg";
import "./App.css";
import MyComponent from "./MyComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent></MyComponent>
      </header>
    </div>
  );
}

export default App;