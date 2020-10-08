let store = {
  _state: {
    toDos: [
      {text: "To do something", id: 1},
      {text: "One two three", id: 2}
    ],
    newToDoText: "",
    toDoId: "1",
  },
  getState() {
    return this._state;
  },
}

export default store;