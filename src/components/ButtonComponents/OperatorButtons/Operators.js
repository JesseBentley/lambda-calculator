import React, {useState} from "react";
import OperatorButton from "./OperatorButton"; 
import  {operators} from "../../../data";
//import any components needed

//Import your array data to from the provided data file

const Operators = ({handleClick, handleEqual}) => {
  // STEP 2 - add the imported data to state
  const [op, setOp] = useState(operators);
  
  return (
    <div className="op-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      { 
        op.map((operator, index) => {
          
            return <OperatorButton key={index} char={operator.char} value={operator.value} handleClick={handleClick} handleEqual={handleEqual}/>
        
        })
      }
    </div>
  );
};

export default Operators