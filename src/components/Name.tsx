import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectName, selectTitle } from "../redux/slices/selectors";
import { addName, addTitle } from "../redux/slices/name";

type Props = {};

const Name = (props: Props) => {
  const enteredName = useSelector(selectName);
  const title = useSelector(selectTitle);
  const dispatch = useDispatch();
  // const handleClick=(addName: any)=>{dispatch(addName)}

  return (
    <div>
      {title ? (
        <h4 style={{ backgroundColor: "green" }}>{title}</h4>
      ) : (
        <h4 style={{ backgroundColor: "red" }}>Enter title to display...</h4>
      )}
      <div>
        <input
          type="text"
          value={enteredName}
          placeholder="enter text to display..."
          onChange={(e) => dispatch(addName(e.target.value))}
        />
        <button onClick={() => dispatch(addTitle(enteredName))}>Apply</button>
      </div>
    </div>
  );
};

export default Name;
