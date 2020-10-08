import React from 'react';
import TodoElement from "../TodoElement/TodoElement";
import styles from "./TodoList.module.css";
const TodoList = (props) => {
  let state = props.store.getState().toDos;
  let toDosElements = state.map((el) => {
    return <TodoElement store={props.store} text={el.text} id={el.id} checked={el.checked}/>
  });
  return (
    <div className={styles["todoList-wrapper"]}>
      { toDosElements }
    </div>
  )
};

export default TodoList;