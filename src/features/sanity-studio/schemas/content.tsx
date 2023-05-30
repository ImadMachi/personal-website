import { HighlightIcon, HighlightRenderer } from "../components/Highlight";
import { SubscriptIcon, SubscriptRenderer } from "../components/Subscript";
import { SuperscriptIcon, SuperscriptRenderer } from "../components/Superscript";

const content = {
  name: "content",
  type: "array",
  title: "Content",
  of: [
    {
      type: "block",
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
          { title: "Highlight", value: "highlight", icon: HighlightIcon, component: HighlightRenderer },
          { title: "Subscript", value: "sub", icon: SubscriptIcon, component: SubscriptRenderer },
          { title: "Superscript", value: "sup", icon: SuperscriptIcon, component: SuperscriptRenderer },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "External link",
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
              },
              {
                title: "Open in new tab",
                name: "blank",
                type: "boolean",
                initialValue: true,
              },
            ],
          },
          {
            name: "internalLink",
            type: "object",
            title: "Internal link",
            fields: [
              {
                name: "reference",
                type: "reference",
                title: "Reference",
                to: [{ type: "post" }],
              },
            ],
          },
        ],
      },
    },
    {
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
        {
          name: "height",
          type: "number",
          title: "Height",
          intialValue: 700,
        },
        {
          name: "width",
          type: "number",
          title: "Width",
          initialValue: 1200,
        },
      ],
    },
    {
      name: "codeBlock",
      type: "object",
      title: "Code Block",
      fields: [
        {
          name: "code",
          type: "code",
          title: "Code",
          options: {
            languageAlternatives: [
              { title: "Typescript", value: "typescript" },
              { title: "Javascript", value: "javascript" },
              { title: "HTML", value: "html" },
              { title: "CSS", value: "css" },
            ],
          },
        },
        {
          name: "highlightedLines",
          title: "Highlighted lines",
          type: "string",
        },
      ],
    },
  ],
};

export default content;
