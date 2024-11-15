import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import Cta from "@/components/common/Cta";
import About from "@/components/homes/home-1/About";
import Offering from "@/components/homes/home-1/Offering";
import VideoBox from "@/components/homes/home-1/VideoBox";
import Team from "@/components/homes/home-1/Team";
import AboutCta from "@/components/otherPages/AboutCta";
import Testimonials from "@/components/homes/home-2/Testimonials";
import Link from "next/link";
export const metadata = {
  title: "About || Fiducia Net",
  description: "Fiducia Net || Your technology companion",
};
export default function Page() {
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
                  About Us
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
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <About
          para={`Fiducia Net was founded with a vision to empower businesses through innovative digital solutions. Our journey began with a small team of passionate developers and tech enthusiasts who believed that quality and trust could transform the digital landscape. Over the years, we have grown into a full-service company, dedicated to delivering excellence in blockchain solutions, web and app development, AI services, and digital marketing. Our story is driven by the desire to create meaningful and lasting impact for our clients, helping them achieve their goals through the power of technology.

At Fiducia Net, we pride ourselves on our commitment to quality work. Our team is made up of some of the best minds in the industry, each dedicated to pushing the boundaries of what’s possible. We believe in delivering solutions that are not just functional, but exceptional, setting the standard for quality and innovation in every project we undertake.

To date, we have successfully completed over 100 projects, each one a testament to our relentless pursuit of excellence. Our clients trust us to deliver not only because of our technical expertise but because we care deeply about their success. It’s this client-first approach, combined with our unwavering commitment to quality, that sets us apart from the competition.

With Fiducia Net, you get more than just a service provider—you get a partner who is invested in your success, equipped with a team that’s second to none in delivering cutting-edge, high-quality digital solutions.`}
        />
        <Offering />
        <VideoBox />
        <Team />
        <AboutCta />
        <Testimonials />
        <div className="pb-300"></div>

        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
