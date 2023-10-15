
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/tf-transfer01/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/tf-transfer01/src/pages/index.js")),
  "component---src-pages-preview-js": preferDefault(require("/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/tf-transfer01/src/pages/preview.js"))
}

