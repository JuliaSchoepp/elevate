import './App.css';
import React from 'react';
import Content from './Content';
import { FetchAPIData } from './Fetch';

export const UserContext = React.createContext();

function App() {
  
  return (
    <div className="App">
      <header >
            <h1>Elevate!</h1>
      </header>
      <div>
      <UserContext.Provider value="Hello World">
          <Content />
      </UserContext.Provider>
      </div>
      <div>
        <FetchAPIData />
      </div>
    </div>
  );
}

export default App;
