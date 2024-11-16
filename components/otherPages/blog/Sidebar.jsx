// "use client";
// import { newsCategories, recentItems, tags } from "@/data/blogs";
// import Link from "next/link";
// import Image from "next/image";
// import React from "react";

// export default function Sidebar() {
//   return (
//     <div className="col-12 col-lg-4">
//       <div className="main-sidebar">
//         <div
//           className="single-sidebar-widget wow fadeInUp"
//           data-wow-delay=".2s"
//         >
//           <div className="wid-title">
//             <h3>Search</h3>
//           </div>
//           <div className="search-widget">
//             <form onSubmit={(e) => e.preventDefault()}>
//               <input type="text" placeholder="Search here" />
//               <button type="submit">
//                 <i className="fa-sharp fa-light fa-magnifying-glass" />
//               </button>
//             </form>
//           </div>
//         </div>
//         <div
//           className="single-sidebar-widget wow fadeInUp"
//           data-wow-delay=".4s"
//         >
//           <div className="wid-title">
//             <h3>Categories</h3>
//           </div>
//           <div className="news-widget-categories">
//             <ul>
//               {newsCategories.map((category, index) => (
//                 <li key={index} className={category.isActive ? "active" : ""}>
//                   <Link scroll={false} href={`/blog-details/1`}>
//                     {category.name} <span>({category.count})</span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div
//           className="single-sidebar-widget wow fadeInUp"
//           data-wow-delay=".6s"
//         >
//           <div className="wid-title">
//             <h3>Recent Post</h3>
//           </div>
//           <div className="recent-post-area">
//             {recentItems.map((item, index) => (
//               <div className="recent-items" key={index}>
//                 <div className="recent-thumb">
//                   <Image src={item.imgSrc} width={78} height={79} alt="img" />
//                 </div>
//                 <div className="recent-content">
//                   <ul>
//                     <li>
//                       <Image
//                         alt="icon"
//                         src="/assets/img/icon/calendarIcon.png"
//                         width="20"
//                         height="20"
//                       />
//                       {item.date}
//                     </li>
//                   </ul>
//                   <h6>
//                     <Link scroll={false} href={`/blog-details/1`}>
//                       {item.title.split("\n").map((line, i) => (
//                         <React.Fragment key={i}>
//                           {line}
//                           <br />
//                         </React.Fragment>
//                       ))}
//                     </Link>
//                   </h6>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client"; // Make sure your Sanity client is correctly set up
import React from "react";
export default function Sidebar({ currentBlogCategory }) {
  const [categories, setCategories] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Fetch categories and recent posts from Sanity
  const fetchCategoriesAndPosts = async () => {
    const categoriesQuery = `*[_type == "services"] {
      _id,
      serviceName,
      slug {current},
      "postCount": count(*[_type == "blogs" && references(^._id)])
    }`;

    const recentPostsQuery = `*[_type == "blogs"] | order(_createdAt desc)[0..5]{
      title,
      thumb {
        asset->{
          url
        }
      },
      slug {
        current
      },
      _createdAt
    }`;

    const [categoriesData, recentPostsData] = await Promise.all([
      client.fetch(categoriesQuery),
      client.fetch(recentPostsQuery),
    ]);

    setCategories(categoriesData);
    setRecentPosts(recentPostsData);
    setFilteredPosts(recentPostsData); // Initialize filtered posts with recent posts
  };

  useEffect(() => {
    fetchCategoriesAndPosts();
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter recent posts based on the search term
    const filtered = recentPosts.filter((post) =>
      post.title.toLowerCase().includes(term)
    );
    setFilteredPosts(filtered);
  };

  console.log(categories);

  return (
    <div className="col-12 col-lg-4">
      <div className="main-sidebar">
        {/* Search Widget */}
        <div
          className="single-sidebar-widget wow fadeInUp"
          data-wow-delay=".2s"
        >
          <div className="wid-title">
            <h3>Search</h3>
          </div>
          <div className="search-widget">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Search here"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button type="submit">
                <i className="fa-sharp fa-light fa-magnifying-glass" />
              </button>
            </form>
          </div>
        </div>

        {/* Search Results Widget */}
        {searchTerm && (
          <div
            className="single-sidebar-widget wow fadeInUp"
            data-wow-delay=".8s"
          >
            <div className="wid-title">
              <h3>Search Results</h3>
            </div>
            <div className="recent-post-area">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((item, index) => (
                  <div className="recent-items" key={index}>
                    <div className="recent-thumb">
                      <Image
                        src={item.thumb.asset.url}
                        width={78}
                        height={79}
                        alt="img"
                      />
                    </div>
                    <div className="recent-content">
                      <ul>
                        <li>
                          <Image
                            alt="icon"
                            src="/assets/img/icon/calendarIcon.png"
                            width="20"
                            height="20"
                          />
                          {new Date(item._createdAt).toLocaleDateString()}
                        </li>
                      </ul>
                      <h6>
                        <Link
                          scroll={false}
                          href={`/blogs/blog-details/${item.slug.current}`}
                        >
                          {item.title.split("\n").map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </Link>
                      </h6>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ fontSize: "20px" }}>
                  No results found for &apos;{searchTerm}&apos;.
                </div>
              )}
            </div>
          </div>
        )}
        {/* Categories Widget */}
        <div
          className="single-sidebar-widget wow fadeInUp"
          data-wow-delay=".4s"
        >
          <div className="wid-title">
            <h3>Categories</h3>
          </div>
          <div className="news-widget-categories">
            <ul>
              {categories.length > 0 ? (
                categories.map((category) => (
                  <li
                    key={category._id}
                    className={
                      category.serviceName === currentBlogCategory
                        ? "active"
                        : ""
                    }
                  >
                    <Link
                      scroll={false}
                      href={`/blogs/${category.slug.current}`}
                      style={{ textTransform: "capitalize" }}
                    >
                      {category.serviceName} <span>({category.postCount})</span>
                    </Link>
                  </li>
                ))
              ) : (
                <li
                  className={"active"}
                  style={{ padding: "20px", color: "white" }}
                >
                  No categories available
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Recent Posts Widget */}
        <div
          className="single-sidebar-widget wow fadeInUp"
          data-wow-delay=".6s"
        >
          <div className="wid-title">
            <h3>Recent Posts</h3>
          </div>
          <div className="recent-post-area">
            {recentPosts.map((item, index) => (
              <div className="recent-items" key={index}>
                <div className="recent-thumb">
                  <Image
                    src={item.thumb.asset.url}
                    width={78}
                    height={79}
                    alt="img"
                  />
                </div>
                <div className="recent-content">
                  <ul>
                    <li>
                      <Image
                        alt="icon"
                        src="/assets/img/icon/calendarIcon.png"
                        width="20"
                        height="20"
                      />
                      {new Date(item._createdAt).toLocaleDateString()}
                    </li>
                  </ul>
                  <h6>
                    <Link
                      scroll={false}
                      href={`/blogs/blog-details/${item.slug.current}`}
                    >
                      {item.title.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </Link>
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
