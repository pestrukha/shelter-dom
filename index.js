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

/***/ "./card.js":
/*!*****************!*\
  !*** ./card.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createComponent\": () => (/* binding */ createComponent)\n/* harmony export */ });\n/* harmony import */ var _pet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pet */ \"./pet.js\");\n \r\n\r\nconst CssClasses = {\r\n    CARD: 'card',\r\n    ITEM: 'card__item',\r\n    IMAGE: 'item__image',\r\n    HEADER: 'item__header',\r\n    BUTTON: 'card__button',\r\n};\r\nconst TEXT_BUTTON = 'More info';\r\nconst TEXT_ALT_IMAGE = 'Photo';\r\n\r\n\r\nfunction createComponent(pet) {\r\n    _pet__WEBPACK_IMPORTED_MODULE_0__.validatePet(pet); \r\n\r\n    const component = document.createElement('li');\r\n    component.classList.add(CssClasses.CARD) \r\n\r\n    const info = document.createElement('figure');\r\n    info.classList.add(CssClasses.ITEM); \r\n    const image = document.createElement('img');\r\n    image.classList.add(CssClasses.IMAGE); \r\n    image.src = pet.img;\r\n    image.alt = TEXT_ALT_IMAGE;\r\n    const name = document.createElement('figcaption');\r\n    name.classList.add(CssClasses.HEADER); \r\n    name.textContent = pet.name; \r\n\r\n    info.append(image, name);\r\n    \r\n    const button = document.createElement('button');\r\n    button.classList.add(CssClasses.BUTTON); \r\n    button.textContent = TEXT_BUTTON; \r\n\r\n    component.append(info, button); \r\n\r\n    return component;  \r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://shelter/./card.js?");

/***/ }),

/***/ "./index.js?41f5":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createComponent\": () => (/* binding */ createComponent)\n/* harmony export */ });\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./index.html\");\n/* harmony import */ var _pages_main_src_sass_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/main/src/sass/style.css */ \"./pages/main/src/sass/style.css?a2a8\");\n/* harmony import */ var _slider_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider.css */ \"./slider.css\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card */ \"./card.js\");\n/* harmony import */ var _pets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pets */ \"./pets.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  const CssClasses = {\r\n    SLIDER: 'slider',\r\n    BUTTON: 'round__button',\r\n    WRAPPER: 'slider__wrapper',\r\n    CARD_CONTAINER: 'card__container',\r\n    CARD_GROUP: 'card__group',\r\n    ANIMATE_LEFT: 'animate__left',\r\n    ANIMATE_RIGHT: 'animate__right',\r\n    NO_TRANSITION: 'container__no-transition',\r\n};\r\nconst TEXT_BUTTON_LEFT = '<';\r\nconst TEXT_BUTTON_RIGHT = '>';\r\nconst COUNT_CARD = 3;\r\nconst COUNT_CARD_BLOCK = 3; \r\nconst INDEX_VISIBLE_GROUP = 2; \r\n\r\nlet cardContainer = null;\r\nlet buttonLeft = null;\r\nlet buttonRight = null;\r\nlet cards = new Array();\r\nlet visibleCards = new Array();\r\nlet deltaOrder = 0;\r\nlet isRightClick = false;\r\nlet isLeftClick = false;\r\n\r\n\r\n\r\nfunction createComponent(petsJSON) {\r\n    if (!Array.isArray(petsJSON)) {\r\n        throw TypeError(`Slider error. Pets array is invalid.`);\r\n    }\r\n\r\n    const component = createElement('section', CssClasses.SLIDER); \r\n\r\n    const buttonLeft = createElement('button', CssClasses.BUTTON); \r\n    buttonLeft.textContent = TEXT_BUTTON_LEFT; \r\n    component.append(buttonLeft);\r\n    \r\n\r\n    const wrapper = createElement('div', CssClasses.WRAPPER); \r\n\r\n    cardContainer = createElement('ul', CssClasses.CARD_CONTAINER);\r\n    wrapper.append(cardContainer);  \r\n\r\n    petsJSON.forEach((pet) =>{\r\n        const cardComponent = _card__WEBPACK_IMPORTED_MODULE_3__.createComponent(pet);\r\n        cards.push(cardComponent);\r\n    });\r\n\r\n    for (let i = 0; i < COUNT_CARD_BLOCK; i += 1) {\r\n        const cardGroup = createElement('ul', CssClasses.CARD_GROUP);\r\n        cardGroup.style.order = `${i + 1}`;\r\n        cardContainer.append(cardGroup);\r\n    }\r\n    for (let i = 0; i < COUNT_CARD; i += 1) {\r\n        cardContainer.children[1].append(cards[i]);\r\n        visibleCards.push(cards[i]);\r\n    }\r\n\r\n    component.append(wrapper); \r\n\r\n    const buttonRight = createElement('button', CssClasses.BUTTON); \r\n    buttonRight.textContent = TEXT_BUTTON_RIGHT; \r\n    component.append(buttonRight);\r\n\r\n    buttonLeft.addEventListener('click', buttonLeftClickHandler);\r\n    buttonRight.addEventListener('click', buttonRightClickHandler);\r\n    cardContainer.addEventListener('transitionend', endTransitionHandler);\r\n\r\n    return component;\r\n}\r\n\r\nfunction buttonLeftClickHandler() {\r\n    if (!isRightClick) {\r\n        let rightCardGroup = null;\r\n        for (let group of cardContainer.children) {\r\n            if (Number(group.style.order) === INDEX_VISIBLE_GROUP + 1) {\r\n                rightCardGroup = group;\r\n                break;\r\n            }\r\n        }\r\n        while (rightCardGroup.firstElementChild) {\r\n            rightCardGroup.firstElementChild.remove();\r\n        }\r\n\r\n        const cardsToShow = getCardsToShow();\r\n        visibleCards = new Array(...cardsToShow);\r\n        cardsToShow.forEach((card) => {\r\n            rightCardGroup.insertAdjacentElement('beforeend', card);\r\n        });\r\n    }\r\n\r\n    isLeftClick = true;\r\n    isRightClick = !isLeftClick;\r\n\r\n    deltaOrder = -1;\r\n    cardContainer.classList.add(CssClasses.ANIMATE_LEFT); \r\n}\r\nfunction buttonRightClickHandler() {\r\n    if (!isLeftClick) {\r\n        let leftCardGroup = null;\r\n        for (let group of cardContainer.children) {\r\n            if (Number(group.style.order) === INDEX_VISIBLE_GROUP - 1) {\r\n                leftCardGroup = group;\r\n                break;\r\n            }\r\n        }\r\n        while (leftCardGroup.firstElementChild) {\r\n            leftCardGroup.firstElementChild.remove();\r\n        }\r\n\r\n        const cardsToShow = getCardsToShow();\r\n        visibleCards = new Array(...cardsToShow);\r\n        cardsToShow.forEach((card) => {\r\n            leftCardGroup.insertAdjacentElement('beforeend', card);\r\n        });\r\n    }\r\n\r\n    isRightClick = true;\r\n    isLeftClick = !isRightClick;\r\n\r\n    deltaOrder = 1;\r\n    cardContainer.classList.add(CssClasses.ANIMATE_RIGHT); \r\n} \r\n\r\nfunction endTransitionHandler() {\r\n    cardContainer.classList.add(CssClasses.NO_TRANSITION);\r\n    for (const group of cardContainer.children) {\r\n        let order = Number(group.style.order);\r\n        order = order + deltaOrder;\r\n        if (order <= 0) {\r\n            order = COUNT_CARD;\r\n        } else if (order > COUNT_CARD) {\r\n            order = 1;\r\n        }\r\n        group.style.order = order;\r\n    }\r\n\r\n    cardContainer.classList.remove(CssClasses.ANIMATE_LEFT, CssClasses.ANIMATE_RIGHT);\r\n    setTimeout(() => {\r\n        cardContainer.classList.remove(CssClasses.NO_TRANSITION); \r\n    }, 1);\r\n}\r\n\r\nfunction createElement(tagName, className) {\r\n    const element = document.createElement(tagName);\r\n    element.classList.add(className);\r\n    return element; \r\n}\r\n\r\nfunction getCardsToShow() {\r\n    let cardsToShow = new Array();\r\n    while (cardsToShow.length < COUNT_CARD) {\r\n        const index = getRandomNumber(0, cards.length - 1);\r\n        if (!visibleCards.includes(cards[index]) && !cardsToShow.includes(cards[index])) {\r\n            cardsToShow.push(cards[index]);\r\n        }\r\n    }\r\n    return cardsToShow;\r\n}\r\n\r\nfunction getRandomNumber(min, max) {\r\n    min = Math.ceil(min);\r\n    max = Math.floor(max);\r\n    return Math.floor(Math.random() * (max - min)) + min;\r\n}\r\n\r\n\r\n \r\nconst slider = createComponent(_pets__WEBPACK_IMPORTED_MODULE_4__.petsJSON); \r\nlet list = document.querySelector('.pets');\r\nlist.after(slider); \n\n//# sourceURL=webpack://shelter/./index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./pages/main/src/sass/style.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./pages/main/src/sass/style.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../pages/main/src/fonts/Georgia.eot */ \"./pages/main/src/fonts/Georgia.eot\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../pages/main/src/fonts/Georgia.woff */ \"./pages/main/src/fonts/Georgia.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../pages/main/src/fonts/Georgia.ttf */ \"./pages/main/src/fonts/Georgia.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons/icon-pet-food.svg */ \"./pages/main/src/img/icons/icon-pet-food.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons/icon-transportation.svg */ \"./pages/main/src/img/icons/icon-transportation.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons/icon-toys.svg */ \"./pages/main/src/img/icons/icon-toys.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons/icon-bowls-and-cups.svg */ \"./pages/main/src/img/icons/icon-bowls-and-cups.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons/icon-shampoos.svg */ \"./pages/main/src/img/icons/icon-shampoos.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons/icon-vitamins.svg */ \"./pages/main/src/img/icons/icon-vitamins.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons/icon-medicines.svg */ \"./pages/main/src/img/icons/icon-medicines.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons/icon-collars-leashes.svg */ \"./pages/main/src/img/icons/icon-collars-leashes.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons/icon-sleeping-area.svg */ \"./pages/main/src/img/icons/icon-sleeping-area.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons/icon-email.svg */ \"./pages/main/src/img/icons/icon-email.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons/icon-phone.svg */ \"./pages/main/src/img/icons/icon-phone.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons/icon-marker.svg */ \"./pages/main/src/img/icons/icon-marker.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../img/icons/credit-card.svg */ \"./pages/main/src/img/icons/credit-card.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../img/start/start-screen-background.png */ \"./pages/main/src/img/start/start-screen-background.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___, { hash: \"?#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);\nvar ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);\nvar ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);\nvar ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);\nvar ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);\nvar ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n/* Document\\n   ========================================================================== */\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\nhtml {\\n  line-height: 1.15; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/* Sections\\n   ========================================================================== */\\n/**\\n * Remove the margin in all browsers.\\n */\\nbody {\\n  margin: 0;\\n}\\n\\n/**\\n * Render the `main` element consistently in IE.\\n */\\nmain {\\n  display: block;\\n}\\n\\n/**\\n * Correct the font size and margin on `h1` elements within `section` and\\n * `article` contexts in Chrome, Firefox, and Safari.\\n */\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0;\\n}\\n\\n/* Grouping content\\n   ========================================================================== */\\n/**\\n * 1. Add the correct box sizing in Firefox.\\n * 2. Show the overflow in Edge and IE.\\n */\\nhr {\\n  box-sizing: content-box; /* 1 */\\n  height: 0; /* 1 */\\n  overflow: visible; /* 2 */\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\npre {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n/**\\n * Remove the gray background on active links in IE 10.\\n */\\na {\\n  background-color: transparent;\\n}\\n\\n/**\\n * 1. Remove the bottom border in Chrome 57-\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n */\\nabbr[title] {\\n  border-bottom: none; /* 1 */\\n  text-decoration: underline; /* 2 */\\n  text-decoration: underline dotted; /* 2 */\\n}\\n\\n/**\\n * Add the correct font weight in Chrome, Edge, and Safari.\\n */\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/**\\n * Add the correct font size in all browsers.\\n */\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/**\\n * Prevent `sub` and `sup` elements from affecting the line height in\\n * all browsers.\\n */\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/* Embedded content\\n   ========================================================================== */\\n/**\\n * Remove the border on images inside links in IE 10.\\n */\\nimg {\\n  border-style: none;\\n}\\n\\n/* Forms\\n   ========================================================================== */\\n/**\\n * 1. Change the font styles in all browsers.\\n * 2. Remove the margin in Firefox and Safari.\\n */\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  line-height: 1.15; /* 1 */\\n  margin: 0; /* 2 */\\n}\\n\\n/**\\n * Show the overflow in IE.\\n * 1. Show the overflow in Edge.\\n */\\nbutton,\\ninput { /* 1 */\\n  overflow: visible;\\n}\\n\\n/**\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n * 1. Remove the inheritance of text transform in Firefox.\\n */\\nbutton,\\nselect { /* 1 */\\n  text-transform: none;\\n}\\n\\n/**\\n * Correct the inability to style clickable types in iOS and Safari.\\n */\\n/**\\n * Remove the inner border and padding in Firefox.\\n */\\nbutton::-moz-focus-inner,\\n[type=button]::-moz-focus-inner,\\n[type=reset]::-moz-focus-inner,\\n[type=submit]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0;\\n}\\n\\n/**\\n * Restore the focus styles unset by the previous rule.\\n */\\nbutton:-moz-focusring,\\n[type=button]:-moz-focusring,\\n[type=reset]:-moz-focusring,\\n[type=submit]:-moz-focusring {\\n  outline: 1px dotted ButtonText;\\n}\\n\\n/**\\n * Correct the padding in Firefox.\\n */\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em;\\n}\\n\\n/**\\n * 1. Correct the text wrapping in Edge and IE.\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\n * 3. Remove the padding so developers are not caught out when they zero out\\n *    `fieldset` elements in all browsers.\\n */\\nlegend {\\n  box-sizing: border-box; /* 1 */\\n  color: inherit; /* 2 */\\n  display: table; /* 1 */\\n  max-width: 100%; /* 1 */\\n  padding: 0; /* 3 */\\n  white-space: normal; /* 1 */\\n}\\n\\n/**\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n */\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/**\\n * Remove the default vertical scrollbar in IE 10+.\\n */\\ntextarea {\\n  overflow: auto;\\n}\\n\\n/**\\n * 1. Add the correct box sizing in IE 10.\\n * 2. Remove the padding in IE 10.\\n */\\n[type=checkbox],\\n[type=radio] {\\n  box-sizing: border-box; /* 1 */\\n  padding: 0; /* 2 */\\n}\\n\\n/**\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\n */\\n[type=number]::-webkit-inner-spin-button,\\n[type=number]::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/**\\n * 1. Correct the odd appearance in Chrome and Safari.\\n * 2. Correct the outline style in Safari.\\n */\\n/**\\n * Remove the inner padding in Chrome and Safari on macOS.\\n */\\n[type=search]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/**\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\n * 2. Change font properties to `inherit` in Safari.\\n */\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/* Interactive\\n   ========================================================================== */\\n/*\\n * Add the correct display in Edge, IE 10+, and Firefox.\\n */\\ndetails {\\n  display: block;\\n}\\n\\n/*\\n * Add the correct display in all browsers.\\n */\\nsummary {\\n  display: list-item;\\n}\\n\\n/* Misc\\n   ========================================================================== */\\n/**\\n * Add the correct display in IE 10+.\\n */\\ntemplate {\\n  display: none;\\n}\\n\\n/**\\n * Add the correct display in IE 10.\\n */\\n[hidden] {\\n  display: none;\\n}\\n\\nsection, main, footer, header, article {\\n  display: block;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\n.footer-navigation__links a, .logo-path, .button {\\n  transition: all 0.3s ease-out;\\n}\\n\\n.modal::-webkit-scrollbar {\\n  width: 5px;\\n}\\n.modal::-webkit-scrollbar-track {\\n  box-shadow: inset 0 0 1px grey;\\n}\\n.modal::-webkit-scrollbar-thumb {\\n  background: #7752BE;\\n  border-radius: 10px;\\n}\\n\\n@font-face {\\n  font-family: \\\"Georgia Regular\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"embedded-opentype\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format(\\\"woff\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format(\\\"truetype\\\");\\n  font-weight: normal;\\n  font-style: normal;\\n}\\nhtml {\\n  font-size: 13px;\\n}\\n\\nbody {\\n  font-family: \\\"Georgia Regular\\\", sans-serif;\\n  font-size: 1.6rem;\\n  font-style: normal;\\n  font-weight: normal;\\n  line-height: 2.6rem;\\n}\\n\\nh1 {\\n  font-size: 4rem;\\n  font-style: normal;\\n  font-weight: bold;\\n  line-height: 6rem;\\n}\\n@media (max-width: 414px) {\\n  h1 {\\n    font-size: 3.2rem;\\n    font-style: normal;\\n    font-weight: bold;\\n    line-height: 4.2rem;\\n  }\\n}\\n\\nh2 {\\n  font-size: 3.4rem;\\n  font-style: normal;\\n  font-weight: bold;\\n  line-height: 4.6rem;\\n}\\n@media (max-width: 414px) {\\n  h2 {\\n    font-size: 2.4rem;\\n    font-style: normal;\\n    font-weight: bold;\\n    line-height: 3.3rem;\\n  }\\n}\\n\\nh3 {\\n  font-size: 2.4rem;\\n  font-style: normal;\\n  font-weight: bold;\\n  line-height: 3.4rem;\\n}\\n\\nh4 {\\n  font-size: 2rem;\\n  font-style: normal;\\n  font-weight: 600;\\n  line-height: 3rem;\\n}\\n\\nh5 {\\n  font-size: 1.6rem;\\n  font-style: normal;\\n  font-weight: bold;\\n  line-height: 2.6rem;\\n}\\n\\n.block-shadowed {\\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\\n  border-radius: 10px;\\n}\\n\\n.button {\\n  padding: 11px 25px 13px;\\n  font-style: normal;\\n  font-weight: 600;\\n  font-size: 1.6rem;\\n  line-height: 2.2rem;\\n  border-radius: 4px;\\n  cursor: pointer;\\n}\\n.button_bordered {\\n  background: #FFFFFF;\\n  border: 1px solid #D7D7D7;\\n  border-radius: 100px;\\n  color: #544837;\\n}\\n.button_bordered:hover {\\n  background: #BCD0E5;\\n  border-color: #BCD0E5;\\n}\\n.button_colored {\\n  background: #F1CDB3;\\n  color: #292929;\\n  border: 1px solid #F1CDB3;\\n  border-radius: 100px;\\n}\\n.button_colored:hover {\\n  background: #ec8b6a;\\n  border-color: #ec8b6a;\\n}\\n\\n.link-button {\\n  color: #F1CDB3;\\n  display: inline-flex;\\n  align-items: center;\\n}\\n\\n.link-button__text {\\n  margin-left: 9px;\\n}\\n\\n.icon {\\n  cursor: pointer;\\n  display: inline-block;\\n}\\n\\n.icon_food {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  width: 60px;\\n  height: 60px;\\n}\\n\\n.icon_transportation {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \");\\n  width: 60px;\\n  height: 60px;\\n}\\n\\n.icon_toys {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \");\\n  width: 60px;\\n  height: 60px;\\n}\\n\\n.icon_bowls {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \");\\n  width: 60px;\\n  height: 60px;\\n}\\n\\n.icon_shampoos {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \");\\n  width: 60px;\\n  height: 60px;\\n}\\n\\n.icon_vitamins {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \");\\n  width: 60px;\\n  height: 60px;\\n}\\n\\n.icon_medicines {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \");\\n  width: 60px;\\n  height: 60px;\\n}\\n\\n.icon_collars {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \");\\n  width: 60px;\\n  height: 60px;\\n}\\n\\n.icon_sleeping {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_12___ + \");\\n  width: 60px;\\n  height: 60px;\\n}\\n\\n.icon_email {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_13___ + \");\\n  width: 40px;\\n  height: 32px;\\n}\\n\\n.icon_phone {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_14___ + \");\\n  width: 40px;\\n  height: 32px;\\n}\\n\\n.icon_marker {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_15___ + \");\\n  width: 22px;\\n  height: 32px;\\n}\\n\\n.icon_credit-card {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_16___ + \");\\n  width: 30px;\\n  height: 23px;\\n}\\n\\n.logo {\\n  display: flex;\\n}\\n\\n.logo-object {\\n  width: 184px;\\n  height: 60px;\\n}\\n\\n.logo-svg {\\n  cursor: pointer;\\n}\\n.logo-svg:hover .logo-path {\\n  fill: #F1CDB3;\\n}\\n\\n.tags {\\n  display: flex;\\n}\\n.tags > * {\\n  margin-right: 7px;\\n}\\n\\n.tag {\\n  border-radius: 90px;\\n  padding: 0 14px;\\n  cursor: pointer;\\n  font-size: 1.3rem;\\n  font-style: normal;\\n  font-weight: normal;\\n  line-height: 2.8rem;\\n}\\n.tag_selected {\\n  background-color: #F1CDB3;\\n  color: #FFFFFF;\\n}\\n.tag_bordered {\\n  border: 1px solid #D7D7D7;\\n}\\n.tag_colored {\\n  background-color: #F5F5F5;\\n}\\n\\n.hamburger__line, .hamburger:after, .hamburger:before {\\n  content: \\\"\\\";\\n  display: inline-block;\\n  position: absolute;\\n  background-color: #173A56;\\n  border-radius: 5px;\\n  width: 100%;\\n  height: 3px;\\n}\\n\\n.hamburger {\\n  display: none;\\n  position: relative;\\n  width: 31px;\\n  height: 25px;\\n  margin-right: 37px;\\n}\\n@media (max-width: 768px) {\\n  .hamburger {\\n    display: inline-block;\\n  }\\n}\\n.hamburger:before {\\n  top: 0;\\n  left: 0;\\n}\\n.hamburger:after {\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n.hamburger__line {\\n  top: calc(50% - 1.5px);\\n  left: 0;\\n}\\n\\n.overlay {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(80, 80, 80, 0.4);\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.modal {\\n  position: relative;\\n  border-radius: 10px;\\n  background-color: #FFFFFF;\\n  width: 675px;\\n  min-height: 120px;\\n  max-height: 90%;\\n  overflow: auto;\\n}\\n@media (max-width: 768px) {\\n  .modal {\\n    width: 90%;\\n  }\\n}\\n\\n.modal__close-icon {\\n  position: absolute;\\n  top: 30px;\\n  right: 26px;\\n  cursor: pointer;\\n}\\n.modal__close-icon svg {\\n  pointer-events: none;\\n}\\n\\n.wrapper {\\n  max-width: 1197px;\\n  margin: auto;\\n}\\n@media (max-width: 1197px) {\\n  .wrapper {\\n    padding: 0 46px;\\n  }\\n}\\n@media (max-width: 414px) {\\n  .wrapper {\\n    padding: 0 21px;\\n  }\\n}\\n\\n.header {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_17___ + \");\\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\\n  padding: 27px 0 27px 0;\\n}\\n\\n.header__wrapper {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n@media (max-width: 768px) {\\n  .header__wrapper {\\n    padding-left: 24px;\\n  }\\n}\\n\\n.header__logo-line {\\n  display: flex;\\n}\\n\\n.header__buttons > .button {\\n  margin-left: 14px;\\n}\\n\\n.header__buttons > .button {\\n  margin-left: 14px;\\n}\\n.header__buttons > .button:first-child {\\n  margin-left: 14px;\\n  margin-left: 0;\\n}\\n@media (max-width: 414px) {\\n  .header__buttons {\\n    display: none;\\n  }\\n}\\n\\n.layout-5-column {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n}\\n.layout-5-column > * {\\n  flex-basis: 15%;\\n}\\n\\n.layout-4-column {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n}\\n.layout-4-column > * {\\n  flex-basis: 25%;\\n}\\n\\n.layout-3-column {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n}\\n.layout-3-column > * {\\n  flex-basis: 30%;\\n}\\n.layout-3-column:after {\\n  content: \\\"\\\";\\n  width: 30%;\\n  display: block;\\n}\\n\\n.layout-2-column {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n}\\n.layout-2-column > * {\\n  flex-basis: 48%;\\n}\\n\\n.footer {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_17___ + \");\\n  padding: 60px 0 0;\\n}\\n@media (max-width: 414px) {\\n  .footer {\\n    padding: 31px 0;\\n  }\\n}\\n\\n.footer-navigation {\\n  flex-grow: 1;\\n  padding-left: 152px;\\n}\\n@media (max-width: 768px) {\\n  .footer-navigation {\\n    padding-left: 0;\\n    margin-top: 34px;\\n  }\\n}\\n@media (max-width: 414px) {\\n  .footer-navigation {\\n    flex-direction: column;\\n  }\\n}\\n\\n.footer-navigation__title {\\n  margin: 0 0 15px;\\n  color: #FFFFFF;\\n}\\n\\n.footer-navigation__text {\\n  margin: 20px;\\n  vertical-align: 9px;\\n}\\n\\n.footer-navigation__links {\\n  padding: 40px 0 0 0;\\n}\\n.footer-navigation__links a {\\n  color: #F1CDB3;\\n  font-size: 1.6rem;\\n  font-style: normal;\\n  font-weight: normal;\\n  line-height: 3.5rem;\\n  text-decoration: none;\\n}\\n.footer-navigation__links a:hover {\\n  color: #F1CDB3;\\n}\\n\\n.donation {\\n  background-color: #F6F6F6;\\n}\\n\\n.donation__wrapper {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  padding: 40px;\\n}\\n@media (max-width: 414px) {\\n  .donation__wrapper {\\n    flex-direction: column-reverse;\\n  }\\n}\\n\\n.donation__form {\\n  background-color: #F1CDB3;\\n  width: 280px;\\n  height: 43px;\\n  border-radius: 9px;\\n  border: none;\\n}\\n\\n.donation__legal-text {\\n  font-size: 1rem;\\n  font-style: normal;\\n  font-weight: bold;\\n  line-height: 1rem;\\n  width: 320px;\\n  color: gray;\\n  font-style: italic;\\n  font-weight: 50;\\n}\\n\\n.donation__text {\\n  font-size: 1.2rem;\\n}\\n\\n.pets {\\n  background-color: #F6F6F6;\\n}\\n\\n.pets__button {\\n  text-align: center;\\n  padding: 40px;\\n}\\n\\n.pet__block {\\n  text-align: center;\\n  background-color: rgb(250, 250, 250);\\n  border-radius: 9px;\\n  padding: 0 0 30px;\\n}\\n\\n.pets__title {\\n  text-align: center;\\n  padding: 40px 0 0 0;\\n}\\n\\n.navigation {\\n  display: flex;\\n  font-size: 1.5rem;\\n  line-height: 2.8rem;\\n}\\n\\n.navigation__link {\\n  list-style: none;\\n  color: #FFFFFF;\\n  padding: 0 10px;\\n  cursor: pointer;\\n}\\n.navigation__link:hover {\\n  color: #F1CDB3;\\n}\\n\\n@media (max-width: 768px) {\\n  .header__navigation {\\n    display: none;\\n  }\\n}\\n\\n.start {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_17___ + \");\\n}\\n\\n.start__wrapper {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n@media (max-width: 414px) {\\n  .start__wrapper {\\n    flex-direction: column-reverse;\\n  }\\n}\\n\\n.start__title {\\n  color: #FFFFFF;\\n}\\n\\n.start__text {\\n  color: #FFFFFF;\\n  font-size: 1.5rem;\\n}\\n\\n.start__button {\\n  padding: 20px 0 0 0;\\n}\\n\\n.help-container {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 30px;\\n}\\n\\n.item {\\n  text-align: center;\\n}\\n\\n.help-column {\\n  display: flex;\\n  justify-content: space-around;\\n  margin: 30px;\\n}\\n\\n.help__title {\\n  text-align: center;\\n  padding: 20px;\\n}\\n\\n.about__wrapper {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 40px;\\n}\\n@media (max-width: 414px) {\\n  .about__wrapper {\\n    flex-direction: column-reverse;\\n  }\\n}\\n\\n.about__image {\\n  margin: 0 125px 0 125px;\\n}\\n\\n.about__content {\\n  margin: 0 0 0 50px;\\n}\\n\\n.about__text {\\n  font-size: 1.4rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://shelter/./pages/main/src/sass/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./slider.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./slider.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".slider {\\n  position: relative;\\n  width: 80%;\\n  max-height: 600px;\\n  max-width: calc(var(--max-width) - 80px);\\n\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  align-items: center;\\n\\n  margin: 0 0 0 125px;\\n  \\n}\\n\\n.slider__wrapper {\\n  height: 100%;\\n  width: 80%;\\n  overflow: hidden;\\n\\n  margin: 5%;\\n  padding: 0%;\\n  box-sizing: border-box;\\n}\\n\\n.card__container {\\n  position: relative;\\n  display: flex;\\n  justify-content: flex-start;\\n  box-sizing: border-box;\\n\\n  height: 80%;\\n  width: 100%;\\n\\n  margin: 0%;\\n  padding: 0%;\\n\\n  list-style-type: none;\\n\\n  transform: translateX(-100%);\\n  transition: 1s;\\n}\\n\\n.container__no-transition {\\n    transition: none;\\n}\\n\\n.card__group {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-around;\\n  align-items: center;\\n  box-sizing: border-box;\\n\\n  height: 100%;\\n  width: 100%;\\n  min-width: 819px;\\n\\n  margin: 0%;\\n  padding: 0%;\\n}\\n\\n.card {\\n  width: 27%;\\n\\n  margin: 0% 3%;\\n}\\n\\n.animate__left {\\n  transform: translateX(-200%);\\n}\\n\\n.animate__right {\\n  transform: translateX(0%);\\n}\\n\\n\\n\\n.card {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: center;\\n  box-sizing: border-box;\\n\\n  height: 400px;\\n\\n  margin: 0%;\\n  padding: 0%;\\n\\n  color: var(--color-text);\\n  background-color: var(--background-card);\\n  border-radius: 10px;\\n}\\n\\n.card:hover {\\n  cursor: pointer;\\n  background-color: var(--background-card-hover);\\n  box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);\\n}\\n\\n.card__item {\\n  height: 80%;\\n  width: max-content;\\n\\n  margin: 0% 5%;\\n}\\n\\n.item__image {\\n  height: 70%;\\n  width: 100%;\\n\\n  padding: 0%;\\n}\\n\\n.item__header {\\n  height: 30%;\\n  width: 100%;\\n\\n  margin-top: 10%;\\n  padding: 0%;\\n\\n  text-align: center;\\n}\\n\\n.card__button {\\n  height: 10%;\\n  width: 100%;\\n  max-width: 120px;\\n\\n  padding: 0%;\\n  background: var(--background-card);\\n  border: 1px solid var(--border-color);\\n  border-radius: 20px;\\n\\n  text-align: center;\\n}\\n\\n.card__button:hover {\\n  cursor: pointer;\\n  background: var(--background-hover);\\n}\\n\\n\\n\\n/* ОБРЕЗАЕТ ОТСЮДА */\\n\\n\\n:root {\\n  --color-text: #000000;\\n  --background-page: #F6F6F6;\\n\\n  --background-card: #FAFAFA;\\n  --background-card-hover: #FFFFFF;\\n\\n  --border-color: #F1CDB3;\\n  --background-hover: #F1CDB3;\\n  --color-disabled: #CDCDCD;\\n\\n  --max-width: 1280px;\\n}\\n\\nbody {\\n\\n  max-width: var(--max-width);\\n\\n  background: var(--background-page);\\n  margin: 0 auto;\\n  box-sizing: border-box;\\n}\\n\\n.round__button {\\n  width: 40px;\\n  height: 40px;\\n\\n  padding: 0%;\\n\\n  background: var(--background-card);\\n  border: 1px solid var(--border-color);\\n  border-radius: 50%;\\n}\\n\\n.round__button:not(.not-clickable):not(:disabled):hover {\\n  cursor: pointer;\\n  background: var(--background-hover);\\n}\\n\\n.round__button:disabled {\\n  cursor: default;\\n\\n  color: var(--color-disabled);\\n  border-color: var(--color-dark-s);\\n\\n  background: var(--background-card);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://shelter/./slider.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://shelter/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://shelter/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://shelter/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./pages/main/src/sass/style.css */ \"./pages/main/src/sass/style.css?87bb\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./pages/main/src/sass/swiper-bundle.min.css */ \"./pages/main/src/sass/swiper-bundle.min.css\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./pages/main/src/img/logo.svg */ \"./pages/main/src/img/logo.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./pages/main/src/img/start/start-screen-puppy.svg */ \"./pages/main/src/img/start/start-screen-puppy.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./pages/main/src/img/about/about-pets.svg */ \"./pages/main/src/img/about/about-pets.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./pages/main/src/img/donation/donation-dog.svg */ \"./pages/main/src/img/donation/donation-dog.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./pages/main/src/img/footer/footer-puppy.svg */ \"./pages/main/src/img/footer/footer-puppy.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./index.js */ \"./index.js?3320\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./app-slider.js */ \"./app-slider.js\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <title>Cozy House</title>\\r\\n    <link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\r\\n    <link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\">\\r\\n</head>\\r\\n<body> \\r\\n    <header class=\\\"header\\\">\\r\\n        <div class=\\\"wrapper header__wrapper\\\">\\r\\n            <div class=\\\"header__logo-line\\\">\\r\\n                <span class=\\\"hamburger\\\"><span class=\\\"hamburger__line\\\"></span></span>\\r\\n                <a href=\\\"#\\\" class=\\\"logo\\\">\\r\\n                    <object type=\\\"image/svg+xml\\\" data=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" class=\\\"logo-object\\\">\\r\\n                        Your browser does not support SVG\\r\\n                     </object>\\r\\n                </a>\\r\\n            </div>\\r\\n            <nav class=\\\"header__navigation\\\">\\r\\n                <ul class=\\\"navigation\\\">\\r\\n                    <li class=\\\"navigation__link\\\">About the shelter</li>\\r\\n                    <li class=\\\"navigation__link\\\">Our pets</li>\\r\\n                    <li class=\\\"navigation__link\\\">Help the shelter</li>\\r\\n                    <li class=\\\"navigation__link\\\">Contacts</li> \\r\\n                </ul>\\r\\n            </nav> \\r\\n        </div>\\r\\n    </header>\\r\\n\\r\\n    <section class=\\\"start\\\">\\r\\n        <div class=\\\"wrapper start__wrapper\\\"> \\r\\n            <div class=\\\"start__content\\\">\\r\\n                <h1 class=\\\"start__title\\\">Not only people <br> need a house</h1>\\r\\n                <p class=\\\"start__text\\\">We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!</p>\\r\\n                <div class=\\\"start__button\\\">\\r\\n                    <button class=\\\"button button_colored\\\">Make a friend</button>\\r\\n                </div>\\r\\n            </div>\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" class=\\\"promo__image\\\" alt=\\\"Puppy\\\">        \\r\\n        </div>\\r\\n    </section>\\r\\n\\r\\n    <section class=\\\"about\\\">\\r\\n        <div class=\\\"wrapper about__wrapper\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" class=\\\"about__image\\\" alt=\\\"Puppy\\\">\\r\\n            <div class=\\\"about__content\\\">\\r\\n                <h2 class=\\\"about__title\\\">About the shelter <br> “Cozy House”</h2>\\r\\n                <p class=\\\"about__text\\\">Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. The others will continue to live with us and will be waiting for a lucky chance to become dearly loved.</p>\\r\\n                <p class=\\\"about__text\\\">We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels. About 12% of the animals are taken by the shelter staff. Taking care of the animals, they become attached to the pets and would hardly ever leave them alone.</p>\\r\\n            </div>\\r\\n        </div>\\r\\n    </section>\\r\\n\\r\\n    <section class=\\\"pets\\\">\\r\\n        <div class=\\\"wrapper pets__wrapper\\\">\\r\\n            <h2 class=\\\"pets__title\\\">Our friends who are looking for a house</h2>       \\r\\n         \\r\\n    </section>\\r\\n\\r\\n\\r\\n    <section class=\\\"donation\\\">\\r\\n        <div class=\\\"wrapper donation__wrapper\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" class=\\\"donation__image\\\" alt=\\\"Puppy\\\">\\r\\n            <div class=\\\"about__content\\\">\\r\\n                <h2 class=\\\"donation__title\\\">You can also <br> make a donation</h2>\\r\\n                <p class=\\\"donation__text\\\">Name of the bank / Type of bank account</p>\\r\\n                <div>\\r\\n                    <form action=\\\"\\\" method=\\\"post\\\">\\r\\n                        <input class=\\\"donation__form\\\" type=\\\"text\\\" name=\\\"name\\\" placeholder=\\\"  8380 2880 8028 8791 7435\\\">\\r\\n                    </form>\\r\\n                </div>\\r\\n                <p class=\\\"donation__legal-text\\\">Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>\\r\\n            </div>\\r\\n        </div>         \\r\\n    </section>\\r\\n\\r\\n    <footer class=\\\"footer\\\">        \\r\\n        <div class=\\\"wrapper footer__wrapper\\\"> \\r\\n            <div class=\\\"layout-3-column pet-container\\\">\\r\\n                <div class=\\\"footer-navigation__column\\\">\\r\\n                    <h4 class=\\\"footer-navigation__title\\\">For questions and suggestions</h4>\\r\\n                    <p class=\\\"footer-navigation__links\\\">\\r\\n                        <span class=\\\"icon icon_email\\\"></span>\\r\\n                        <a class=\\\"footer-navigation__text\\\" href=\\\"mailto:email@shelter.com\\\">email@shelter.com</a> \\r\\n                    </p>\\r\\n                    <p class=\\\"footer-navigation__links\\\"> \\r\\n                        <span class=\\\"icon icon_phone\\\"></span>\\r\\n                        <a class=\\\"footer-navigation__text\\\" href=\\\"tel:+375111111111\\\">+13 674 567 75 54</a>\\r\\n                    </p>\\r\\n                </div>\\r\\n                <div class=\\\"footer-navigation__column\\\">\\r\\n                    <h4 class=\\\"footer-navigation__title\\\">We are waiting for your visit</h4>\\r\\n                    <p class=\\\"footer-navigation__links\\\">\\r\\n                        <span class=\\\"icon icon_marker\\\"></span>\\r\\n                        <a class=\\\"footer-navigation__text\\\">1 Central Street, Boston</a> \\r\\n                    </p>\\r\\n                    <p class=\\\"footer-navigation__links\\\"> \\r\\n                        <span class=\\\"icon icon_marker\\\"></span>\\r\\n                        <a class=\\\"footer-navigation__text\\\">18 South Park, London </a>\\r\\n                    </p>\\r\\n                </div>\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" class=\\\"footer__image\\\" alt=\\\"Puppy\\\">           \\r\\n            </div>\\r\\n        </div>\\r\\n    </footer>\\r\\n</body>\\r\\n \\r\\n<!-- JavaScript -->\\r\\n<\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\"><\" + \"/script>\\r\\n<\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\"><\" + \"/script> \\r\\n\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://shelter/./index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://shelter/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./pages/main/src/sass/style.css?a2a8":
/*!***************************************!*\
  !*** ./pages/main/src/sass/style.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./pages/main/src/sass/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://shelter/./pages/main/src/sass/style.css?");

/***/ }),

/***/ "./slider.css":
/*!********************!*\
  !*** ./slider.css ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_slider_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./slider.css */ \"./node_modules/css-loader/dist/cjs.js!./slider.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_slider_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_slider_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_slider_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_slider_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://shelter/./slider.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://shelter/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://shelter/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://shelter/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://shelter/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://shelter/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://shelter/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./pet.js":
/*!****************!*\
  !*** ./pet.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validatePet\": () => (/* binding */ validatePet)\n/* harmony export */ });\nfunction validatePet(pet) {\r\n    Object.keys(pet).forEach((key) => {\r\n        if ((typeof (pet[key]) === 'string' && pet[key] === '') && Array.isArray(pet[key]) === false) { \r\n            throw TypeError(`Pet error. Field ${key} is invalid.`); \r\n        }\r\n    });\r\n    \r\n    return true;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://shelter/./pet.js?");

/***/ }),

/***/ "./pets.js":
/*!*****************!*\
  !*** ./pets.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"petsJSON\": () => (/* binding */ petsJSON)\n/* harmony export */ });\nconst petsJSON = [\n    {\n        name: 'Jennifer',\n        img: './assets/pets-jennifer.webp',\n        type: 'Dog',\n        breed: 'Labrador',\n        description:\n            \"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.\",\n        age: '2 months',\n        inoculations: ['none'],\n        diseases: ['none'],\n        parasites: ['none'],\n    },\n    {\n        name: 'Sophia',\n        img: './assets/pets-sophia.webp',\n        type: 'Dog',\n        breed: 'Shih tzu',\n        description:\n            \"Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.\",\n        age: '1 month',\n        inoculations: ['parvovirus'],\n        diseases: ['none'],\n        parasites: ['none'],\n    },\n    {\n        name: 'Woody',\n        img: './assets/pets-woody.webp',\n        type: 'Dog',\n        breed: 'Golden Retriever',\n        description:\n            'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',\n        age: '3 years 6 months',\n        inoculations: ['adenovirus', 'distemper'],\n        diseases: ['right back leg mobility reduced'],\n        parasites: ['none'],\n    },\n    {\n        name: 'Scarlett',\n        img: './assets/pets-scarlet.webp',\n        type: 'Dog',\n        breed: 'Jack Russell Terrier',\n        description:\n            'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',\n        age: '3 months',\n        inoculations: ['parainfluenza'],\n        diseases: ['none'],\n        parasites: ['none'],\n    },\n    {\n        name: 'Katrine',\n        img: './assets/pets-katrine.webp',\n        type: 'Cat',\n        breed: 'British Shorthair',\n        description:\n            'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',\n        age: '6 months',\n        inoculations: ['panleukopenia'],\n        diseases: ['none'],\n        parasites: ['none'],\n    },\n    {\n        name: 'Timmy',\n        img: './assets/pets-timmy.webp',\n        type: 'Cat',\n        breed: 'British Shorthair',\n        description:\n            'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',\n        age: '2 years 3 months',\n        inoculations: ['calicivirus', 'viral rhinotracheitis'],\n        diseases: ['kidney stones'],\n        parasites: ['none'],\n    },\n    {\n        name: 'Freddie',\n        img: './assets/pets-freddie.webp',\n        type: 'Cat',\n        breed: 'British Shorthair',\n        description:\n            'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',\n        age: '2 months',\n        inoculations: ['rabies'],\n        diseases: ['none'],\n        parasites: ['none'],\n    },\n    {\n        name: 'Charly',\n        img: './assets/pets-charly.webp',\n        type: 'Dog',\n        breed: 'Jack Russell Terrier',\n        description:\n            'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',\n        age: '8 years',\n        inoculations: ['bordetella bronchiseptica', 'leptospirosis'],\n        diseases: ['deafness', 'blindness'],\n        parasites: ['lice', 'fleas'],\n    },\n];\n\n\n//# sourceURL=webpack://shelter/./pets.js?");

/***/ }),

/***/ "./app-slider.js":
/*!***********************!*\
  !*** ./app-slider.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9f5b46d8b80d877563c8.js\";\n\n//# sourceURL=webpack://shelter/./app-slider.js?");

/***/ }),

/***/ "./index.js?3320":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0fb6873277d258dfb5c4.js\";\n\n//# sourceURL=webpack://shelter/./index.js?");

/***/ }),

/***/ "./pages/main/src/sass/style.css?87bb":
/*!***************************************!*\
  !*** ./pages/main/src/sass/style.css ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a0d4e71729d8f45732b1.css\";\n\n//# sourceURL=webpack://shelter/./pages/main/src/sass/style.css?");

/***/ }),

/***/ "./pages/main/src/sass/swiper-bundle.min.css":
/*!***************************************************!*\
  !*** ./pages/main/src/sass/swiper-bundle.min.css ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2993cc94a9ae607c5c2f.css\";\n\n//# sourceURL=webpack://shelter/./pages/main/src/sass/swiper-bundle.min.css?");

/***/ }),

/***/ "./pages/main/src/fonts/Georgia.eot":
/*!******************************************!*\
  !*** ./pages/main/src/fonts/Georgia.eot ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"03ef6ebbb48b069a0a4f.eot\";\n\n//# sourceURL=webpack://shelter/./pages/main/src/fonts/Georgia.eot?");

/***/ }),

/***/ "./pages/main/src/fonts/Georgia.ttf":
/*!******************************************!*\
  !*** ./pages/main/src/fonts/Georgia.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"10ddf155946936f2cb7d.ttf\";\n\n//# sourceURL=webpack://shelter/./pages/main/src/fonts/Georgia.ttf?");

/***/ }),

/***/ "./pages/main/src/fonts/Georgia.woff":
/*!*******************************************!*\
  !*** ./pages/main/src/fonts/Georgia.woff ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"42f5aead7c805735fc82.woff\";\n\n//# sourceURL=webpack://shelter/./pages/main/src/fonts/Georgia.woff?");

/***/ }),

/***/ "./pages/main/src/img/about/about-pets.svg":
/*!*************************************************!*\
  !*** ./pages/main/src/img/about/about-pets.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cc0bad6229492e3a7836.svg\";\n\n//# sourceURL=webpack://shelter/./pages/main/src/img/about/about-pets.svg?");

/***/ }),

/***/ "./pages/main/src/img/donation/donation-dog.svg":
/*!******************************************************!*\
  !*** ./pages/main/src/img/donation/donation-dog.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"45810d4855ffa98c816e.svg\";\n\n//# sourceURL=webpack://shelter/./pages/main/src/img/donation/donation-dog.svg?");

/***/ }),

/***/ "./pages/main/src/img/footer/footer-puppy.svg":
/*!****************************************************!*\
  !*** ./pages/main/src/img/footer/footer-puppy.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d3631e809186362f7a9c.svg\";\n\n//# sourceURL=webpack://shelter/./pages/main/src/img/footer/footer-puppy.svg?");

/***/ }),

/***/ "./pages/main/src/img/icons/credit-card.svg":
/*!**************************************************!*\
  !*** ./pages/main/src/img/icons/credit-card.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b0a55b5f9acb325550a0.svg\";\n\n//# sourceURL=webpack://shelter/./pages/main/src/img/icons/credit-card.svg?");

/***/ }),

/***/ "./pages/main/src/img/icons/icon-bowls-and-cups.svg":
/*!**********************************************************!*\
  !*** ./pages/main/src/img/icons/icon-bowls-and-cups.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5a02ed329baa28293625.svg\";\n\n//# sourceURL=webpack://shelter/./pages/main/src/img/icons/icon-bowls-and-cups.svg?");

/***/ }),

/***/ "./pages/main/src/img/icons/icon-collars-leashes.svg":
/*!***********************************************************!*\
  !*** ./pages/main/src/img/icons/icon-collars-leashes.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0e97acbf6aca170055e2.svg\";\n\n//# sourceURL=webpack://shelter/./pages/main/src/img/icons/icon-collars-leashes.svg?");

/***/ }),

/***/ "./pages/main/src/img/icons/icon-email.svg":
/*!*************************************************!*\
  !*** ./pages/main/src/img/icons/icon-email.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3f2265dabc9181e28b99.svg\";\n\n//# sourceURL=webpack://shelter/./pages/main/src/img/icons/icon-email.svg?");

/***/ }),

/***/ "./pages/main/src/img/icons/icon-marker.svg":
/*!**************************************************!*\
  !*** ./pages/main/src/img/icons/icon-marker.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"123c22bef80634c1c988.svg\";\n\n//# sourceURL=webpack://shelter/./pages/main/src/img/icons/icon-marker.svg?");

/***/ }),

/***/ "./pages/main/src/img/icons/icon-medicines.svg":
/*!*****************************************************!*\
  !*** ./pages/main/src/img/icons/icon-medicines.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"42a894b85d842dc1e2b5.svg\";\n\n//# sourceURL=webpack://shelter/./pages/main/src/img/icons/icon-medicines.svg?");

/***/ }),

/***/ "./pages/main/src/img/icons/icon-pet-food.svg":
/*!****************************************************!*\
  !*** ./pages/main/src/img/icons/icon-pet-food.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5bb78a2f1af7d3fc0e35.svg\";\n\n//# sourceURL=webpack://shelter/./pages/main/src/img/icons/icon-pet-food.svg?");

/***/ }),

/***/ "./pages/main/src/img/icons/icon-phone.svg":
/*!*************************************************!*\
  !*** ./pages/main/src/img/icons/icon-phone.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b79d1c5ce3c4f2ded1ee.svg\";\n\n//# sourceURL=webpack://shelter/./pages/main/src/img/icons/icon-phone.svg?");

/***/ }),

/***/ "./pages/main/src/img/icons/icon-shampoos.svg":
/*!****************************************************!*\
  !*** ./pages/main/src/img/icons/icon-shampoos.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9e8589d176f27a8865f7.svg\";\n\n//# sourceURL=webpack://shelter/./pages/main/src/img/icons/icon-shampoos.svg?");

/***/ }),

/***/ "./pages/main/src/img/icons/icon-sleeping-area.svg":
/*!*********************************************************!*\
  !*** ./pages/main/src/img/icons/icon-sleeping-area.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"34a8245e988a551acd3b.svg\";\n\n//# sourceURL=webpack://shelter/./pages/main/src/img/icons/icon-sleeping-area.svg?");

/***/ }),

/***/ "./pages/main/src/img/icons/icon-toys.svg":
/*!************************************************!*\
  !*** ./pages/main/src/img/icons/icon-toys.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"de0da61f230c46feb2f6.svg\";\n\n//# sourceURL=webpack://shelter/./pages/main/src/img/icons/icon-toys.svg?");

/***/ }),

/***/ "./pages/main/src/img/icons/icon-transportation.svg":
/*!**********************************************************!*\
  !*** ./pages/main/src/img/icons/icon-transportation.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"804c2a69d91073746905.svg\";\n\n//# sourceURL=webpack://shelter/./pages/main/src/img/icons/icon-transportation.svg?");

/***/ }),

/***/ "./pages/main/src/img/icons/icon-vitamins.svg":
/*!****************************************************!*\
  !*** ./pages/main/src/img/icons/icon-vitamins.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"933ddf6071875aa39045.svg\";\n\n//# sourceURL=webpack://shelter/./pages/main/src/img/icons/icon-vitamins.svg?");

/***/ }),

/***/ "./pages/main/src/img/logo.svg":
/*!*************************************!*\
  !*** ./pages/main/src/img/logo.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"65404fc4c0cc34e01c3d.svg\";\n\n//# sourceURL=webpack://shelter/./pages/main/src/img/logo.svg?");

/***/ }),

/***/ "./pages/main/src/img/start/start-screen-background.png":
/*!**************************************************************!*\
  !*** ./pages/main/src/img/start/start-screen-background.png ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"473ac82e4152b446c867.png\";\n\n//# sourceURL=webpack://shelter/./pages/main/src/img/start/start-screen-background.png?");

/***/ }),

/***/ "./pages/main/src/img/start/start-screen-puppy.svg":
/*!*********************************************************!*\
  !*** ./pages/main/src/img/start/start-screen-puppy.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4a77eb56ae924255257c.svg\";\n\n//# sourceURL=webpack://shelter/./pages/main/src/img/start/start-screen-puppy.svg?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js?41f5");
/******/ 	
/******/ })()
;