import Image from "next/image";
import "./components/css/index.css";
import "./components/css/style.css";

import VideoCard from "./components/videoCard";
import ErrorNotification from "./components/errorNotification";
import React from "react";
import axios from "axios";



type videoType = {
  id?: any;
  snippet?: {
    thumbnails: { medium: { url: any; }; };
    title: any; publishedAt: string | number | Date;
  };
  statistics?: { viewCount: any; };
}


export default async function Home() {

  let videos:any = [];
  try {
    const response = await axios.get(

      process.env.YT_API_URL + "/v3/videos"!,
      {
        params: {

          part: "snippet,statistics",
          chart: "mostPopular",
          maxResults: 9,
          regionCode: "US",
          key: process.env.YT_API_KEY
        }
      })
    
    videos = response.data.items || [];



    return (
      <>
        <div className="menu">
          <div className="youtubeicon"></div>
          <div className="search">
            <input type="text" className="search" />
            <button className="search-btn" type="submit">
              search
            </button>
          </div>
          <a className="loginBtn" href="pages/login.html">
            <Image
              src="/src/Image/user-interface.png"
              height={50}
              width={50}
              alt="Login"
            />
            Login
          </a>
        </div>
        <div className="home">
          <div className="home-tab">
            <button className="home-tab-button">Home</button>
            <button className="channels-tab-button">Channel</button>
          </div>

          <div className="videos">
            <div className="video">
              <div className="thumbnail"></div>
              <div className="title">
                <div className="channel-Image">
                  <Image
                    src="/src/Image/thumbnailYoutube.png"
                    width={250}
                    height={250}
                    alt="Thumbnail"
                  />
                </div>
                <div className="title-text">
                  <div className="title-name">Soundgarden - black hole sun</div>
                  <div className="views">10 Visualizações</div>
                  <div className="time">10 anos atrás</div>
                </div>
              </div>
            </div>

            {videos.map((video): any => {

              <VideoCard

                thumbnail={video.snippet.thumbnails.medium.url}
                title={video.snippet.title}
                views={`${video.statistics.viewCount} Visualizações`}
                time={new Date(video.snippet.publishedAt).toLocaleDateString()}
              />
            })}

          </div>

          <div className="suggestion">
            <h1>Install Youtobas Music</h1>
            <p className="SubText">
              Add Youtobas Music to your desktop quick and easy access
            </p>
            <button className="exit-suggestion-btn">
              <Image
                src="/src/Image/icons/cross.png"
                alt="Close"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </>
    );
  } catch (error) {
    
    videos = [];

    return(
      <ErrorNotification message={"Videos não encontrados, tente novamente"}>teste</ErrorNotification>
    )
  }
}
