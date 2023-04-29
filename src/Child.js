import "./App.css";
import React, { useState,useEffect } from "react";
import { AiTwotoneDelete, AiFillEdit } from "react-icons/ai";

const Displayboard = (props) => {
  const [names, setNames] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  //   console.log("main data prop", props.mainData);
  const onDeleteFunction = () => {
    console.log("delete function");
    props.onDelete(props.mainData.index);
    console.log(props.mainData.index, "props.mainData.phonNumber");
  };
  const onEditFunction = () => {
    props.onEdit(props.mainData.index,names,phoneNumber);
    };


  return (
      <div className='table'>
          {props.mainData.status=="edited"?  <h6>{props.mainData.status}</h6>:""   }

      <div>

        <input
          className='font '
          defaultValue={props.mainData.name}
          onChange={(event) => setNames(event.target.value)}></input>
      </div>
      <div>
        {" "}
        <input
          className='font '
          defaultValue={props.mainData.phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}></input>
      </div>

      {/* <h1 className='font '>{props.mainData.index}</h1> */}
      <div
        onClick={() => {
          onDeleteFunction();
          //   console.log("czc");
        }}
        className='icon'>
        <AiTwotoneDelete />
      </div>
      <div
        onClick={() => onEditFunction()}
        className='icon'>
        <AiFillEdit />{" "}
      </div>
    </div>
  );
};
export default Displayboard;
