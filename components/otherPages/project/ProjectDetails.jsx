import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export default function ProjectDetails({ projectItem }) {
  console.log(projectItem)

  return (
    <section className="Project-details-section fix space-top pb-425">
      <div className="container">
        <div className="project-details-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-details-items">
                <div
                  className="details-image wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <Image
                    alt="img"
                    src={urlFor(projectItem.image.asset._ref).url()}
                    width="1170"
                    height="550"
                  />
                </div>
                <div className="row g-4 justify-content-between">
                  <div className="col-lg-7">
                    <div className="details-content pt-5">
                      <h3 className="wow fadeInUp" data-wow-delay=".6s">
                        {projectItem.projectName}
                      </h3>
                      <p className="wow fadeInUp" data-wow-delay=".9s">
                        {projectItem.description}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div
                      className="project-catagory wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <h3>Project Info:</h3>
                      <ul>
                        <li>
                          Category:
                          <span>{projectItem.service.serviceName}</span>
                        </li>

                        <li>
                          Share:
                          <span>
                            <i className="fa-brands fa-facebook-f me-3" />
                            <i className="fa-brands fa-instagram me-3" />
                            <i className="fa-brands fa-linkedin-in" />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="details-content pt-3 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  <h3>Our Challenge</h3>
                  <p>
                    Pellentesque egestas rutrum nibh facilisis ultrices.
                    Phasellus in magna ut orci malesuada sollicitudin. Aenean
                    faucibus scelerisque convallis. Quisque interdum mauris id
                    nunc molestie, ac tincidunt erat gravida. Nullam dui libero,
                    mollis ac quam et, venenatis tincidunt quam. Proin nec
                    volutpat ligula, id porttitor augue. Proin id volutpat
                    massa. Vivamus tincidunt nunc justo, ac aliquam ex molestie
                    id.
                  </p>
                </div>
                <div className="row g-4 pt-5">
                  <div className="col-lg-3 col-md-6">
                    <ul className="list wow fadeInUp" data-wow-delay="1.2s">
                      <li>
                        <i className="fa-regular fa-circle-check" />
                        Branding and design Identity
                      </li>
                      <li>
                        <i className="fa-regular fa-circle-check" />
                        Web site Marketing Solutions
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <ul className="list wow fadeInUp" data-wow-delay="1.4s">
                      <li>
                        <i className="fa-regular fa-circle-check" />
                        Branding and design Identity
                      </li>
                      <li>
                        <i className="fa-regular fa-circle-check" />
                        Web site Marketing Solutions
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <ul className="list wow fadeInUp" data-wow-delay="1.6s">
                      <li>
                        <i className="fa-regular fa-circle-check" />
                        Branding and design Identity
                      </li>
                      <li>
                        <i className="fa-regular fa-circle-check" />
                        Web site Marketing Solutions
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="details-content pt-5 wow fadeInUp"
                  data-wow-delay="1.9s"
                >
                  <h3>The Result of Project</h3>
                  <p>
                    <b>Check out the live site here:{" "}
                    <Link href={projectItem.liveLink}>
                      {projectItem.projectName}
                    </Link></b> 
                  </p>
                </div>
                <div className="row g-4 pt-5">
                  <div className="col-lg-6 col-md-6">
                    <div className="thumb wow fadeInUp" data-wow-delay="2s">
                      <Image
                        alt="img"
                        src="/assets/img/project/projectThumb3_2.png"
                        width="570"
                        height="360"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="thumb wow fadeInUp" data-wow-delay="2.4s">
                      <Image
                        alt="img"
                        src="/assets/img/project/projectThumb3_3.png"
                        width="570"
                        height="360"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
