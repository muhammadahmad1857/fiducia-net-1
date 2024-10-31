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
  ],
};
