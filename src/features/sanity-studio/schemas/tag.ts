import { Rule } from "sanity";

const tag = {
  name: "tag",
  title: "Tags",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "color",
      title: "Color",
      type: "string",
      validation: (rule: Rule) =>
        rule
          .regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
          .error("Please enter a valid hex color code")
          .required()
          .error("Please provide a color"),
    },
  ],
};

export default tag;
