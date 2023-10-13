var plugins = [{
      plugin: require('/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/tf-transfer01/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/tf-transfer01/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"pure":false},
    },{
      plugin: require('/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/tf-transfer01/node_modules/gatsby-source-prismic/gatsby-ssr'),
      options: {"plugins":[],"repositoryName":"tf-transfer01","accessToken":"MC5aT2kxZEJFQUFDUUF1S1Qx.77-9WO-_vUkl77-9EXcd77-9K0pE77-977-9e--_vULvv71777-977-9Su-_vS7vv73vv73vv73vv70KRiU","schemas":{"about":{"Main":{"about_text":{"type":"StructuredText","config":{"multi":"paragraph","label":"about text"}}}}},"imageImgixParams":{"auto":"format"}},
    },{
      plugin: require('/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/tf-transfer01/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[],"component":"/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/tf-transfer01/src/components/global/layout.js"},
    },{
      plugin: require('/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/tf-transfer01/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
