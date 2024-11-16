"use client";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";
import { useState, useEffect } from "react";
import Cta from "@/components/common/Cta";
import ProjectDetails from "@/components/otherPages/project/ProjectDetails";
import Link from "next/link";
import NotFound from "@/components/otherPages/NotFound";
import { client } from "@/sanity/lib/client";

const fetchData = async () => {
  const data = client.fetch(`*[_type=='projects']{
    
     "services": service->{
        serviceName
      },
    ...
  }`);
  return data;
};

export default function Page({ params }) {
  const [projectItem, setProjectItem] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const allProjects = await fetchData();
      const project = allProjects.filter(
        (elm) => elm.slug.current == params.id
      )[0];
      setProjectItem(project);
    };
    fetchProject();
  }, [params.id]);

  return (
    <>
      <HeaderTop />
      <Header1 />
      <main className="main position-relative" id="mains">
        <div className="breadcrumb-wrapper">
          <div
            className="breadcumb"
            data-bg-src=""
            style={{ backgroundImage: "url(/assets/img/hero/breadcumbBg.png)" }}
          >
            <div className="container">
              <div className="page-heading">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  {projectItem ? projectItem.projectName : "Project Not Found."}
                </h1>
                <ul
                  className="breadcrumb-items wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <li>
                    <Link scroll={false} href={`/`}>
                      {" "}
                      Home{" "}
                    </Link>
                  </li>
                  <li>
                    <i className="fas fa-chevrons-right" />
                  </li>
                  <li>Project Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {projectItem ? (
          <ProjectDetails projectItem={projectItem} />
        ) : (
          <NotFound title={"Project"} href={"projects"} />
        )}
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
