"use client";
import { blogCards } from "@/data/blogs";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchData } from "@/data/sanityData";
import { urlFor } from "@/sanity/lib/image";

export default function Blog() {
  const [blogCards, setBlogCards] = useState([]);
  const fetchBlogCards = async () => {
    const response = await fetchData("blogs");
    setBlogCards(response);
  };
  useEffect(() => {
    fetchBlogCards();
  }, []);
  return (
    <section className="blog-area fix">
      <div
        className="blog-wrap style1 space-top pb-425"
        style={{ backgroundImage: "url(/assets/img/bg/blogBg1_1.png)" }}
      >
        <div className="shape1_1 movingX d-xl-block d-none">
          <Image
            alt="shape"
            width="358"
            height="393"
            src="/assets/img/shape/blogShape1_1.png"
          />
        </div>
        <div className="container">
          <div className="title-area mx-auto">
            <h5
              className="subtitle text-center wow fadeInUp"
              data-wow-delay=".3s"
            >
              <span>
                <Image
                  alt="icon"
                  width="28"
                  height="12"
                  src="/assets/img/icon/titleIcon.png"
                />
              </span>{" "}
              News &amp; Article{" "}
              <span className="ms-1">
                <Image
                  alt="icon"
                  width="28"
                  height="12"
                  src="/assets/img/icon/titleIcon.png"
                />
              </span>
            </h5>
            <h2
              className="title text-center mb-50 wow fadeInUp"
              data-wow-delay=".3s"
            >
              Read our latest insights
            </h2>
          </div>
          <div className="blog-card-wrap style1">
            {blogCards.slice(0,3).map((card, index) => {
              // Create a Date object from the _createdAt field
              const dateObj = new Date(card._createdAt);

              // Extract day, date, month, and year
              const date = dateObj.getDate();
              const month = dateObj.toLocaleString("en-US", { month: "long" });
              return (
                <div
                  className="blog-card style1 img-shine wow fadeInUp"
                  data-wow-delay={"0.2s"}
                  key={index}
                >
                  <div className="blog-card-thumb style1">
                    <Image
                      src={urlFor(card.thumb).url()}
                      width={322}
                      height={216}
                      alt="thumb"
                    />
                  </div>
                  <div className="blog-card-body">
                    <div className="tag-cloud">
                      <div className="meta">
                        <span className="icon">
                          <Image
                            src={"/assets/img/icon/userIcon.png"}
                            width={20}
                            height={20}
                            alt="icon"
                          />
                        </span>
                        <span className="text">By Admin</span>
                      </div>
                      <div className="meta">
                        <span className="icon">
                          <Image
                            src={"/assets/img/icon/tagIcon.png"}
                            width={20}
                            height={20}
                            alt="icon"
                          />
                        </span>
                        <span
                          className="text"
                          style={{
                            textTransform: "uppercase",
                          }}
                        >
                          {card.category?.serviceName || "Unknown Category"}
                        </span>
                      </div>
                    </div>
                    <h3 className="blog-title style1">
                      <Link
                        scroll={false}
                        href={`/blogs/blog-details/${card.slug.current}`}
                      >
                        {card.title}
                      </Link>
                    </h3>
                    <div className="btn-wrapper">
                      <Link
                        scroll={false}
                        href={`/blogs/blog-details/${card.slug.current}`}
                      >
                        Read More
                        <Image
                          alt="icon"
                          width="16"
                          height="16"
                          src="/assets/img/icon/arrowIconDark.png"
                        />
                      </Link>
                    </div>
                    <div className="calendar">
                      <div className="date">{date}</div>
                      <div className="month">{month}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
