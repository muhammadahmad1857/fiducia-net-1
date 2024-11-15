export default {
  name: "services",
  type: "document",
  title: "Services",
  fields: [
    {
      name: "serviceName",
      type: "string",
      title: "ServiceName",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      title: "Body Of the service",
      name: "body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
        },
      ],
    },
    {
      name: "icon",
      type: "image",
      title: "Icon",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "serviceName",
        maxLength: 96,
      },
    },
    {
      name: "color",
      type: "color",
      title: "Color",
    },
    {
      name: "thumb",
      type: "image",
      title: "Thumbnail",
    },
  ],
};
