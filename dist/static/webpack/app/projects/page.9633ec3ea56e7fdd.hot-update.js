"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/projects/page",{

/***/ "(app-pages-browser)/./src/app/projects/page.js":
/*!**********************************!*\
  !*** ./src/app/projects/page.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectRoladex; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-brands-svg-icons/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _projectsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projectsList */ \"(app-pages-browser)/./src/app/projectsList.js\");\n/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ProjectCard */ \"(app-pages-browser)/./src/components/ProjectCard/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction ProjectRoladex() {\n    _s();\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    console.log(\"currentIndex=\", currentIndex);\n    const prevProject = ()=>{\n        setCurrentIndex((prevIndex)=>prevIndex === 0 ? _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList.length - 1 : prevIndex - 1);\n    };\n    const nextProject = ()=>{\n        setCurrentIndex((prevIndex)=>{\n            console.log(\"prevIndex=\", prevIndex);\n            return prevIndex === _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList.length - 1 ? 0 : prevIndex + 1;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center p-24 font-playfair text-navy\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navigation flex justify-center items-center space-x-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        className: \"text-navy\",\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faHouse,\n                            size: \"2x\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hannahcourtney/Desktop/coding-projects/portfolio-nextjs/src/app/projects/page.js\",\n                            lineNumber: 35,\n                            columnNumber: 56\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hannahcourtney/Desktop/coding-projects/portfolio-nextjs/src/app/projects/page.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"https://www.linkedin.com/in/hcour/\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faLinkedinIn,\n                                size: \"2x\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hannahcourtney/Desktop/coding-projects/portfolio-nextjs/src/app/projects/page.js\",\n                                lineNumber: 36,\n                                columnNumber: 107\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hannahcourtney/Desktop/coding-projects/portfolio-nextjs/src/app/projects/page.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"https://github.com/hcour97\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faGithub,\n                                size: \"2x\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hannahcourtney/Desktop/coding-projects/portfolio-nextjs/src/app/projects/page.js\",\n                                lineNumber: 37,\n                                columnNumber: 99\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hannahcourtney/Desktop/coding-projects/portfolio-nextjs/src/app/projects/page.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"mailto:hcour97@gmail.com\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faEnvelope,\n                            size: \"2x\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hannahcourtney/Desktop/coding-projects/portfolio-nextjs/src/app/projects/page.js\",\n                            lineNumber: 38,\n                            columnNumber: 60\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hannahcourtney/Desktop/coding-projects/portfolio-nextjs/src/app/projects/page.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hannahcourtney/Desktop/coding-projects/portfolio-nextjs/src/app/projects/page.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/hannahcourtney/Desktop/coding-projects/portfolio-nextjs/src/app/projects/page.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-5xl px-5\",\n                        onClick: prevProject,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faArrowLeft,\n                            className: \"text-navy\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hannahcourtney/Desktop/coding-projects/portfolio-nextjs/src/app/projects/page.js\",\n                            lineNumber: 46,\n                            columnNumber: 69\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hannahcourtney/Desktop/coding-projects/portfolio-nextjs/src/app/projects/page.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"project-info-prev\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    id: _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList[(currentIndex - 1 + _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList.length) % _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList.length].id,\n                                    title: _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList[(currentIndex - 1 + _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList.length) % _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList.length].title,\n                                    languages: _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList[(currentIndex - 1 + _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList.length) % _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList.length].languages,\n                                    imgURL: _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList[(currentIndex - 1 + _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList.length) % _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList.length].imgURL,\n                                    description: _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList[(currentIndex - 1 + _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList.length) % _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList.length].description,\n                                    githubURL: _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList[(currentIndex - 1 + _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList.length) % _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList.length].githubURL\n                                }, void 0, false, {\n                                    fileName: \"/Users/hannahcourtney/Desktop/coding-projects/portfolio-nextjs/src/app/projects/page.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/hannahcourtney/Desktop/coding-projects/portfolio-nextjs/src/app/projects/page.js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"project-info-current\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    id: _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList[currentIndex].id,\n                                    title: _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList[currentIndex].title,\n                                    languages: _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList[currentIndex].languages,\n                                    imgURL: _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList[currentIndex].imgURL,\n                                    description: _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList[currentIndex].description,\n                                    githubURL: _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList[currentIndex].githubURL\n                                }, void 0, false, {\n                                    fileName: \"/Users/hannahcourtney/Desktop/coding-projects/portfolio-nextjs/src/app/projects/page.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/hannahcourtney/Desktop/coding-projects/portfolio-nextjs/src/app/projects/page.js\",\n                                lineNumber: 62,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"project-info-next \".concat(currentIndex === _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList.length - 1 ? \"peeking\" : \"\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    id: _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList[(currentIndex + 1) % _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList.length].id,\n                                    title: _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList[(currentIndex + 1) % _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList.length].title,\n                                    languages: _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList[(currentIndex + 1) % _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList.length].languages,\n                                    imgURL: _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList[(currentIndex + 1) % _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList.length].imgURL,\n                                    description: _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList[(currentIndex + 1) % _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList.length].description,\n                                    githubURL: _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList[(currentIndex + 1) % _projectsList__WEBPACK_IMPORTED_MODULE_4__.projectsList.length].githubURL\n                                }, void 0, false, {\n                                    fileName: \"/Users/hannahcourtney/Desktop/coding-projects/portfolio-nextjs/src/app/projects/page.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/hannahcourtney/Desktop/coding-projects/portfolio-nextjs/src/app/projects/page.js\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hannahcourtney/Desktop/coding-projects/portfolio-nextjs/src/app/projects/page.js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-5xl px-5\",\n                        onClick: nextProject,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faArrowRight,\n                            className: \"text-navy\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hannahcourtney/Desktop/coding-projects/portfolio-nextjs/src/app/projects/page.js\",\n                            lineNumber: 84,\n                            columnNumber: 70\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hannahcourtney/Desktop/coding-projects/portfolio-nextjs/src/app/projects/page.js\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hannahcourtney/Desktop/coding-projects/portfolio-nextjs/src/app/projects/page.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hannahcourtney/Desktop/coding-projects/portfolio-nextjs/src/app/projects/page.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_s(ProjectRoladex, \"tusBbsahUVevXfyh6oH5R6YDC9Q=\");\n_c = ProjectRoladex;\nvar _c;\n$RefreshReg$(_c, \"ProjectRoladex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvamVjdHMvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFaUU7QUFDcUQ7QUFDMUM7QUFFM0M7QUFDSjtBQUNrQjtBQUNJO0FBRXBDLFNBQVNZOztJQUV4QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHTiwrQ0FBUUEsQ0FBQztJQUVqRE8sUUFBUUMsR0FBRyxDQUFDLGlCQUFpQkg7SUFFN0IsTUFBTUksY0FBYztRQUNoQkgsZ0JBQWdCLENBQUNJLFlBQ2pCQSxjQUFjLElBQUlSLHVEQUFZQSxDQUFDUyxNQUFNLEdBQUcsSUFBSUQsWUFBWTtJQUU1RDtJQUVBLE1BQU1FLGNBQWM7UUFDaEJOLGdCQUFnQixDQUFDSTtZQUNiSCxRQUFRQyxHQUFHLENBQUMsY0FBY0U7WUFDMUIsT0FBT0EsY0FBY1IsdURBQVlBLENBQUNTLE1BQU0sR0FBRyxJQUFJLElBQUlELFlBQVk7UUFDbkU7SUFDSjtJQUVJLHFCQUNJLDhEQUFDRztRQUFLQyxXQUFVOzswQkFFWiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNYLDhEQUFDYixpREFBSUE7d0JBQUNhLFdBQVU7d0JBQVlFLE1BQU07a0NBQUssNEVBQUN4QiwyRUFBZUE7NEJBQUN5QixNQUFPdEIsc0VBQU9BOzRCQUFFdUIsTUFBTTs7Ozs7Ozs7Ozs7a0NBQzlFLDhEQUFDakIsaURBQUlBO3dCQUFDZSxNQUFLO3dCQUFxQ0csUUFBTzt3QkFBU0MsS0FBSTs7MENBQXNCLDhEQUFDNUIsMkVBQWVBO2dDQUFDeUIsTUFBT25CLDRFQUFZQTtnQ0FBR29CLE1BQUs7Ozs7Ozs0QkFBTTs7Ozs7OztrQ0FDNUksOERBQUNqQixpREFBSUE7d0JBQUNlLE1BQUs7d0JBQTZCRyxRQUFPO3dCQUFTQyxLQUFJOzswQ0FBc0IsOERBQUM1QiwyRUFBZUE7Z0NBQUN5QixNQUFPbEIsd0VBQVFBO2dDQUFHbUIsTUFBSzs7Ozs7OzRCQUFNOzs7Ozs7O2tDQUNoSSw4REFB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Q0FBQyxDQUFDbUIsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSTNGLDhEQUFDUDt3QkFBT1QsV0FBVTt3QkFBZ0JVLFNBQVNaO2tDQUFjLDRFQUFDcEIsMkVBQWVBOzRCQUFDeUIsTUFBT3JCLDJFQUFZQTs0QkFBR2tCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUN0SDtHQWpId0JWO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcHJvamVjdHMvcGFnZS5qcz85YThjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFFeHRlcm5hbExpbmtBbHQsIGZhRW52ZWxvcGUsIGZhSG91c2UsIGZhQXJyb3dSaWdodCwgZmFBcnJvd0xlZnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgZmFMaW5rZWRpbkluLCBmYUdpdGh1YiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgcHJvamVjdHNMaXN0IH0gZnJvbSBcIi4uL3Byb2plY3RzTGlzdFwiO1xuaW1wb3J0IFByb2plY3RDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSb2xhZGV4KCkge1xuXG5jb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbmNvbnNvbGUubG9nKFwiY3VycmVudEluZGV4PVwiLCBjdXJyZW50SW5kZXgpXG5cbmNvbnN0IHByZXZQcm9qZWN0ID0gKCkgPT4ge1xuICAgIHNldEN1cnJlbnRJbmRleCgocHJldkluZGV4KSA9PiBcbiAgICBwcmV2SW5kZXggPT09IDAgPyBwcm9qZWN0c0xpc3QubGVuZ3RoIC0gMSA6IHByZXZJbmRleCAtIDFcbiAgICApOyAgICBcbn1cblxuY29uc3QgbmV4dFByb2plY3QgPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudEluZGV4KChwcmV2SW5kZXgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwcmV2SW5kZXg9XCIsIHByZXZJbmRleCk7XG4gICAgICAgIHJldHVybiBwcmV2SW5kZXggPT09IHByb2plY3RzTGlzdC5sZW5ndGggLSAxID8gMCA6IHByZXZJbmRleCArIDE7XG4gICAgfSlcbn1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwLTI0IGZvbnQtcGxheWZhaXIgdGV4dC1uYXZ5XCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzcGFjZS14LThcIj5cbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJ0ZXh0LW5hdnlcIiBocmVmPXtcIi9cIn0+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXsgZmFIb3VzZSB9c2l6ZSA9XCIyeFwiLz48L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9oY291ci9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXsgZmFMaW5rZWRpbkluIH0gc2l6ZT1cIjJ4XCIvPiA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9oY291cjk3XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPjxGb250QXdlc29tZUljb24gaWNvbj17IGZhR2l0aHViIH0gc2l6ZT1cIjJ4XCIvPiA8L0xpbms+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17YG1haWx0bzokeydoY291cjk3QGdtYWlsLmNvbSd9YH0gPjxGb250QXdlc29tZUljb24gaWNvbj17IGZhRW52ZWxvcGUgfXNpemUgPVwiMnhcIi8+PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8YnIgLz5cblxuXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtNXhsIHB4LTVcIiBvbkNsaWNrPXtwcmV2UHJvamVjdH0+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXsgZmFBcnJvd0xlZnQgfSBjbGFzc05hbWU9XCJ0ZXh0LW5hdnlcIi8+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuXG4gICAgey8qIERpc3BsYXkgdGhlIHByZXZpb3VzIHByb2plY3QgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1pbmZvLXByZXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZCBpZD17cHJvamVjdHNMaXN0WyhjdXJyZW50SW5kZXggLSAxICsgcHJvamVjdHNMaXN0Lmxlbmd0aCkgJSBwcm9qZWN0c0xpc3QubGVuZ3RoXS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9qZWN0c0xpc3RbKGN1cnJlbnRJbmRleCAtIDEgKyBwcm9qZWN0c0xpc3QubGVuZ3RoKSAlIHByb2plY3RzTGlzdC5sZW5ndGhdLnRpdGxlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlcz17cHJvamVjdHNMaXN0WyhjdXJyZW50SW5kZXggLSAxICsgcHJvamVjdHNMaXN0Lmxlbmd0aCkgJSBwcm9qZWN0c0xpc3QubGVuZ3RoXS5sYW5ndWFnZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdVUkw9e3Byb2plY3RzTGlzdFsoY3VycmVudEluZGV4IC0gMSArIHByb2plY3RzTGlzdC5sZW5ndGgpICUgcHJvamVjdHNMaXN0Lmxlbmd0aF0uaW1nVVJMfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb2plY3RzTGlzdFsoY3VycmVudEluZGV4IC0gMSArIHByb2plY3RzTGlzdC5sZW5ndGgpICUgcHJvamVjdHNMaXN0Lmxlbmd0aF0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaXRodWJVUkw9e3Byb2plY3RzTGlzdFsoY3VycmVudEluZGV4IC0gMSArIHByb2plY3RzTGlzdC5sZW5ndGgpICUgcHJvamVjdHNMaXN0Lmxlbmd0aF0uZ2l0aHViVVJMfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgIHsvKiBEaXNwbGF5IHRoZSBjdXJyZW50IHByb2plY3QgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1pbmZvLWN1cnJlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZCBpZD17cHJvamVjdHNMaXN0W2N1cnJlbnRJbmRleF0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Byb2plY3RzTGlzdFtjdXJyZW50SW5kZXhdLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlcz17cHJvamVjdHNMaXN0W2N1cnJlbnRJbmRleF0ubGFuZ3VhZ2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1VSTD17cHJvamVjdHNMaXN0W2N1cnJlbnRJbmRleF0uaW1nVVJMfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9qZWN0c0xpc3RbY3VycmVudEluZGV4XS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaXRodWJVUkw9e3Byb2plY3RzTGlzdFtjdXJyZW50SW5kZXhdLmdpdGh1YlVSTH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcblxuICAgIHsvKiBEaXNwbGF5IHRoZSBuZXh0IHByb2plY3QgLSAncGVla2luZycgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHJvamVjdC1pbmZvLW5leHQgJHtjdXJyZW50SW5kZXggPT09IHByb2plY3RzTGlzdC5sZW5ndGggLSAxID8gJ3BlZWtpbmcnIDogJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17cHJvamVjdHNMaXN0WyhjdXJyZW50SW5kZXggKyAxKSAlIHByb2plY3RzTGlzdC5sZW5ndGhdLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9qZWN0c0xpc3RbKGN1cnJlbnRJbmRleCArIDEpICUgcHJvamVjdHNMaXN0Lmxlbmd0aF0udGl0bGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlcz17cHJvamVjdHNMaXN0WyhjdXJyZW50SW5kZXggKyAxKSAlIHByb2plY3RzTGlzdC5sZW5ndGhdLmxhbmd1YWdlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdVUkw9e3Byb2plY3RzTGlzdFsoY3VycmVudEluZGV4ICsgMSkgJSBwcm9qZWN0c0xpc3QubGVuZ3RoXS5pbWdVUkx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb2plY3RzTGlzdFsoY3VycmVudEluZGV4ICsgMSkgJSBwcm9qZWN0c0xpc3QubGVuZ3RoXS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaXRodWJVUkw9e3Byb2plY3RzTGlzdFsoY3VycmVudEluZGV4ICsgMSkgJSBwcm9qZWN0c0xpc3QubGVuZ3RoXS5naXRodWJVUkx9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC01eGwgcHgtNVwiIG9uQ2xpY2s9e25leHRQcm9qZWN0fSA+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXsgZmFBcnJvd1JpZ2h0IH0gY2xhc3NOYW1lPVwidGV4dC1uYXZ5XCIvPjwvYnV0dG9uPlxuPC9kaXY+XG5cblxuXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtNXhsIHB4LTVcIiBvbkNsaWNrPXtwcmV2UHJvamVjdH0+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXsgZmFBcnJvd0xlZnQgfSBjbGFzc05hbWU9XCJ0ZXh0LW5hdnlcIi8+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG93ZXItYm9yZGVyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGJnLWdyZWVuLTUwMCBib3JkZXIgcm91bmRlZC1sZyBwLTEwIHB4LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtMnhsXCI+e3Byb2plY3RzTGlzdFtjdXJyZW50SW5kZXhdLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57cHJvamVjdHNMaXN0W2N1cnJlbnRJbmRleF0ubGFuZ3VhZ2VzfTwvcD48YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy0zMiBoLWF1dG9cIiBzcmM9e3Byb2plY3RzTGlzdFtjdXJyZW50SW5kZXhdLmltZ1VSTH0gYWx0PXtwcm9qZWN0c0xpc3RbY3VycmVudEluZGV4XS50aXRsZX0gLz48YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHNcIj57cHJvamVjdHNMaXN0W2N1cnJlbnRJbmRleF0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvamVjdHNMaXN0W2N1cnJlbnRJbmRleF0uZ2l0aHViVVJMfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+VmlldyBvbiBHaXRodWIgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUV4dGVybmFsTGlua0FsdH0gLz48L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC01eGwgcHgtNVwiIG9uQ2xpY2s9e25leHRQcm9qZWN0fSA+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXsgZmFBcnJvd1JpZ2h0IH0gY2xhc3NOYW1lPVwidGV4dC1uYXZ5XCIvPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj4gKi99XG5cblxuXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC01eGwgcHgtNVwiIG9uQ2xpY2s9e3ByZXZQcm9qZWN0fT48Rm9udEF3ZXNvbWVJY29uIGljb249eyBmYUFycm93TGVmdCB9IGNsYXNzTmFtZT1cInRleHQtbmF2eVwiLz48L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHNcIj5cbiAgICAgICAgICAgICAgICB7cHJvamVjdHNMaXN0Lm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdENhcmQgaWQ9e3Byb2plY3QuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9qZWN0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZXM9e3Byb2plY3QubGFuZ3VhZ2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdVUkw9e3Byb2plY3QuaW1nVVJMfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2l0aHViVVJMPXtwcm9qZWN0LmdpdGh1YlVSTH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtNXhsIHB4LTVcIiBvbkNsaWNrPXtuZXh0UHJvamVjdH0gPjxGb250QXdlc29tZUljb24gaWNvbj17IGZhQXJyb3dSaWdodCB9IGNsYXNzTmFtZT1cInRleHQtbmF2eVwiLz48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+ICovfVxuXG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgXG4gICAgICAgIFxuICAgIClcbn0iXSwibmFtZXMiOlsiRm9udEF3ZXNvbWVJY29uIiwiZmFFeHRlcm5hbExpbmtBbHQiLCJmYUVudmVsb3BlIiwiZmFIb3VzZSIsImZhQXJyb3dSaWdodCIsImZhQXJyb3dMZWZ0IiwiZmFMaW5rZWRpbkluIiwiZmFHaXRodWIiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJwcm9qZWN0c0xpc3QiLCJQcm9qZWN0Q2FyZCIsIlByb2plY3RSb2xhZGV4IiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwiY29uc29sZSIsImxvZyIsInByZXZQcm9qZWN0IiwicHJldkluZGV4IiwibGVuZ3RoIiwibmV4dFByb2plY3QiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaHJlZiIsImljb24iLCJzaXplIiwidGFyZ2V0IiwicmVsIiwiYSIsImJyIiwiYnV0dG9uIiwib25DbGljayIsImlkIiwidGl0bGUiLCJsYW5ndWFnZXMiLCJpbWdVUkwiLCJkZXNjcmlwdGlvbiIsImdpdGh1YlVSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/projects/page.js\n"));

/***/ })

});