import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const fetchServices = async () => {
  const data = await client.fetch(
    `*[_type == "services"]  {
  slug { current },
  serviceName,
  description,
  icon { asset },
}`,
    {},
    { cache: "no-store" }
  );
  // console.log("original", data);
  return data;
};

export default async function Services() {
  const services = await fetchServices();
  return (
    <section className="service-area mb-15" id="service-area">
      <div className="service-wrap style1">
        <div className="container">
          <div className="service-card-wrapper style1">
            {services.map((service, index) => (
              <div
                className="service-card style1 wow fadeInUp"
                data-wow-delay={service.delay}
                key={index}
              >
                <div className="card_icon">
                  <Image
                    src={urlFor(service.icon.asset._ref).url()}
                    width={40}
                    height={40}
                    alt="icon"
                  />
                </div>
                <div className="card_content">
                  <h3>
                    <Link
                      scroll={false}
                      href={`/service-details/${service.slug.currwnt}`}
                      className="title"
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text">{service.description}</p>
                </div>
                <div className="link-btn">
                  <Link
                    scroll={false}
                    href={`/service-details/${service.slug.current}`}
                  >
                    <i className="fa-sharp fa-regular fa-arrow-right-long" />
                  </Link>
                </div>
                <div className="bg">
                  <Image
                    src={"/assets/img/bg/serviceCardThumbBg1_1.png"}
                    width={280}
                    height={284}
                    alt="bg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
