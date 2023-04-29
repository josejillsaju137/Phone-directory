import React, { useState ,useEffect} from "react";
import Displayboard from "./Child";
import "./App.css";
export default function App() {
  const [names, setNames] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mainData, setMainData] = useState([]);
  const onDelete = (index) => {
    console.log("index", index);
    // @ts-ignore
    setMainData((prev) => prev.filter((data, i) => data?.index !== index));
  };
  const onEdit = ( propI,propNames,propPhoneNumber ) =>
  {

    console.log("i" , propI)
   //Find index of specific object using findIndex method.
// @ts-ignore
const objIndex = mainData.findIndex((obj => obj?.index == propI));

//Log object to Console.
console.log("Before update: ", mainData[objIndex])

//Update object's name property.
// @ts-ignore
mainData[objIndex].name = propNames
// @ts-ignore
mainData[objIndex].phoneNumber = propPhoneNumber
// @ts-ignore
mainData[objIndex].status = "edited"

//Log object to console again.
console.log("After update: ", mainData[objIndex])
  };
  useEffect(() => {


  }, [mainData])
  return (
    <div className='App'>
      <form
        className='form'
        onSubmit={(event) => {
          // @ts-ignore
          setMainData((prev) => [
            ...prev,
            { name: names, phoneNumber: phoneNumber,index:(Math.random())  },
          ]);
          event.preventDefault();
        }}>
        <div className='row'>
          <input
            placeholder=' Name :'
            id='name'
            onChange={(event) => setNames(event.target.value)}
            type='text'></input>
        </div>
        <div className='row'>
          <input
            placeholder=' Phone Number :'
            id='phonenumber'
            onChange={(event) => setPhoneNumber(event.target.value)}
            type='text'></input>
        </div>
        <div>
          <input
            className='row'
            type='submit'></input>
        </div>
      </form>

      <div>
        {mainData !== null
          ? mainData.map((value, key) => {
              return (
                <div
                  className='main'
                  key={key}>

                  <Displayboard
                    onDelete={onDelete}
                    onEdit={onEdit}
                    mainData={value}

                  />
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}
