import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByPayload } from "../redux/Counter/counterAction";

const Counter = () => {
  const countSelector = useSelector((state) => state.counter.countValue);
  const dispatch = useDispatch();
  const [payload, setPayload] = useState(0);

  const handlePayload = (e) => {
    setPayload((prev) => e.target.value);
  };

  return (
    <div className="d-flex align-items-center gap-3 ">
      <button className="btn btn-danger" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <span className="text-white fs-1">{countSelector}</span>
      <button className="btn btn-primary" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <div>
        <button className="btn btn-primary" onClick={() => dispatch(incrementByPayload(payload))}>
          Increment
        </button>
        <input type="number" name="number" value={payload} onChange={handlePayload} />
      </div>
    </div>
  );
};

export default Counter;
