import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { InNumber, DecNumber } from "./actions";

const App = () => {
  const myState = useSelector((state) => state.ChangeNumber);
  const dispach = useDispatch();
  return (
    <div>
      <div className="container">
        <h1 style={{color:"blue"}}>increment/decrement counter</h1>
        <h4>using react and redux</h4>

        <div className="quantity">
          <a
            className="quantity_minus"
            title="Decrement"
            onClick={() => dispach(DecNumber())}
          >
            <button style={{backgroundColor:"blue", color:"white"}}>
            <span>-</span>
            </button>
          </a>
          <input
            type="text"
            name="quantity"
            className="quantity_input"
            value={myState}
            style={{textAlign:"center",padding:"10px",borderRadius:"10px" ,backgroundColor:"skyblue",color:"blue",fontSize:"20px"}}
          />
          <a
            className="quantity_plus"
            title="Increment"
            onClick={() => dispach(InNumber())}
          >
            <button style={{backgroundColor:"blue", color:"white"}}>
            <span>+</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
