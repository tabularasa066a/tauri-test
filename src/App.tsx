import logo from "./assets/react.svg";
import "./App.css";
import UserForm from "./UserForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserForm></UserForm>
      </header>
    </div>
  );
}

export default App;