export default {
  name: "team",
  type: "document",
  title: "Team || Our team",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Team Member Name",
    },
    {
      name: "position",
      type: "string",
      title: "Position one word(like web developer)",
    },
    {
      name: "image",
      type: "image",
      title: "Team Member Image",
    },
    {
      name: "facebook",
      type: "string",
      title: "Team Member Facebook profile",
    },
    {
      name: "twitter",
      type: "string",
      title: "Team Member Twitter profile",
    },
    {
      name: "linkedin",
      type: "string",
      title: "Team Member LinkedIn profile",
    },
    {
      name: "experience",
      type: "text",
      title: "Team Member Experience",
      description: "Write a paragraph about his experience",
    },
    {
      name: "personalInformation",
      type: "text",
      title: "Team Member Personal Information",
      description: "Write a paragraph about his personal information",
    },
    {
      name: "signature",
      type: "image",
      title: "Team Member Signature Image",
      description: "Add a signature image for the team member",
    },
    {
      name: "email",
      type: "string",
      title: "Team Member Email",
      description: "Write the email address of the team member",
    },
    {
      name: "phone",
      type: "string",
      title: "Team Member Phone",
      description: "Write the phone number of the team member",
    },
    {
      name: "website",
      type: "string",
      title: "Team Member Website",
      description: "Write the website address of the team member",
    },
    {
      name: "skills",
      type: "array",
      title: "Team Member Skills",
      of: [
        {
          type: "string",
          title: "Skill Title",
          name: "title",
        },
        {
          name: "percentage",
          type: "number",
          title: "Skill Percentage",
          validation: (Rule) => Rule.min(0).max(100),
          description: "Write the percentage of skill...",
        },
      ],
      description: "Write down the skills he has",
    },
  ],
};
