import React, { useState } from 'react'
import 'moment-timezone';
import Heart from "react-animated-heart";
import { Icon } from 'semantic-ui-react'

function Picture({ data, id }) {
  const [isClick, setIsClick] = useState(false);
  const [isDetailedView, setIsDetailedView] = useState(false);
  const isImg = data.media_type !== "video" ? true : false;

  let pictureInfo = {
    dateTime: data.date,
    title: data.title,
    media_url: isImg ? data.url : "pictureSub.jpeg",
    detailed_media_url: data.url
  }

  if (pictureInfo.title.length > 100) {
    pictureInfo.title = pictureInfo.title.slice(0, 100) + "...";
  }
  if (!isImg) {
    pictureInfo.title += "(Video)"
  }

  return (
    <section>
      <div className="pictures">
        <div className="pictures_header">
          <h2 className="pictures_title" onClick={() => { setIsDetailedView(true) }}>✨&nbsp;{pictureInfo.title}</h2>
          <Heart className="like_btn" isClick={isClick} onClick={() => setIsClick(!isClick)} />
        </div>
        <img src={pictureInfo.media_url} className="pictures_picture" />
        <div className="picture_footer">
          <h4 className="pictures_date">{pictureInfo.dateTime}</h4>
        </div>
      </div>
      {isDetailedView && (
        <div className="details">
          {isImg ? <img src={pictureInfo.detailed_media_url} className="details_picture" /> : <iframe
            className="details_video"
            src={pictureInfo.detailed_media_url}
            frameBorder="0"

            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />}
          <div className="explanation">{data.explanation}</div>
          <button className="close_btn" onClick={() => { setIsDetailedView(false) }}>x</button>
        </div>
      )}
    </section>
  )
}

export default Picture


