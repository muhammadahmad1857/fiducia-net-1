export default {
  name: "blogs",
  type: "document",
  title: "Blog Posts",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "5-7 words title to explain what the blog about is.",
    },
    {
      name: "thumb",
      type: "image",
      title: "Thumbnail",
      description: "A thumbnail image to represent the blog post.",
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
        },
      ],
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "services" }], 
    },
    {
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      title: "Tags",
      description: "An array of tags to categorize the blog post.",
    },
  ],
};
