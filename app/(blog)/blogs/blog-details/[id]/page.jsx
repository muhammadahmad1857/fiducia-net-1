import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";

import Cta from "@/components/common/Cta";
import BlogDetails from "@/components/otherPages/blog/BlogDetails";
import Link from "next/link";
import NotFound from "@/components/otherPages/NotFound";
import { client } from "@/sanity/lib/client";
export const metadata = {
  title: "Blog Details || Fiducia net",
  description: "Fiducia Net || Your technology companion",
};

const fetchData = async () => {
  const data = await client.fetch(`
    *[_type == 'blogs']{
      title,
      body,
      slug { current },
      thumb { asset },
      _createdAt,
      "category": category->{
        serviceName
      }
    }
  `);
  return data;
};
export default async function Page({ params }) {
  const allBlogs = await fetchData();
  const blogItem = allBlogs.filter((elm) => elm.slug.current == params.slug)[0];

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
                  {blogItem ? blogItem.title : `Blog not found.`}
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
                  <li> Blog Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {blogItem ? (
          <BlogDetails blogItem={blogItem} />
        ) : (
          <NotFound href={"blogs"} title={"blog"} />
        )}
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}