import React, {useContext} from 'react'
import {SpacePicture} from '../SpaceContent'


function Footer() {
  const {data} = useContext(SpacePicture);
  return (
    <div>{data? <div className="footer"> <p>Refresh to see more</p> </div>:<div/>}</div>
  )

}

export default Footer