"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client"; // Adjust the path as necessary
import { urlFor } from "@/sanity/lib/image";
import MuxPlayer from "@mux/mux-player-react";

export default function VideoBox() {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [thumb, setThumb] = useState("");

  useEffect(() => {
    // Fetch video data from Sanity
    const fetchVideo = async () => {
      const query = '*[_type == "video"] { video { asset } , thumb {asset}}'; // Adjust based on your schema
      const data = await client.fetch(query);
      if (data.length > 0) {
        setVideoId(data[0].video.asset.playbackId); // Get the first video's playback ID
        setThumb(urlFor(data[0].thumb.asset._ref).url());
      }
    };

    fetchVideo();
    console.log(thumb);
    console.log(isOpen);
  }, []);
 

  return (
    <>
      <div
        className="video-box-area mt-n355 fix wow fadeInUp"
        data-wow-delay="1s"
      >
        <div className="video-wrap style1">
          <div className="container">
            <div
              className="video-box"
              style={{
                backgroundImage: `url(${thumb})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <a onClick={() => setOpen(true)} className="play-btn popup-video">
                <i className="fa-sharp fa-solid fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: "0",
            margin: "auto",
            zIndex: "999999999999999999999",
          }}
        >
          <MuxPlayer playbackId={videoId} placeholder={thumb} />
          <button onClick={() => setOpen(false)} className="mux-button">
            <i className="fa fa-times"></i>
          </button>
        </div>
      )}
    </>
  );
}
