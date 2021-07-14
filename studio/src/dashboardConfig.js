export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60ef3893adbc6200a5239890",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-5bg4hwmi",
                  apiId: "4e318cfb-d622-4893-b89d-8312650eddce",
                },
                {
                  buildHookId: "60ef3893a45a8b009a5d8fd5",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-turnuw3m",
                  apiId: "56c86dda-c705-4245-a101-c8c2c820eac5",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/mrhecsanchez/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-turnuw3m.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
