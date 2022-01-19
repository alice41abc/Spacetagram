import React, { createContext, useState, useEffect, } from 'react'
import axios from "axios"

export const SpacePicture = createContext();

export const SpacePictureProvider = (props) => {
  const [data, setData] = useState();

    async function CallAPI(name) {
      let url = 'https://api.nasa.gov/planetary/apod?api_key=jMy2Xqe321pMWh2V5VU7l7EVRVFcCm7Tadrmwtuq&count=12'

      await axios.get(url).then((response) => {
        console.log(response)
        setData(response.data);
      })
      .catch((error) => console.log(error));
    }
    useEffect( () => {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=jMy2Xqe321pMWh2V5VU7l7EVRVFcCm7Tadrmwtuq&count=12").then((response) => {
        console.log(response)
        setData(response.data);
      })
      .catch((error) => console.log(error));
      }, []
    )
  return (
    <div>
      <h1 className="title">Spacetagram
        <p className="subtitle">-- Press on the title for more :)</p>
      </h1>

      <SpacePicture.Provider value={{data}}>
        {props.children}
      </SpacePicture.Provider>
    </div>
  );
};