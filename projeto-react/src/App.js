import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Text from "./components/Text/Text";


/* //Exemplo de uso por function 
  
  function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Raffinha aqui! uh, uh é o terror!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
// exemplo de uso por class
export default class App extends React.Component {
    render() {
        return (
            <div>
                <Text texto="Olá, Mundo!" />
                <Text texto="Olá, Rafael!" />
                <Text texto="Olá, Brasil!" />
            </div>
        );
    }
}
