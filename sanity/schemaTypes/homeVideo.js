import { type } from "os";

export default {
  name: "video",
  title: "Home video ",
  type:"document",
  fields:[
    {
        title: 'Video file',
        name: 'video',
        type: 'mux.video',
      },
    ]
};
