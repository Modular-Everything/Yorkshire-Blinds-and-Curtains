import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// Document Types
import siteSettings from "./documents/siteSettings";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([siteSettings]),
});

// // First, we must import the schema creator
// import createSchema from "part:@sanity/base/schema-creator";

// // Then import schema types from any plugins that might expose them
// import schemaTypes from "all:part:@sanity/base/schema-type";

// // Finally import custom schema
// import siteInfo from "./blocks/siteInfo";

// // Then we give our schema to the builder and provide the result to Sanity
// export default createSchema({
//   // We name our schema
//   name: "siteInfo",
//   // Then proceed to concatenate our document type
//   // to the ones provided by any plugins that are installed
//   types: schemaTypes.concat([siteInfo]),
// });

/*
  ====================
  PROJECT SCHEMA NOTES
  ====================

  Site Info
    - Name
    - Description
    - Contact Info
      - Address
      - Office Telephone
      - Email

*/
