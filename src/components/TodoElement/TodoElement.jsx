import React from "react";
import styles from "./TodoElement.module.css";
import {updateTodoCheckedStatus} from "../../redux/todoReducer";
const TodoElement = (props) => {
  let onTaskCheckboxChange = () => {
    props.store.dispatch(updateTodoCheckedStatus(props.id))
  };
  let className = "task";
  props.checked ? className = "task-checked" : className = "task";

  return (
    <div className={styles["toDo-element"]}>
      <input className={styles["checkbox"]} type="checkbox" onChange={onTaskCheckboxChange}/>
      <span className={styles[className]}>{props.text}</span>
    </div>
  )
}

export default TodoElement;