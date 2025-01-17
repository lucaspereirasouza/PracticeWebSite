import React from "react";
import Image from "next/image";

const VideoCard = ({ thumbnail, title, views, time }:any) => {
  return (
    <div className="video">
      <div className="thumbnail"></div>
      <div className="title">
        <div className="channel-Image">
          <Image src={thumbnail} width={250} height={250} alt="Thumbnail" />
        </div>
        <div className="title-text">
          <div className="title-name">{title}</div>
          <div className="views">{views}</div>
          <div className="time">{time}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
