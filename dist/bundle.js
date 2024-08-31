/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/icons/searchIcon.ts":
/*!************************************!*\
  !*** ./assets/icons/searchIcon.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst DocumentElement_1 = __importDefault(__webpack_require__(/*! ../../src/core/Element/DocumentElement */ \"./src/core/Element/DocumentElement/index.ts\"));\nconst SearchIcon = () => {\n    const elementIcon = (0, DocumentElement_1.default)({\n        tagElement: 'div',\n        className: ['search__icon'],\n    });\n    elementIcon.innerHTML = `\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\">\n        <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z\" />\n    </svg>\n    `;\n    return elementIcon;\n};\nexports[\"default\"] = SearchIcon;\n\n\n//# sourceURL=webpack://fast-order/./assets/icons/searchIcon.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst router_1 = __webpack_require__(/*! ./router/router */ \"./src/router/router.ts\");\nwindow.addEventListener('DOMContentLoaded', (even) => {\n    (0, router_1.initRouter)();\n});\n\n\n//# sourceURL=webpack://fast-order/./src/app.ts?");

/***/ }),

/***/ "./src/components/common/CategoryTag/index.ts":
/*!****************************************************!*\
  !*** ./src/components/common/CategoryTag/index.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst DocumentElement_1 = __importDefault(__webpack_require__(/*! ../../../core/Element/DocumentElement */ \"./src/core/Element/DocumentElement/index.ts\"));\nfunction handleChoseCategory(e) {\n    const target = e.target;\n    const tags = document.querySelectorAll('.category__tag');\n    tags.forEach((tag) => {\n        tag.classList.remove('active');\n    });\n    target.classList.add('active');\n}\nconst CategoryTag = ({ content }) => {\n    const element = (0, DocumentElement_1.default)({\n        tagElement: 'div',\n        className: ['category__tag'],\n        handleClick: handleChoseCategory,\n        textContent: content,\n    });\n    return element;\n};\nexports[\"default\"] = CategoryTag;\n\n\n//# sourceURL=webpack://fast-order/./src/components/common/CategoryTag/index.ts?");

/***/ }),

/***/ "./src/components/common/SearchInput/index.ts":
/*!****************************************************!*\
  !*** ./src/components/common/SearchInput/index.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst searchIcon_1 = __importDefault(__webpack_require__(/*! ../../../../assets/icons/searchIcon */ \"./assets/icons/searchIcon.ts\"));\nconst DocumentElement_1 = __importDefault(__webpack_require__(/*! ../../../core/Element/DocumentElement */ \"./src/core/Element/DocumentElement/index.ts\"));\nconst SearchInputComponent = () => {\n    const searchInputElement = (0, DocumentElement_1.default)({\n        className: ['search__input-container'],\n    });\n    const inputElement = (0, DocumentElement_1.default)({\n        tagElement: 'input',\n        attributeList: [\n            { name: 'type', value: 'text' },\n            { name: 'placeholder', value: 'Search' },\n        ],\n    });\n    const iconSearch = (0, searchIcon_1.default)();\n    searchInputElement.appendChild(iconSearch);\n    searchInputElement.appendChild(inputElement);\n    return searchInputElement;\n};\nexports[\"default\"] = SearchInputComponent;\n\n\n//# sourceURL=webpack://fast-order/./src/components/common/SearchInput/index.ts?");

/***/ }),

/***/ "./src/core/Element/DocumentElement/index.ts":
/*!***************************************************!*\
  !*** ./src/core/Element/DocumentElement/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst DocumentElement = ({ tagElement = 'div', attributeList, children, textContent, redirect, href, className, id, handleClick, }) => {\n    const element = document.createElement(tagElement);\n    //   Check if element has className will be add for it\n    if (className) {\n        element.classList.add(...className);\n    }\n    //   Check if element has id will be add for it\n    if (id) {\n        element.id = id;\n    }\n    //   Check if element is a element will be add option for it\n    if (tagElement === 'a') {\n        if (redirect) {\n            element.setAttribute('target', '_blank');\n        }\n        if (href) {\n            element.setAttribute('href', href);\n        }\n    }\n    // Set attribute for element\n    if (attributeList) {\n        attributeList.forEach((attribute) => {\n            element.setAttribute(attribute.name, attribute.value);\n        });\n    }\n    //   Check if element has children element will be append for it\n    if (children) {\n        if (Array.isArray(children)) {\n            children.forEach((child) => {\n                element.appendChild(child);\n            });\n        }\n        else {\n            element.appendChild(children);\n        }\n    }\n    if (textContent) {\n        element.textContent = textContent;\n    }\n    if (handleClick) {\n        element.addEventListener('click', handleClick);\n    }\n    return element;\n};\nexports[\"default\"] = DocumentElement;\n\n\n//# sourceURL=webpack://fast-order/./src/core/Element/DocumentElement/index.ts?");

/***/ }),

/***/ "./src/layouts/Root/Partials/Footer/index.ts":
/*!***************************************************!*\
  !*** ./src/layouts/Root/Partials/Footer/index.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst DocumentElement_1 = __importDefault(__webpack_require__(/*! ../../../../core/Element/DocumentElement */ \"./src/core/Element/DocumentElement/index.ts\"));\nconst Footer = () => {\n    const footerElement = (0, DocumentElement_1.default)({\n        tagElement: 'footer',\n        className: ['footer__container', 'container'],\n        textContent: 'Footer',\n    });\n    return footerElement;\n};\nexports[\"default\"] = Footer;\n\n\n//# sourceURL=webpack://fast-order/./src/layouts/Root/Partials/Footer/index.ts?");

/***/ }),

/***/ "./src/layouts/Root/Partials/Header/index.ts":
/*!***************************************************!*\
  !*** ./src/layouts/Root/Partials/Header/index.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst SearchInput_1 = __importDefault(__webpack_require__(/*! ../../../../components/common/SearchInput */ \"./src/components/common/SearchInput/index.ts\"));\nconst DocumentElement_1 = __importDefault(__webpack_require__(/*! ../../../../core/Element/DocumentElement */ \"./src/core/Element/DocumentElement/index.ts\"));\nconst Header = () => {\n    const headerElement = (0, DocumentElement_1.default)({\n        tagElement: 'header',\n        className: ['header__container', 'container'],\n    });\n    const titleHeader = (0, DocumentElement_1.default)({\n        tagElement: 'div',\n        className: ['title__page'],\n        textContent: 'Home',\n    });\n    const searchHeader = (0, DocumentElement_1.default)({\n        tagElement: 'div',\n        className: ['search__container'],\n        children: [(0, SearchInput_1.default)()],\n    });\n    headerElement.appendChild(titleHeader);\n    headerElement.appendChild(searchHeader);\n    return headerElement;\n};\nexports[\"default\"] = Header;\n\n\n//# sourceURL=webpack://fast-order/./src/layouts/Root/Partials/Header/index.ts?");

/***/ }),

/***/ "./src/layouts/Root/index.ts":
/*!***********************************!*\
  !*** ./src/layouts/Root/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst DocumentElement_1 = __importDefault(__webpack_require__(/*! ../../core/Element/DocumentElement */ \"./src/core/Element/DocumentElement/index.ts\"));\nconst Footer_1 = __importDefault(__webpack_require__(/*! ./Partials/Footer */ \"./src/layouts/Root/Partials/Footer/index.ts\"));\nconst Header_1 = __importDefault(__webpack_require__(/*! ./Partials/Header */ \"./src/layouts/Root/Partials/Header/index.ts\"));\nconst RootLayout = ({ children }) => {\n    // Implement your layout here\n    const headerElement = (0, Header_1.default)();\n    const footerElement = (0, Footer_1.default)();\n    const mainElement = (0, DocumentElement_1.default)({\n        tagElement: 'main',\n        className: ['main__container'],\n        children,\n    });\n    const rootLayout = [headerElement, mainElement, footerElement];\n    return rootLayout;\n};\nexports[\"default\"] = RootLayout;\n\n\n//# sourceURL=webpack://fast-order/./src/layouts/Root/index.ts?");

/***/ }),

/***/ "./src/pages/Home/index.ts":
/*!*********************************!*\
  !*** ./src/pages/Home/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst CategoryTag_1 = __importDefault(__webpack_require__(/*! ../../components/common/CategoryTag */ \"./src/components/common/CategoryTag/index.ts\"));\nconst DocumentElement_1 = __importDefault(__webpack_require__(/*! ../../core/Element/DocumentElement */ \"./src/core/Element/DocumentElement/index.ts\"));\nconst HomePage = () => {\n    const tagsCategory = (0, DocumentElement_1.default)({\n        tagElement: 'div',\n        className: ['tags__category-section'],\n        children: [\n            (0, CategoryTag_1.default)({ content: 'All' }),\n            (0, CategoryTag_1.default)({ content: 'All' }),\n            (0, CategoryTag_1.default)({ content: 'All' }),\n            (0, CategoryTag_1.default)({ content: 'All' }),\n        ],\n    });\n    const homePageElement = (0, DocumentElement_1.default)({\n        tagElement: 'div',\n        className: ['home__container', 'container'],\n        children: [tagsCategory],\n    });\n    return homePageElement;\n};\nexports[\"default\"] = HomePage;\n\n\n//# sourceURL=webpack://fast-order/./src/pages/Home/index.ts?");

/***/ }),

/***/ "./src/router/router.ts":
/*!******************************!*\
  !*** ./src/router/router.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.initRouter = initRouter;\nconst Root_1 = __importDefault(__webpack_require__(/*! ../layouts/Root */ \"./src/layouts/Root/index.ts\"));\nconst Home_1 = __importDefault(__webpack_require__(/*! ../pages/Home */ \"./src/pages/Home/index.ts\"));\nfunction appendBody(elements) {\n    if (Array.isArray(elements)) {\n        for (const element of elements) {\n            document.body.appendChild(element);\n        }\n        return;\n    }\n    document.body.appendChild(elements);\n    return;\n}\nfunction handleRouter() {\n    const pathName = window.location.pathname;\n    switch (pathName) {\n        case '/':\n            const homeElement = (0, Home_1.default)();\n            const rootLayout = (0, Root_1.default)({\n                children: homeElement,\n            });\n            appendBody(rootLayout);\n            break;\n        case '/home':\n            break;\n    }\n}\nfunction initRouter() {\n    window.addEventListener('popstate', handleRouter);\n    document.querySelectorAll('a').forEach((link) => {\n        link.addEventListener('click', (event) => {\n            event.preventDefault();\n            const href = link.getAttribute('href');\n            if (href) {\n                history.pushState({}, '', href);\n                handleRouter();\n            }\n        });\n    });\n    handleRouter();\n}\n\n\n//# sourceURL=webpack://fast-order/./src/router/router.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;