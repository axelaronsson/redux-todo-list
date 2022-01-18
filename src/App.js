import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import hideShowAction from './actions/hideShowAction';
import initAction from './actions/initAction';
import addTodo from './actions';
import './App.css';
import TodoList from './TodoList';

function App() {
  const reduxTodos = useSelector(state => state.todos);
  const hideShowTodos = useSelector(state => state.hideTodos);

  const dispatch = useDispatch();

  useEffect(() => {
    if (reduxTodos.length !== 0) {
      localStorage.setItem('todos', JSON.stringify(reduxTodos));
    }
  }, [reduxTodos]);

  window.onload = () => {
    const storageTodos = JSON.parse(localStorage.getItem('todos'));
    if (storageTodos && storageTodos.length > 0) {
      dispatch(initAction(storageTodos));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: e.target.childNodes[1].value,
      description: e.target.childNodes[4].value,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    e.target.childNodes[1].value = '';
    e.target.childNodes[1].focus();
    e.target.childNodes[4].value = '';
  };

  const handleHideShow = () => {
    dispatch(hideShowAction());
  };

  return (
    <main>
      <div className="todo-container">
      <form className="todo-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input name="title" className="todo-form__input" type="text" /><br></br>
        <label htmlFor="description">Description</label>
        <input name="description" className="todo-form__input" type="text" /><br></br>
        <button className="todo-container__button">Add</button>
      </form>
      <button style={hideShowTodos ? { backgroundColor: '' } : { backgroundColor: 'white', color: 'black', border: '1px solid' }} className="todo-container__button" onClick={handleHideShow}>Hide/Show</button>
      <TodoList hidden={hideShowTodos ? 'hide' : 'show'} todos={reduxTodos}/>
      </div>
    </main>
  );
}

export default App;
