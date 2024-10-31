import React from "react";
import Image from "next/image";
import { progressData2 } from "@/data/skills";
import Progress from "@/components/common/Progress";
import { urlFor } from "@/sanity/lib/image";

export default function TeamDetails({ teamMember }) {
  return (
    <section className="team-details-area fix space-top">
      <div className="container">
        <div className="team-details-wrap">
          <div className="row g-4 align-items-center">
            <div className="col-lg-4">
              <div
                className="team-details-thumb wow fadeInUp"
                data-wow-delay=".6s"
              >
                <Image
                  alt="team-img"
                  src={urlFor(teamMember.image.asset._ref).url()}
                  width="391"
                  height="474"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="team-details-content">
                <div
                  className="details-info d-flex justify-content-between wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="profile">
                    <h3>{teamMember.name}</h3>
                    <span>{teamMember.position}</span>
                  </div>
                  <div className="gt-social">
                    <a href={teamMember.facebook}>
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a href={teamMember.twitter} className="active">
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a href={teamMember.linkedin}>
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <p className="mt-3 wow fadeInUp" data-wow-delay=".9s">
                  {teamMember.personalInformation}
                </p>

                <div className="signature wow fadeInUp" data-wow-delay=".6s">
                  <Image
                    alt="signature"
                    src={urlFor(teamMember.signature.asset.image._ref)}
                    width="91"
                    height="50"
                  />
                </div>
                <div
                  className="info-wrapper d-flex wow fadeInUp"
                  data-wow-delay="1.2s"
                >
                  <div className="checklist">
                    <ul>
                      <li>
                        <i className="fa-solid fa-phone-volume" />
                      </li>
                      <li>{teamMember.phone}</li>
                    </ul>
                  </div>
                  <div className="checklist">
                    <ul>
                      <li>
                        <i className="fa-solid fa-paper-plane" />
                      </li>
                      <li>{teamMember.email}</li>
                    </ul>
                  </div>
                  <div className="checklist">
                    <ul>
                      <li>
                        <i className="fa-solid fa-globe" />{" "}
                      </li>
                      <li>{teamMember.website}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-simple-history pb-425">
        <div className="container">
          <div className="row">
            <h4 className="title wow fadeInUp" data-wow-delay="1.6s">
              Personal Information
            </h4>
            <p className="wow fadeInUp" data-wow-delay="1.9s">
              {teamMember.experience}
            </p>
            <div className="skills">
              <h4 className="title">Personal skills</h4>
              <div className="row">
                <div className="col-lg-6">
                  {teamMember.skills.map((elm, i) => (
                    <div key={i} className="progress-wrap">
                      <div className="progress-meta">
                        <div className="title">{elm.title}</div>
                        <div className="percentage">{elm.percentage}</div>
                      </div>
                      <div className="progress-container">
                        <Progress percentage={elm.percentage} />
                      </div>
                    </div>
                  ))}
                </div>
                {/* <div className="col-lg-6">
                  {progressData2.slice(2, 4).map((elm, i) => (
                    <div key={i} className="progress-wrap">
                      <div className="progress-meta">
                        <div className="title">{elm.title}</div>
                        <div className="percentage">{elm.percentage}</div>
                      </div>
                      <div className="progress-container">
                        <Progress percentage={elm.percentage} />
                      </div>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
