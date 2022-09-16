import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="hero-container">
        <h1>hero container</h1>
      </div>
    </div>
  );
}

export default App;
