import React from 'react';
import './todo-list-item.css';


const TodoListItem = ({label, done, important, onDeleted, onToggleImportant, onToggleDone}) => {

  const classNames = `todo-list-item ${done ? `done` : ``} ${important ? `important` : ``}`;

  const style = {
    color: important ? `steelblue` : `black`,
    fontWeight: important ? `bold` : `normal`,
  };

  return (
    <span className={classNames}>
      <span
        className="todo-list-item-label"
        style={style}
        onClick={onToggleDone}
        onKeyDown={onToggleDone}
        role="button"
        tabIndex={0}>
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onToggleImportant}>
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeleted}>
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
