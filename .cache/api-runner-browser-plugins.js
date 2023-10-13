module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"custom":{"families":["Stencil","Helvetica Neue LT Pro"],"urls":["/fonts/fonts.css"]}},
    },{
      plugin: require('../node_modules/gatsby-source-prismic/gatsby-browser.js'),
      options: {"plugins":[],"repositoryName":"tf-transfer01","accessToken":"MC5aT2kxZEJFQUFDUUF1S1Qx.77-9WO-_vUkl77-9EXcd77-9K0pE77-977-9e--_vULvv71777-977-9Su-_vS7vv73vv73vv73vv70KRiU","schemas":{"about":{"Main":{"about_text":{"type":"StructuredText","config":{"multi":"paragraph","label":"about text"}}}}},"imageImgixParams":{"auto":"format"}},
    },{
      plugin: require('../node_modules/gatsby-plugin-layout/gatsby-browser.js'),
      options: {"plugins":[],"component":"/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/tf-transfer01/src/components/global/layout.js"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
