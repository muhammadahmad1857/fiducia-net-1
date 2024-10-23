// import { serviceItems } from "@/data/services";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchData } from "@/data/sanityData";
import { urlFor } from "@/sanity/lib/image";

export default async function Services() {
  const serviceItems = await fetchData("services");
  return (
    <section className="all-services-area space-top">
      <div className="container">
        <div className="row">
          {serviceItems.map((item, index) => (
            <div
              key={index}
              className={`col-12 col-md-6 col-xl-3 ${
                index === 5 || index === 7 ? "wow fadeInUp" : ""
              }`}
              data-wow-delay={item.delay}
            >
              <div
                className={`service-card style3 ${index === 7 ? "mb-0" : ""}`}
                style={{
                  maxHeight: "fit-content",
                }}
              >
                <div className="card_icon">
                  <Image
                    src={urlFor(item.icon.asset._ref).url()}
                    width={40}
                    height={40}
                    alt="icon"
                  />
                </div>
                <div className="card_content">
                  <h3>
                    <Link
                      scroll={false}
                      href={`/services/service-details/${item.slug.current}`}
                      className="title"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text">
                    {item.description.slice(0, 50)}
                    {item.description.length > 50 && "..."}
                  </p>
                </div>
                <div className="link-wrap">
                  <Link
                    scroll={false}
                    href={`/services/service-details/${item.slug.current}`}
                  >
                    More Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
