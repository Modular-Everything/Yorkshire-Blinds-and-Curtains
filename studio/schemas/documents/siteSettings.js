export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  __experimental_actions: [
    // 'create',
    "update",
    // 'delete',
    "publish",
  ],
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "short_description",
      type: "text",
      title: "Short Description",
      description:
        "Describe your Yorkshire Curtains & Blinds for search engines and social media. This also appears in the footer.",
    },
    {
      name: "contact_info",
      type: "object",
      title: "Contact Information",
      fields: [
        {
          name: "address",
          type: "text",
          title: "Address",
        },
        {
          name: "tel",
          type: "string",
          title: "Office Telephone",
        },
        {
          name: "email",
          type: "email",
          title: "Email Address",
        },
      ],
    },
  ],
};
