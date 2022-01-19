import React, { useState } from 'react'
import 'moment-timezone';
import Heart from "react-animated-heart";
import { Icon } from 'semantic-ui-react'

function Picture({ data }) {
  console.log(data)
  const [isClick, setIsClick] = useState(false);
  const [isDetailedView, setIsDetailedView] = useState(false);
  const isImg = data.media_type !== "video" ? true : false;
  var dateTime = data.date;
  var title = data.title;
  var titleFormatted = title;
  if (title.length > 100) {
    titleFormatted = title.slice(0, 100) + "...";
  }
  if (!isImg) {
    titleFormatted += "(Video)"
  }
  var media_url = isImg ? data.url : "pictureSub.jpeg";
  var detailed_media_url = data.url;
  var emoji = '✨'

  return (
    <section id="me">
      <div className="pictures">
        <div className="pictures_header">
          <h2 className="pictures_title" onClick={() => { setIsDetailedView(true) }}>{emoji}&nbsp;{titleFormatted}</h2>
          <Heart className="like_btn" isClick={isClick} onClick={() => setIsClick(!isClick)} />
        </div>
        <img src={media_url} className="pictures_picture" />
        <div className="picture_footer">
          <h4 className="pictures_date">{dateTime}</h4>
        </div>
      </div>
      {isDetailedView && (
        <div className="details">
          {isImg ? <img src={detailed_media_url} className="details_picture" /> : <iframe
            className="details_video"
            src={detailed_media_url}
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


