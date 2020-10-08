import React from 'react';
import {addTodoCreator, updateTodoTextCreator} from "../../redux/todoReducer";
import styles from './InputArea.module.css';

const InputArea = (props) => {

  //catching changes in input field
  let onInputAreaChange = (e) => {
    let text = e.target.value;
    props.store.dispatch(updateTodoTextCreator(text));
  };

  //button click action creator, adding element to todolist
  let onAddTodoButtonClick = () => {
    props.store.dispatch(addTodoCreator());
  };

  let onInputKeyPress = (e) => {
    if (e.key === "Enter") {
      onAddTodoButtonClick();
    }
  }

  //newTodoText is a text which is already in input field, but not in todoList yet
  let newTodoText = props.store.getState().newToDoText;
  return (
    <div className={styles["input-area-wrapper"]}>
      <h1>Things to do</h1>
      <div className={styles["input-wrapper"]}>
        <input type="text"
               onKeyPress={onInputKeyPress}
               className={styles.input}
               placeholder="What's your task?"
               onChange={onInputAreaChange} value={newTodoText}/>
      </div>
      <div className={styles["button-wrapper"]}>
        <button className={styles["button"]}
                onClick={onAddTodoButtonClick}>Add todo</button>
      </div>
    </div>
  )
};

export default InputArea;