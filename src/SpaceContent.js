import React, { createContext, useState, useEffect, } from 'react'
import axios from "axios"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// const convertMonthToNumber = (monthStr) => {
//   if (monthStr)
// }

export const SpacePicture = createContext();

export const SpacePictureProvider = (props) => {
  const [data, setData] = useState();
  const [startDate, setStartDate] = useState(new Date());

    async function CallAPI(date) {
      setStartDate(date);
      setData();
      const dateInfo = {
        day:date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
      }
      let url = `https://api.nasa.gov/planetary/apod?api_key=jMy2Xqe321pMWh2V5VU7l7EVRVFcCm7Tadrmwtuq&start_date=${dateInfo.year}-${dateInfo.month}-${dateInfo.day}`
      await axios.get(url).then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
    }

    useEffect( () => {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=jMy2Xqe321pMWh2V5VU7l7EVRVFcCm7Tadrmwtuq&count=12").then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
      }, []
    )
  return (
    <div>
      <h1 className="title">Spacetagram
        <p className="subtitle">-- Press on the title/select a start date for more :)</p>
        <DatePicker className="date_picker" selected={startDate} onChange={(date) => CallAPI(date)} />
      </h1>

      <SpacePicture.Provider value={{data}}>
        {props.children}
      </SpacePicture.Provider>
    </div>
  );
};