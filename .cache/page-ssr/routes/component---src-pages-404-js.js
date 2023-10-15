"use strict";
exports.id = "component---src-pages-404-js";
exports.ids = ["component---src-pages-404-js"];
exports.modules = {

/***/ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getActiveRepositoryName.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-prismic-previews/dist/lib/getActiveRepositoryName.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getActiveRepositoryName: () => (/* binding */ getActiveRepositoryName)
/* harmony export */ });
/* harmony import */ var _getPreviewCookie_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPreviewCookie.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getPreviewCookie.js");

const getActiveRepositoryName = () => {
  const [, repositoryName] = decodeURIComponent((0,_getPreviewCookie_js__WEBPACK_IMPORTED_MODULE_0__.getPreviewCookie)() || "").match(/"([a-zA-Z0-9][-a-zA-Z0-9]{2,}[a-zA-Z0-9]).prismic.io"/) || [];
  return repositoryName;
};


/***/ }),

/***/ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getComponentDisplayName.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-prismic-previews/dist/lib/getComponentDisplayName.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getComponentDisplayName: () => (/* binding */ getComponentDisplayName)
/* harmony export */ });
const getComponentDisplayName = WrappedComponent => WrappedComponent.displayName || WrappedComponent.name || "Component";


/***/ }),

/***/ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getDocument.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-prismic-previews/dist/lib/getDocument.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDocument: () => (/* binding */ getDocument)
/* harmony export */ });
/* harmony import */ var _usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../usePrismicPreviewStore.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/usePrismicPreviewStore.js");

const getDocument = prismicId => {
  const state = _usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_0__.usePrismicPreviewStore.getState();
  return state.documents[prismicId];
};


/***/ }),

/***/ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getPreviewCookie.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-prismic-previews/dist/lib/getPreviewCookie.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPreviewCookie: () => (/* binding */ getPreviewCookie)
/* harmony export */ });
const readValue = value => {
  return value.replace(/%3B/g, ";");
};
const getPreviewCookie = () => {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const parts = cookie.split("=");
    const thisName = readValue(parts[0]).replace(/%3D/g, "=");
    if (thisName === "io.prismic.preview") {
      const value = parts.slice(1).join("=");
      return readValue(value);
    }
  }
};


/***/ }),

/***/ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/hasOwnProperty.js":
/*!********************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-prismic-previews/dist/lib/hasOwnProperty.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasOwnProperty: () => (/* binding */ hasOwnProperty)
/* harmony export */ });
const hasOwnProperty = (obj, prop) => {
  return obj.hasOwnProperty(prop);
};


/***/ }),

/***/ "./node_modules/gatsby-plugin-prismic-previews/dist/useMergePrismicPreviewData.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-prismic-previews/dist/useMergePrismicPreviewData.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMergePrismicPreviewData: () => (/* binding */ useMergePrismicPreviewData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_getDocument_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/getDocument.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getDocument.js");
/* harmony import */ var _lib_hasOwnProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/hasOwnProperty.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/hasOwnProperty.js");
/* harmony import */ var _usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usePrismicPreviewStore.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/usePrismicPreviewStore.js");




const mergePreviewData = ({
  staticDataNode,
  publishedDocumentIDs
}) => {
  const castedData = staticDataNode;
  if (typeof castedData === "object" && castedData !== null && !Array.isArray(castedData)) {
    if ((0,_lib_hasOwnProperty_js__WEBPACK_IMPORTED_MODULE_1__.hasOwnProperty)(castedData, "_previewable")) {
      const replacement = (0,_lib_getDocument_js__WEBPACK_IMPORTED_MODULE_2__.getDocument)(castedData._previewable);
      if (replacement) {
        return replacement;
      } else {
        if (publishedDocumentIDs.length > 0 && !publishedDocumentIDs.includes(castedData._previewable)) {
          return null;
        } else {
          return staticDataNode;
        }
      }
    } else {
      const newNode = {};
      for (const key in castedData) {
        newNode[key] = mergePreviewData({
          staticDataNode: castedData[key],
          publishedDocumentIDs
        });
      }
      return newNode;
    }
  } else if (Array.isArray(staticDataNode)) {
    return staticDataNode.map(element => {
      return mergePreviewData({
        staticDataNode: element,
        publishedDocumentIDs
      });
    });
  } else {
    return staticDataNode;
  }
};
const useMergePrismicPreviewData = staticData => {
  const isBootstrapped = (0,_usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_3__.usePrismicPreviewStore)(state => state.isBootstrapped);
  const publishedDocumentIDs = (0,_usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_3__.usePrismicPreviewStore)(state => state.publishedDocumentIDs);
  const documents = (0,_usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_3__.usePrismicPreviewStore)(state => state.documents);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (staticData) {
      const hasPreviewData = publishedDocumentIDs.length > 0 || Object.keys(documents).length > 0;
      if (isBootstrapped && hasPreviewData) {
        return mergePreviewData({
          staticDataNode: staticData,
          publishedDocumentIDs
        });
      } else {
        return staticData;
      }
    }
  }, [documents, publishedDocumentIDs, isBootstrapped, staticData]);
};


/***/ }),

/***/ "./node_modules/gatsby-plugin-prismic-previews/dist/withPrismicPreview.js":
/*!********************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-prismic-previews/dist/withPrismicPreview.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withPrismicPreview: () => (/* binding */ withPrismicPreview)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_getActiveRepositoryName_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/getActiveRepositoryName.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getActiveRepositoryName.js");
/* harmony import */ var _lib_getComponentDisplayName_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/getComponentDisplayName.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getComponentDisplayName.js");
/* harmony import */ var _useMergePrismicPreviewData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useMergePrismicPreviewData.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/useMergePrismicPreviewData.js");
/* harmony import */ var _usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usePrismicPreviewStore.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/usePrismicPreviewStore.js");






const withPrismicPreview = WrappedComponent => {
  const WithPrismicPreview = props => {
    const isBootstrapped = (0,_usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_2__.usePrismicPreviewStore)(state => state.isBootstrapped);
    const [isPrismicPreview, setIsPrismicPreview] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    const mergedData = (0,_useMergePrismicPreviewData_js__WEBPACK_IMPORTED_MODULE_3__.useMergePrismicPreviewData)(props.data);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
      const abortController = new AbortController();
      if (!isBootstrapped) {
        const repositoryName = (0,_lib_getActiveRepositoryName_js__WEBPACK_IMPORTED_MODULE_4__.getActiveRepositoryName)();
        setIsPrismicPreview(!!repositoryName);
        if (repositoryName) {
          __webpack_require__.e(/*! import() */ "node_modules_gatsby-plugin-prismic-previews_dist_lib_bootstrapPrismicPreview_js").then(__webpack_require__.bind(__webpack_require__, /*! ./lib/bootstrapPrismicPreview.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/bootstrapPrismicPreview.js")).then(mod => mod.default(repositoryName, abortController));
        }
      }
      return () => abortController.abort();
    }, [isBootstrapped]);
    return /* @__PURE__ */(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WrappedComponent, {
      ...props,
      data: mergedData,
      originalData: props.data,
      isPrismicPreview
    });
  };
  if (true) {
    const wrappedComponentName = (0,_lib_getComponentDisplayName_js__WEBPACK_IMPORTED_MODULE_5__.getComponentDisplayName)(WrappedComponent);
    WithPrismicPreview.displayName = `withPrismicPreview(${wrappedComponentName})`;
  }
  return WithPrismicPreview;
};


/***/ }),

/***/ "./node_modules/gatsby-plugin-prismic-previews/dist/withPrismicUnpublishedPreview.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-prismic-previews/dist/withPrismicUnpublishedPreview.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withPrismicUnpublishedPreview: () => (/* binding */ withPrismicUnpublishedPreview)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_getActiveRepositoryName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/getActiveRepositoryName.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getActiveRepositoryName.js");
/* harmony import */ var _lib_getComponentDisplayName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/getComponentDisplayName.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getComponentDisplayName.js");




const withPrismicUnpublishedPreview = WrappedComponent => {
  const WithPrismicUnpublishedPreview = props => {
    var _a;
    const [unpublishedData, setUnpublishedData] = react__WEBPACK_IMPORTED_MODULE_1__.useState({});
    const ResolvedComponent = unpublishedData.component || WrappedComponent;
    const data = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ({
      ...props.data,
      ...unpublishedData.data
    }), [props.data, unpublishedData.data]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
      const abortController = new AbortController();
      const repositoryName = (0,_lib_getActiveRepositoryName_js__WEBPACK_IMPORTED_MODULE_2__.getActiveRepositoryName)();
      if (repositoryName) {
        Promise.all([__webpack_require__.e(/*! import() */ "node_modules_gatsby-plugin-prismic-previews_dist_lib_bootstrapPrismicPreview_js").then(__webpack_require__.bind(__webpack_require__, /*! ./lib/bootstrapPrismicPreview.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/bootstrapPrismicPreview.js")), __webpack_require__.e(/*! import() */ "node_modules_gatsby-plugin-prismic-previews_dist_lib_resolveUnpublishedPrismicPreview_js").then(__webpack_require__.bind(__webpack_require__, /*! ./lib/resolveUnpublishedPrismicPreview.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/resolveUnpublishedPrismicPreview.js"))]).then(([bootstrap, resolve]) => bootstrap.default(repositoryName, abortController).then(() => {
          var _a2;
          return resolve.default(repositoryName, abortController, setUnpublishedData, (_a2 = props.location) == null ? void 0 : _a2.pathname);
        }));
      }
      return () => abortController.abort();
    }, [(_a = props.location) == null ? void 0 : _a.pathname]);
    return /* @__PURE__ */(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ResolvedComponent, {
      ...props,
      data
    });
  };
  if (true) {
    const wrappedComponentName = (0,_lib_getComponentDisplayName_js__WEBPACK_IMPORTED_MODULE_3__.getComponentDisplayName)(WrappedComponent);
    WithPrismicUnpublishedPreview.displayName = `withPrismicUnpublishedPreview(${wrappedComponentName})`;
  }
  return WithPrismicUnpublishedPreview;
};


/***/ }),

/***/ "./src/pages/404.js?export=default":
/*!*****************************************!*\
  !*** ./src/pages/404.js?export=default ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_prismic_previews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-prismic-previews */ "./node_modules/gatsby-plugin-prismic-previews/dist/withPrismicUnpublishedPreview.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/pages/index.js");



// import Template from "../templates/template";

const NotFoundPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Page not found!"));

// If an unpublished `page` document is previewed, PageTemplate will be rendered.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,gatsby_plugin_prismic_previews__WEBPACK_IMPORTED_MODULE_2__.withPrismicUnpublishedPreview)(NotFoundPage, {
  templateMap: {
    homepage: _index__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}));

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_prismic_previews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-prismic-previews */ "./node_modules/gatsby-plugin-prismic-previews/dist/withPrismicPreview.js");



const Index = ({
  data
}) => {
  const projects = data.allPrismicProject.data.map((project, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Link, {
      to: project.uid
    }, "Project");
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "TF Transfer 01 - GitHub Clone 2023.10.12 15:40 1.0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, data.prismicAbout.data.about_text.text));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,gatsby_plugin_prismic_previews__WEBPACK_IMPORTED_MODULE_1__.withPrismicPreview)(Index));
const query = "1800210583";

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-js.js.map