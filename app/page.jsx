import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";
import About from "@/components/homes/home-1/About";
import Blog from "@/components/homes/home-1/Blog";
import Cta from "@/components/common/Cta";
import Facts from "@/components/homes/home-1/Facts";
import Hero from "@/components/homes/home-1/Hero";
import Offering from "@/components/homes/home-1/Offering";
import Pricing from "@/components/homes/home-1/Pricing";
import Process from "@/components/homes/home-1/Process";
import Projects from "@/components/homes/home-1/Projects";
import Services from "@/components/homes/home-1/Services";
import Services2 from "@/components/homes/home-1/Services2";
import Team from "@/components/homes/home-1/Team";
import Testimonials from "@/components/homes/home-1/Testimonials";
import VideoBox from "@/components/homes/home-1/VideoBox";
export const metadata = {
  title: "Home || Fiducia Net",
  description: "Fiducia Net || Your technology companion",
};
export default function Home() {
  return (
    <>
      <HeaderTop />
      <Header1 />
      <main className="main position-relative" id="mains">
        <Hero />
        <Services />
        <Offering />
        <VideoBox />
        <About />
        <Services2 />
       
        <Team />
        <Projects />
        <Process />
        <Facts />
        <Pricing />
        <Testimonials />
        <Blog />
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
