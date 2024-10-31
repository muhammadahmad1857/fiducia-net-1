import { teamMembers3 } from "@/data/team";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchData } from "@/data/sanityData";
import NoData from "../noData";
import { urlFor } from "@/sanity/lib/image";

export default async function Team1() {
  const teamMembers = await fetchData("team");
  if (teamMembers.length === 0) {
    return <NoData />;
  }
  return (
    <section className="team-area space-top pb-425 fix">
      <div className="team-wrap style1 space-top mb-10">
        <div className="container">
          <div className="row team-card-wrapper style1">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-card style1 wow fadeInUp"
                data-wow-delay={"0.2s"}
              >
                <div className="team-thumb">
                  <Image
                    src={urlFor(member.image.asset._ref).url()}
                    width={275}
                    height={449}
                    alt="thumb"
                  />
                </div>
                <div className="profile-box">
                  <h3 className="title">
                    <Link scroll={false} href={`/team/${slug.current}`}>
                      {member.name}
                    </Link>
                  </h3>
                  <div className="text">{member.position}</div>
                </div>
                <div className="bg">
                  <Image
                    src={"/assets/img/bg/teamThumbBg1_1.png"}
                    width={370}
                    height={343}
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
