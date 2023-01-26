import React from "react";
import s from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo }) => {
  return <ul className={s.todolist}>
    {todos.map(({id, text}) => {
        return (<li key={id} className={s.item}>
            <p className={s.text}>{text}</p>
            <button className={s.button} onClick={() => onDeleteTodo(id)} >Видалити</button>
        </li>
    )})}
  </ul>;
};

export default TodoList;
