import React from "react";
import store from "../store";
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
} from "../store/actionTypes";

export default class BindEvent extends React.Component {
  constructor() {
    super();
    (this.state = store.getState()), console.log(store.getState());
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputChange2 = this.handleInputChange2.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <div>
        <hr />
        <button onClick={this.handleClick}>按钮</button>
        <h1>{this.state.msg}</h1>
        <input
          type="text"
          style={{ width: "100%" }}
          value={this.state.msg}
          onChange={this.handleInputChange}
        />
        <hr />
        <input
          type="text"
          style={{ width: "100%" }}
          value={this.state.msg}
          onChange={this.handleInputChange2}
          ref="txt"
        />
      </div>
    );
  }
  handleInputChange(e) {
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value,
    };
    store.dispatch(action);
  }
  handleInputChange2(e) {
    const action = {
      type: DELETE_TODO_ITEM,
      value: e.target.value,
    };
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleClick() {
    const action = {
      type: ADD_TODO_ITEM,
    };
    store.dispatch(action);
  }
}
