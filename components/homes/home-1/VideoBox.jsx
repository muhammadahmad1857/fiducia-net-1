"use client";

import { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import { client } from "@/sanity/lib/client"; // Adjust the path as necessary

export default function VideoBox() {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    // Fetch video data from Sanity
    const fetchVideo = async () => {
      const query = '*[_type == "video"] { video { playbackId } }'; // Adjust based on your schema
      const data = await client.fetch(query);
      if (data.length > 0) {
        setVideoId(data[0].video.playbackId); // Get the first video's playback ID
      }
    };

    fetchVideo();
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
                backgroundImage: "url(/assets/img/bg/videoBoxBg1_1.png)",
              }}
            >
              <a onClick={() => setOpen(true)} className="play-btn popup-video">
                <i className="fa-sharp fa-solid fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="mux"
        isOpen={isOpen}
        videoId={videoId} // Use the fetched videoId
        onClose={() => setOpen(false)}
      />
    </>
  );
}
