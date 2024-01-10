import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incretement,
  decrement,
  decrementWithCheckingAction,
} from "../../../app/CounterFeatures/Counter/actions";

const Counter = () => {
  let { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrementWithCheckingAction(1))}>
        -
      </button>
      {""}
      <span>{count}</span>
      {""}
      <button onClick={() => dispatch(incretement(1))}>+</button>
    </div>
  );
};

export default Counter;
