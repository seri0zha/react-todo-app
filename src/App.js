import React from 'react';
import './App.css';
import InputArea from './components/InputArea/InputArea';
import TodoList from './components/TodoList/TodoList';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <InputArea store={props.store}/>
      <TodoList store={props.store}/>
      <div>
        Icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik </a>
        from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </div>
    </div>
  );
}

export default App;
