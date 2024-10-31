import { projectItems } from "@/data/projects";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { fetchData } from "@/data/sanityData";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";

const fetchData = async () => {
  const data = client.fetch(`*[_type=='projects']{
    
    slug { current },
    projectName,
     "service": service->{
        serviceName
      },
    image {asset}
  }`);
  return data;
};
export default async function Projects() {
  const projectItems = await fetchData();
  console.log(projectItems);
  if (projectItems.length === 0) {
    return <NoData />;
  }
  return (
    <section className="all-project-area mx-auto space-top pb-425">
      <div className="container">
        <div className="row">
          {projectItems.map((item, index) => (
            <div key={index} className="col-xl-4 col-md-6 col-12 mb-30">
              <div
                className="project-card style1 img-shine wow fadeInUp"
                data-wow-delay={"0.2s"}
              >
                <div className="project-img">
                  <Image
                    src={urlFor(item.image.asset._ref).url()}
                    width={450}
                    height={450}
                    alt="project image"
                  />
                </div>
                <div className="fancy-box style2">
                  <p>{item.service.serviceName}</p>
                  <h4>
                    <Link
                      scroll={false}
                      href={`/projects/project-details/${item.slug.current}`}
                    >
                      {item.projectName}
                    </Link>
                  </h4>
                  <Link
                    scroll={false}
                    href={`/projects/project-details/${item.slug.current}`}
                    className="arrow-icon"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
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
