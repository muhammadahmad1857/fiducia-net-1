export default {
  name: "faqs",
  type: "document",
  title: "Frequently asked questions",
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
    },
    {
      name: "answer",
      title: "Answer",
      type: "text",
      description: "Detailed answer to the question.",
    },
    {
      name: "service", // Reference field for associating the project with a service
      title: "Service",
      type: "reference",
      to: [{ type: "services" }], // references the services document
    },
  ],
};
