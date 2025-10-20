// const  { defineConfig } =  require('11ty.ts');

import { defineConfig } from "11ty.ts";

const config = defineConfig(() => {

  return {
    // htmlTemplateEngine: "liquid",
    // passthroughFileCopy: false,
    // pathPrefix: "",
    // templateFormats: ["liquid", "json", "md", "css", "html", "yaml"],
    dir: {
      input: "site",
      output: "public",
      // includes: "views/include",
      // layouts: "views/layouts",
      // data: "data",
    },
  };
});

module.exports = config;
