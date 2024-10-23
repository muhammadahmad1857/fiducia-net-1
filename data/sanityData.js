import { client } from "@/sanity/lib/client";

export const fetchData = async (apiEndPoint) => {
  const data = await client.fetch(
    `*[_type=="${apiEndPoint}"]`,
    {},
    { cache: "no-store" }
  );
  return data;
};
