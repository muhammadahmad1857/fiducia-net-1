import React from "react";
import Sidebar from "./Sidebar";

import Image from "next/image";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";


export default function BlogDetails({ blogItem }) {
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
    <section className="news-standard fix space-top pb-425">
      <div className="container">
        <div className="news-details-area">
          <div className="row g-5">
            <div className="col-12 col-lg-8">
              <div className="blog-post-details">
                <div className="single-blog-post">
                  <div
                    className="post-featured-thumb"
                    data-bg-src=""
                    style={{
                      backgroundImage: `url(${blogItem?.thumb && urlFor(blogItem?.thumb.asset._ref).url()})`,
                    }}
                  />
                  <div className="post-content">
                    <ul
                      className="post-list d-flex align-items-center wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <li>
                        <i className="fa-light fa-user" />
                        By Admin
                      </li>

                      <li
                        style={{
                          textTransform: "capitalize",
                        }}
                      >
                        <Image
                          alt="icon"
                          src="/assets/img/icon/tagIcon.png"
                          width="20"
                          height="20"
                        />
                        {blogItem?.category?.serviceName}
                      </li>
                    </ul>
                    <h3 className="wow fadeInUp" data-wow-delay=".4s">
                      {blogItem?.title}
                    </h3>
                    <PortableText
                      value={blogItem?.content}
                      components={myPortableTextComponents}
                    />
                  </div>
                </div>
                <div
                  className="row tag-share-wrap mt-4 mb-30 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  {/* <div className="col-lg-8 col-12">
                    <div className="tagcloud">
                      <h6 className="d-inline me-2">Tags:</h6>
                      {blogItem.tags.map((tag) => {
                        return <Link href={"#"}>{tag}</Link>;
                      })}
                    </div>
                  </div> */}
                  <div
                    className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end wow fadeInUp"
                    data-wow-delay="1.2s"
                  >
                    <div className="social-share">
                      <span className="me-3">Share:</span>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Sidebar currentBlogCategory={blogItem.category.serviceName} />
          </div>
        </div>
      </div>
    </section>
  );
}
