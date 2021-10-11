"use strict";
exports.id = 691;
exports.ids = [691];
exports.modules = {

/***/ 3691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FooterCallToAction)
/* harmony export */ });
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6049);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4025);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function FooterCallToAction() {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const cancelButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Root, {
      show: open,
      as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
        as: "div",
        className: "fixed z-10 inset-0 overflow-y-auto",
        initialFocus: cancelButtonRef,
        onClose: setOpen,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Overlay, {
              className: "fixed inset-0 bg-black bg-opacity-60 transition-opacity"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
            className: "hidden sm:inline-block sm:align-middle sm:h-screen",
            "aria-hidden": "true",
            children: "\u200B"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            enterTo: "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                className: "bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "space-y-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "flex justify-between",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                      className: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__/* .HeartIcon */ .h_8, {
                        className: "w-6 h-6 text-green-500"
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
                      type: "button",
                      className: "hidden sm:block bg-gray-700 hover:bg-gray-600 transition duration-200 ease-in-out rounded-lg p-2",
                      onClick: () => setOpen(false),
                      ref: cancelButtonRef,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__/* .XIcon */ .b0D, {
                        className: "h-5 w-5 text-gray-300"
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "mt-3 text-center sm:mt-0 sm:text-left",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Title, {
                      as: "h3",
                      className: "text-lg leading-6 font-medium text-green-200",
                      children: "Let's get you up and running."
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                      className: "mt-2",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
                        className: "text-sm text-gray-400",
                        children: ["Launching your server with ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                          href: "https://zap-hosting.com/txadmin2",
                          className: "text-green-300 font-bold",
                          children: "Zap Hosting"
                        }), " is the fastest and easiest route to get started with txAdmin, no skill required to get your pre-configured txAdmin-enabled server up and running in moments."]
                      })
                    })]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  href: "https://zap-hosting.com/txadmin2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
                    type: "button",
                    className: "w-full group inline-flex justify-center rounded-lg shadow-sm px-4 py-2 transition duration-200 ease-in-out bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-0 sm:ml-3 sm:w-auto sm:text-sm",
                    children: ["Get started with Zap Hosting", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__/* .ArrowRightIcon */ .LZ3, {
                      className: "group-hover:animate-bounce-x h-6 h-6 sm:h-5 sm:h-5 ml-2"
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  href: "https://docs.fivem.net/docs/server-manual/setting-up-a-server/",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
                    type: "button",
                    className: "mt-3 w-full inline-flex justify-center rounded-lg shadow-sm px-4 py-2 transition duration-200 ease-in-out bg-gray-700 text-base font-medium text-gray-200 hover:bg-gray-800 focus:outline-none focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
                    children: "Manual Setup"
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
                  type: "button",
                  className: "sm:hidden mt-3 w-full inline-flex justify-center rounded-lg shadow-sm px-4 py-2 transition duration-200 ease-in-out bg-gray-700 text-base font-medium text-gray-200 hover:bg-gray-800 focus:outline-none focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
                  onClick: () => setOpen(false),
                  ref: cancelButtonRef,
                  children: "Go Back"
                })]
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "bg-cta shadow-md",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "flex flex-col space-y-7 lg:space-y-0 lg:flex-row p-12 justify-evenly items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "space-y-5 text-center lg:text-left lg:space-y-0",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h2", {
            className: "text-white font-bold text-2xl",
            children: "Like what you see?"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
            className: "text-gray-400 text-base xl:text-lg whitespace-normal",
            children: "Adding txAdmin to your server is completely free and super easy."
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
            onClick: () => setOpen(true),
            className: "group flex bg-green-600 hover:bg-green-500 rounded-lg text-white font-bold text-base py-3 px-4 transition duration-200 ease-in-out",
            children: ["Get Started", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_0__/* .ArrowRightIcon */ .LZ3, {
              className: "group-hover:animate-bounce-x h-6 h-6 ml-2"
            })]
          })
        })]
      })
    })]
  });
}
;

/***/ })

};
;