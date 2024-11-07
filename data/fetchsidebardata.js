import { client } from "@/sanity/lib/client"; // Ensure you have a configured Sanity client

// Fetch categories with post counts and recent posts
export const fetchSidebarData = async () => {
  const query = `
    {
  
      "categories": *[_type == "category"] {
        serviceName,
        "count": count(*[_type == "blog" && references(^._id)])
      },
      "recentPosts": *[_type == "blog"] | order(_createdAt desc)[0...5] {
        title,
        slug,
        _createdAt,
        "imgSrc": thumb.asset->url
      }
    }
  `;
  const data = await client.fetch(query);
  return data;
};
