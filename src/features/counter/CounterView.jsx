import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={()=>dispatch(incrementByAmount(5))}>increment by 5</button>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
  );
};

export default CounterView;
