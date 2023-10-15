"use strict";
exports.id = 678;
exports.ids = [678];
exports.modules = {

/***/ 8259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ getActiveRepositoryName)
/* harmony export */ });
/* harmony import */ var _getPreviewCookie_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9248);
const getActiveRepositoryName=()=>{const[,repositoryName]=decodeURIComponent((0,_getPreviewCookie_js__WEBPACK_IMPORTED_MODULE_0__/* .getPreviewCookie */ .k)()||"").match(/"([a-zA-Z0-9][-a-zA-Z0-9]{2,}[a-zA-Z0-9]).prismic.io"/)||[];return repositoryName;};

/***/ }),

/***/ 6780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ getDocument)
/* harmony export */ });
/* harmony import */ var _usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(836);
const getDocument=prismicId=>{const state=_usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_0__/* .usePrismicPreviewStore */ .K.getState();return state.documents[prismicId];};

/***/ }),

/***/ 9248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ getPreviewCookie)
/* harmony export */ });
const readValue=value=>{return value.replace(/%3B/g,";");};const getPreviewCookie=()=>{const cookies=document.cookie.split("; ");for(const cookie of cookies){const parts=cookie.split("=");const thisName=readValue(parts[0]).replace(/%3D/g,"=");if(thisName==="io.prismic.preview"){const value=parts.slice(1).join("=");return readValue(value);}}};

/***/ }),

/***/ 8581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ hasOwnProperty)
/* harmony export */ });
const hasOwnProperty=(obj,prop)=>{return obj.hasOwnProperty(prop);};

/***/ }),

/***/ 1786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/tf-transfer01/node_modules/react/index.js"
var index_js_ = __webpack_require__(410);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(3584);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-prismic-previews/dist/lib/getActiveRepositoryName.js
var getActiveRepositoryName = __webpack_require__(8259);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-prismic-previews/dist/lib/getDocument.js
var getDocument = __webpack_require__(6780);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-prismic-previews/dist/lib/hasOwnProperty.js
var lib_hasOwnProperty = __webpack_require__(8581);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-prismic-previews/dist/usePrismicPreviewStore.js + 2 modules
var usePrismicPreviewStore = __webpack_require__(836);
;// CONCATENATED MODULE: ./node_modules/gatsby-plugin-prismic-previews/dist/useMergePrismicPreviewData.js
const mergePreviewData=({staticDataNode,publishedDocumentIDs})=>{const castedData=staticDataNode;if(typeof castedData==="object"&&castedData!==null&&!Array.isArray(castedData)){if((0,lib_hasOwnProperty/* hasOwnProperty */.n)(castedData,"_previewable")){const replacement=(0,getDocument/* getDocument */.M)(castedData._previewable);if(replacement){return replacement;}else{if(publishedDocumentIDs.length>0&&!publishedDocumentIDs.includes(castedData._previewable)){return null;}else{return staticDataNode;}}}else{const newNode={};for(const key in castedData){newNode[key]=mergePreviewData({staticDataNode:castedData[key],publishedDocumentIDs});}return newNode;}}else if(Array.isArray(staticDataNode)){return staticDataNode.map(element=>{return mergePreviewData({staticDataNode:element,publishedDocumentIDs});});}else{return staticDataNode;}};const useMergePrismicPreviewData=staticData=>{const isBootstrapped=(0,usePrismicPreviewStore/* usePrismicPreviewStore */.K)(state=>state.isBootstrapped);const publishedDocumentIDs=(0,usePrismicPreviewStore/* usePrismicPreviewStore */.K)(state=>state.publishedDocumentIDs);const documents=(0,usePrismicPreviewStore/* usePrismicPreviewStore */.K)(state=>state.documents);return index_js_.useMemo(()=>{if(staticData){const hasPreviewData=publishedDocumentIDs.length>0||Object.keys(documents).length>0;if(isBootstrapped&&hasPreviewData){return mergePreviewData({staticDataNode:staticData,publishedDocumentIDs});}else{return staticData;}}},[documents,publishedDocumentIDs,isBootstrapped,staticData]);};
;// CONCATENATED MODULE: ./node_modules/gatsby-plugin-prismic-previews/dist/withPrismicPreview.js
const withPrismicPreview=WrappedComponent=>{const WithPrismicPreview=props=>{const isBootstrapped=(0,usePrismicPreviewStore/* usePrismicPreviewStore */.K)(state=>state.isBootstrapped);const[isPrismicPreview,setIsPrismicPreview]=index_js_.useState(null);const mergedData=useMergePrismicPreviewData(props.data);index_js_.useEffect(()=>{const abortController=new AbortController();if(!isBootstrapped){const repositoryName=(0,getActiveRepositoryName/* getActiveRepositoryName */.G)();setIsPrismicPreview(!!repositoryName);if(repositoryName){Promise.all(/* import() */[__webpack_require__.e(121), __webpack_require__.e(746)]).then(__webpack_require__.bind(__webpack_require__, 5746)).then(mod=>mod.default(repositoryName,abortController));}}return()=>abortController.abort();},[isBootstrapped]);return/* @__PURE__ */(0,jsx_runtime.jsx)(WrappedComponent,{...props,data:mergedData,originalData:props.data,isPrismicPreview});};if(false){}return WithPrismicPreview;};
;// CONCATENATED MODULE: ./src/pages/index.js
const Index=({data})=>{return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("p",null,"TF Transfer 01 - GitHub Clone 2023.10.12 15:40 1.0"));};/* harmony default export */ const pages = (withPrismicPreview(Index));// export const query = graphql`
//   query MyQuery {
//     prismicAbout {
//       data {
//         about_text {
//           html
//           text
//         }
//       }
//     }
//   }
// `;

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map