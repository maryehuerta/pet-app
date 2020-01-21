import React from 'react';
import Menu from './menu'
import TodoList from './todolist'
import './App.css';

const todos = [
  {
    id: 1,
    task: 'Brush Colby',
    due: new Date('01/31/2020')
  }
]

function App() {
  return (
    <div className="ui segment">
      <Menu></Menu>
      <div className="ui segment">
        <TodoList todos={todos}/>
      </div>
    </div>
  );
}

export default App;
