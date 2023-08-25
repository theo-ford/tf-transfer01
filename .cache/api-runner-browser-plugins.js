module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"custom":{"families":["Stencil","Helvetica Neue LT Pro"],"urls":["/fonts/fonts.css"]}},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Website Name","short_name":"Website Name","start_url":"/","background_color":"#ffffff","theme_color":"#ffffff","display":"standalone","icon":"src/img/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"0bab8ad8360e7882a92f8c6ee46f2cb0"},
    },{
      plugin: require('../node_modules/gatsby-source-prismic/gatsby-browser.js'),
      options: {"plugins":[],"repositoryName":"tf-transfer01","accessToken":"MC5aT2kxZEJFQUFDUUF1S1Qx.77-9WO-_vUkl77-9EXcd77-9K0pE77-977-9e--_vULvv71777-977-9Su-_vS7vv73vv73vv73vv70KRiU","schemas":{"about":{"Main":{"about_text":{"type":"StructuredText","config":{"multi":"paragraph","label":"about text"}}}}},"imageImgixParams":{"auto":"format"}},
    },{
      plugin: require('../node_modules/gatsby-plugin-layout/gatsby-browser.js'),
      options: {"plugins":[],"component":"/Users/theodoreford/Documents/01_projects/Tf.Transfer/tf-transfer01/src/components/global/layout.js"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
