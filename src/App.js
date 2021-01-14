import React from 'react'
import Counter from './CustomHooks/Counter';
import Section1 from './CustomHooks/Section1';
import TypingGame from './SpeedType/TypingGame';
import TodoList from './TodoList/TodoList';
import ThemeSwitcher from './UseContext/ThemeSwitcher';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'


function App() {

  return (
    <Router>
      <div>
        <h1>React Router Concepts</h1>
      </div>
    </Router>

  );
}

export default App;
