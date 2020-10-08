const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const UPDATE_NEW_TODO = "UPDATE_NEW_TODO";
const UPDATE_TODO_CHECKED_STATUS = "UPDATE_TODO_CHECKED_STATUS";

/*
const deleteTodoCreator = () => {
  return {
    type: DELETE_TODO,
  }
}
*/

let initialState = {
  toDos: [],
  newToDoText: "",
  toDoId: 1,
}

const todoReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      let text = state.newToDoText;
      state.toDos.push({text: text, id: ++state.toDoId, checked: false});
      state.newToDoText = "";
      return state;
    case UPDATE_NEW_TODO:
      state.newToDoText = action.text;
      return state;
    case UPDATE_TODO_CHECKED_STATUS:
      let index = state.toDos.findIndex(obj => obj.id === action.id);
      let isChecked = state.toDos[index].checked;
      state.toDos[index].checked = !isChecked;
      return state;
    default:
      return state;
  }
}

//action creators
export const addTodoCreator = () => {
  return {
    type: ADD_TODO,
  }
}

export const updateTodoTextCreator = (text) => {
  return {
    type: UPDATE_NEW_TODO,
    text: text,
  }
}

export const updateTodoCheckedStatus = (id) => {
  return {
    type: UPDATE_TODO_CHECKED_STATUS,
    id: id,
  }
}

export default todoReducer;