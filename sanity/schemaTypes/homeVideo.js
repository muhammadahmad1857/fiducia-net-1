export default {
  name: "video",
  title: "video ",
  type: "document",
  fields: [
    {
      title: "Video file",
      name: "video",
      type: "mux.video",
    },
    {
      title: "thumbnail",
      name: "thumb",
      type: "image",
      description: "Thumbnail of the video",
    },
  ],
};
