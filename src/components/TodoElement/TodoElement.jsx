import React from "react";
import styles from "./TodoElement.module.css";
import {deleteTodo, updateTodoCheckedStatus} from "../../redux/todoReducer";
const TodoElement = (props) => {
  let onTaskCheckboxChange = () => {
    props.store.dispatch(updateTodoCheckedStatus(props.id));
  };

  let onDeleteButtonClick = () => {
    props.store.dispatch(deleteTodo(props.id));
  };
  let className = "task";
  props.checked ? className = "task-checked" : className = "task";

  return (
    <div className={styles["toDo-element"]}>
      <input className={styles["checkbox"]} type="checkbox" onChange={onTaskCheckboxChange} checked={props.checked}/>
      <span className={styles[className]}>{props.text}</span>
      <button className={styles["delete-button"]} onClick={onDeleteButtonClick}>X</button>
    </div>
  )
}

export default TodoElement;