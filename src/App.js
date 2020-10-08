import React from 'react';
import './App.css';
import InputArea from './components/InputArea/InputArea';
import TodoList from './components/TodoList/TodoList';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <InputArea store={props.store}/>
      <TodoList store={props.store}/>
    </div>
  );
}

export default App;
