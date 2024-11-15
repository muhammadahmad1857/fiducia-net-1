"use client";
import Image from "next/image";
import { hours } from "@/data/services";
import Faq1 from "../faq/Faq1";
import MuxPlayer from "@mux/mux-player-react";
import { useState, useEffect } from "react";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
export default function ServiceDetails({
  serviceItem,
  serviceCategory,
  faqData,
}) {
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
  }, []);

  const myPortableTextComponents = {
    types: {
      image: ({ value, isInline }) => (
        <img
          src={urlFor(value).width(20000).fit("max").auto("format").url()}
          alt={value.alt || "Blog image"}
          style={{
            display: isInline ? "inline-block" : "block",
            minWidth: "100%",
            margin: "30px 0px",
          }}
        />
      ),
    },
  };

  return (
    <>
      <section className="service-details-section space-top pb-425 fix">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-4">
              <div className="col-12 col-lg-4 order-2 order-md-1">
                <div className="main-sidebar">
                  <div
                    className="single-sidebar-widget wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="wid-title">
                      <h3>All Services</h3>
                    </div>
                    <div className="news-widget-categories">
                      <ul>
                        {serviceCategory.map((item, index) => (
                          <li
                            key={index}
                            className={
                              item.slug.current === serviceItem.slug.current
                                ? "active"
                                : ""
                            }
                          >
                            <a
                              href={`/services/service-details/${item.slug.current}`}
                            >
                              {item.serviceName}
                              <span>
                                <i className="fa-light fa-arrow-right-long" />
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div
                    className="single-sidebar-widget wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div className="wid-title">
                      <h3>Opening Hours</h3>
                    </div>
                    <div className="opening-category">
                      <ul>
                        {hours.map((hour, index) => (
                          <li key={index}>
                            <i className={hour.iconClass} />
                            {hour.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div
                    className="single-sidebar-image bg-cover wow fadeInUp"
                    data-wow-delay="1s"
                    data-bg-src=""
                    style={{
                      backgroundImage:
                        "url(/assets/img/service/serviceThumb3_5.png)",
                    }}
                  >
                    <div className="contact-text">
                      <div className="icon">
                        <i className="fa-solid fa-phone" />
                      </div>
                      <h4>Need Help? Call Here</h4>
                      <h5>
                        <a href="tel:+2085550112">+208-555-0112</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8 order-1 order-md-2">
                <div className="service-details-items">
                  <div className="details-image">
                    <Image
                      alt="img"
                      src={urlFor(serviceItem.thumb.asset._ref).url()}
                      width="770"
                      height="470"
                    />
                  </div>
                  <div className="details-content">
                    <h3 className="wow fadeInUp" data-wow-delay=".6s">
                      {serviceItem.title}
                    </h3>
                    <p className="mt-3 wow fadeInUp" data-wow-delay=".9s">
                      <PortableText
                        value={serviceItem.body}
                        components={myPortableTextComponents}
                      />
                    </p>

                    <div
                      className="details-video-items wow fadeInUp"
                      data-wow-delay="1.3s"
                    >
                      <div className="video-thumb">
                        <Image alt="img" src={thumb} width="405" height="257" />
                        <a
                          onClick={() => setOpen(true)}
                          className="play-btn popup-video"
                        >
                          <i className="fa-sharp fa-solid fa-play" />
                        </a>
                      </div>
                      <div className="content">
                        <h4>Benefits With Our Service</h4>
                        <p>
                          Fusce is eleifend porta arcu In hac <br />
                          habitasse the platea thelorem
                        </p>
                        <ul className="list ps-0">
                          <li>
                            <i className="fa-regular fa-circle-check" />
                            Branding and design Identity
                          </li>
                          <li>
                            <i className="fa-regular fa-circle-check" />
                            Web site Marketing Solutions
                          </li>
                          <li>
                            <i className="fa-regular fa-circle-check" />
                            unlimited Download Data
                          </li>
                        </ul>
                      </div>
                    </div>
                    <h3 className="wow fadeInUp" data-wow-delay="1.8s">
                      Most Comment Question?
                    </h3>
                    <p className="mt-25 wow fadeInUp" data-wow-delay="1.9s">
                      The is ipsum dolor sit amet consectetur adipiscing elit.
                      Fusce is eleifend porta arcu In hac habitasse the platea
                      thelorem turpoi dictumst. In lacus libero faucibus
                      malesuada.
                    </p>
                  </div>
                  <div className="faq-content style-3">
                    <div className="faq-accordion">
                      <Faq1 data={faqData} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
