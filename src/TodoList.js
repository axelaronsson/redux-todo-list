import React, { useEffect, useState } from 'react';
import TodoCard from './TodoCard';

function TodoList({ todos, hidden }) {
  const [orderedList, setOrderedList] = useState([]);

  useEffect(() => {
    const todoArr = todos.map(item => item);
    todoArr.sort((a, b) => b.id - a.id);
    todoArr.sort((a, b) => a.isDone - b.isDone);
    setOrderedList(todoArr);
  }, [todos]);

  return (
    <div data-testid="todo-list">
      <ul className="todo-list">
        { orderedList.map(todoItem => <TodoCard id={todoItem.id} key={todoItem.id} todo={todoItem} className={todoItem.isDone ? `todo-list__card todo-list__card--done ${hidden}` : 'todo-list__card'}/>) }
      </ul>
    </div>
  );
}

export default TodoList;
