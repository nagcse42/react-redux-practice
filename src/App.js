import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/index";

function App() {
  const counerState = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello Counter: {counerState}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLoggedIn ? <h4>You are loggedin</h4> : ""}
    </div>
  );
}

export default App;
