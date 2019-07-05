var proxy = require("http-proxy-middleware")

module.exports = {
  siteMetadata: {
    title: "Reason Conf US 2019",
    description: "A hands-on ReasonML conference for web developers & OCaml enthusiasts",
    keywords: "ReasonML, OCaml, Javascript",
    siteUrl: "https://www.reason-conf.us",
    author: "ReasonConf",
    twitter: "reasonconf",
    city: "Chicago, IL",
    date: "October 7-8, 2019",
    ticketLink: "https://ti.to/chicagojs/reasonconf-us-2019",
    cfpLink: "https://www.papercall.io/reason-conf-us-2019",
    sponsorLink: "mailto:mike@chicagojs.org",
    sponsorPdf:
      "https://drive.google.com/file/d/1U8YVMnv-BeWlOOFs66lRsZKTQVlRfZb4/view?usp=sharing",
    venue: {
      name: "Venue SIX10",
      address: "610 S. Michigan Ave",
      city: "Chicago, IL",
      zip: "60605",
      directionsLink: "https://goo.gl/maps/QWbD6C7FErE3uLaZ6",
      imageUrl:
        "https://res.cloudinary.com/chicagojs/image/upload/c_fill,f_auto,g_center,h_350,w_730/v1561602141/2019-reason-conf-us/website/venue610.jpg"
    },
    workshop: {
      title: "Workshops",
      date: "October 7th",
      description:
        "We're looking for exciting workshops topics ranging from beginner to advanced levels. Have something you'd love to teach someone? Apply to give one!",
      imageUrl:
        "https://res.cloudinary.com/chicagojs/image/upload/c_fill,f_auto,g_center,h_350,w_730/v1561601314/2019-reason-conf-us/website/annie-spratt-QckxruozjRg-unsplash.jpg"
    },
    schedule: {
      title: "Schedule",
      date: "October 8th",
      description:
        "Our line-up hasn't been announced yet but expect a full day of talks by ReasonML core contributors and enthusiasts alike including a special keynote by our very own Jordan Walke.",
      imageUrl:
        "https://res.cloudinary.com/chicagojs/image/upload/c_fill,f_auto,g_center,h_350,w_730/v1561601072/2019-reason-conf-us/website/pedro-lastra-Nyvq2juw4_o-unsplash.jpg"
    },
    speakers: {
      title: "Speakers",
      date: "October 8th",
      description:
        "Our line-up hasn't been announced yet but expect a full day of talks by ReasonML core contributors and enthusiasts alike including a special keynote by our very own Jordan Walke.",
      imageUrl:
        "https://res.cloudinary.com/chicagojs/image/upload/c_fill,h_350,w_730/v1561601074/2019-reason-conf-us/website/lance-anderson-uevmkfCH98Q-unsplash.jpg"
    },
    sponsors: {
      title: "Sponsors",
      date: "October 7th & 8th",
      description:
        "Our sponsors will be announced soon. Thank you to our incredible sponsors for making Reason Conf happen. If you're interested in sponsoring, please contact us below.",
      imageUrl:
        "https://res.cloudinary.com/chicagojs/image/upload/c_fill,f_auto,g_center,h_350,w_730/v1561601074/2019-reason-conf-us/website/yuvraj-singh-4V07cUP8Sxc-unsplash.jpg"
    },
    visit: {
      title: "Downtown Chicago"
    }
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`,
        name: "data"
      }
    },
    "gatsby-transformer-json",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static"
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Reason Conf 2019",
        short_name: "ReasonConf",
        start_url: "/",
        background_color: "#000",
        theme_color: "#DD4B39",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/img/logo.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`
      }
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.sass"] // applies purging only on the bulma css file
      }
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": ""
        }
      })
    )
  }
}
