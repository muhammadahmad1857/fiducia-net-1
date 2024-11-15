import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";
import Cta from "@/components/common/Cta";
import ServiceDetails from "@/components/otherPages/service/ServiceDetails";
import Link from "next/link";
import { fetchData } from "@/data/sanityData";
import NotFound from "@/components/otherPages/NotFound";
import { client } from "@/sanity/lib/client";
export const metadata = {
  title: "Service Details || Fiducia Net",
  description: "Fiducia Net || Your technology companion",
};

const fetchFaqData = async () => {
  const data = await client.fetch(`*[_type=='faqs']{
    "service": service->{
       serviceName
     },
   question,
   answer
 }`);
  return data;
};

export default async function Page({ params }) {
  const allService = await fetchData("services");
  const serviceItem = allService.filter(
    (elm) => elm.slug.current == params.slug
  )[0];
  const faqData = await fetchFaqData();
  const faqs = faqData.filter(
    (f) => f.service.serviceName === serviceItem.serviceName
  );
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
                  {serviceItem ? serviceItem.serviceName : "Service Not Found"}
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
                  <li>Service Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {serviceItem ? (
          <ServiceDetails
            serviceItem={serviceItem}
            serviceCategory={allService}
            faqData={faqs}
          />
        ) : (
          <NotFound title="Service" href={"services"} />
        )}
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
