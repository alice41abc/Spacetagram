import React, { useContext } from 'react'
import { SpacePicture } from '../SpaceContent'
import Picture from './Picture'

function Pictures() {
  const { data } = useContext(SpacePicture);
  return (
    <div className="all_pictures">
      {data ? data.map(pictures => (
        <Picture data={pictures} />
      )) : <div className="load"><img src="loader.gif" /><span>b l a s t i n g &nbsp; o f f...</span></div>}
    </div>
  )

}

export default Pictures