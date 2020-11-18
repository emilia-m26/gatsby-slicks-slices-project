const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/emiliamena/Documents/coding/gatsby-slicks-slices-project/gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/emiliamena/Documents/coding/gatsby-slicks-slices-project/gatsby/src/pages/index.js")))
}

