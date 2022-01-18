import React from 'react';
import { useDispatch } from 'react-redux';
import toggleAction from './actions/toggleAction';
import removeAction from './actions/removeAction';
import updateAction from './actions/updateAction';

function TodoCard({
  todo, className, id,
}) {
  const dispatch = useDispatch();

  const handleSave = e => {
    e.stopPropagation();
    const title = e.target.parentNode.parentNode.childNodes[0].firstChild.value;
    const description = e.target.parentNode.parentNode.childNodes[1].firstChild.value;
    dispatch(updateAction({ id, title, description }));
  };


  return (
    <li data-testid="todo-card" id={id} className={className}>
      <h3 className="todo-list__text">
        <textarea onChange={e => handleSave(e)} className="text-field" defaultValue={todo.title}></textarea>
      </h3>
      <p className="todo-list__text">
        <textarea onChange={e => handleSave(e)} className="text-field" defaultValue={todo.description}></textarea>
      </p>
      <button
        className="todo-container__button todo-container__button--card"
        onClick={() => dispatch(toggleAction(id))}>
        { todo.isDone ? 'Undone' : 'Done'}
      </button>
      {
        className.includes('done')
          ? <button
              className="todo-container__button todo-container__button--danger"
              onClick={() => dispatch(removeAction(id))}>
              Remove
            </button>
          : ''
      }
    </li>
  );
}

export default TodoCard;
