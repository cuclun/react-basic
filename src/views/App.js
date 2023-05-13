import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';

// const App = () => {} Arrow Function
function App() {
  // JSX
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello everyone
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />
        {/* <MyComponent></MyComponent> */}
      </header>
    </div>
  );
}

export default App;
