"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import NoData from "../noData";
import { client } from "@/sanity/lib/client";

const Blogs1 = () => {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`
        *[_type == 'blogs']{
          title,
          slug { current },
          thumb { asset },
          _createdAt,
          "category": category->{
            serviceName
          }
        }
      `);
      setBlogsData(data);
    };

    fetchData();
  }, []);

  if (blogsData.length === 0) {
    return <NoData />;
  }

  return (
    <>
      <section className="blog-area space-top pb-425 fix">
        <div className="container">
          <div className="blog-card-wrap style1 mb-30">
            {blogsData.map((card, index) => {
              // Create a Date object from the _createdAt field
              const dateObj = new Date(card._createdAt);

              // Extract day, date, month, and year
              const date = dateObj.getDate();
              const month = dateObj.toLocaleString("en-US", { month: "long" });
              return (
                <div
                  key={index}
                  className="blog-card style1 img-shine wow fadeInUp"
                  data-wow-delay={"0.2s"}
                >
                  <div className="blog-card-thumb style1">
                    <Image
                      src={urlFor(card.thumb.asset._ref).url()}
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
                          src="/assets/img/icon/arrowIconDark.png"
                          width="16"
                          height="16"
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
      </section>
    </>
  );
};

export default Blogs1;
