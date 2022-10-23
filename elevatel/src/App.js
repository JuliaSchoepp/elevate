import logo from './logo.svg';
import './App.css';
import { DataProvider } from './DataProvider';
import HelloWorld from './HelloWorld.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <div>
      <DataProvider>
        <HelloWorld/>
      </DataProvider>
      </div>
    </div>
  );
}

export default App;
