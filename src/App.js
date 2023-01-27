import logo from './logo.svg';
import './App.css';
import { Jokes } from './Jokes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Jokes /> <br/><br/>
          <code>Papygram</code>.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Don Bitcoin
        </a>
      </header>
    </div>
  );
}

export default App;
