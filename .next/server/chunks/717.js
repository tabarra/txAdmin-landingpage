exports.id = 717;
exports.ids = [717];
exports.modules = {

/***/ 5774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6049);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4025);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1577);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









function Home() {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: menuOpen,
    1: setmenuOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const cancelButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Root, {
      show: open,
      as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog, {
        as: "div",
        className: "fixed z-10 inset-0 overflow-y-auto",
        initialFocus: cancelButtonRef,
        onClose: setOpen,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {
            as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog.Overlay, {
              className: "fixed inset-0 bg-black bg-opacity-60 transition-opacity"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
            className: "hidden sm:inline-block sm:align-middle sm:h-screen",
            "aria-hidden": "true",
            children: "\u200B"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {
            as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            enterTo: "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                className: "bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "space-y-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "flex justify-between",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                      className: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__/* .HeartIcon */ .h_8, {
                        className: "w-6 h-6 text-green-500"
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
                      type: "button",
                      className: "hidden sm:block bg-gray-700 hover:bg-gray-600 transition duration-200 ease-in-out rounded-lg p-2",
                      onClick: () => setOpen(false),
                      ref: cancelButtonRef,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__/* .XIcon */ .b0D, {
                        className: "h-5 w-5 text-gray-300"
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "mt-3 text-center sm:mt-0 sm:text-left",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog.Title, {
                      as: "h3",
                      className: "text-lg leading-6 font-medium text-green-200",
                      children: "Let's get you up and running."
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                      className: "mt-2",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
                        className: "text-sm text-gray-400",
                        children: ["Launching your server with ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                          href: "https://zap-hosting.com/txadmin2",
                          className: "text-green-300 font-bold",
                          children: "Zap Hosting"
                        }), " is the fastest and easiest route to get started with txAdmin, no skill required to get your pre-configured txAdmin-enabled server up and running in moments."]
                      })
                    })]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                  href: "https://zap-hosting.com/txadmin2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
                    type: "button",
                    className: "w-full group inline-flex justify-center rounded-lg shadow-sm px-4 py-2 transition duration-200 ease-in-out bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-0 sm:ml-3 sm:w-auto sm:text-sm",
                    children: ["Get started with Zap Hosting", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__/* .ArrowRightIcon */ .LZ3, {
                      className: "group-hover:animate-bounce-x h-6 h-6 sm:h-5 sm:h-5 ml-2"
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                  href: "https://docs.fivem.net/docs/server-manual/setting-up-a-server/",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
                    type: "button",
                    className: "mt-3 w-full inline-flex justify-center rounded-lg shadow-sm px-4 py-2 transition duration-200 ease-in-out bg-gray-700 text-base font-medium text-gray-200 hover:bg-gray-800 focus:outline-none focus:ring-0 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
                    children: "Manual Setup"
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
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
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Root, {
      show: menuOpen,
      as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog, {
        as: "div",
        className: "fixed inset-0 overflow-hidden",
        onClose: setmenuOpen,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "absolute inset-0 overflow-hidden",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {
            as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
            enter: "ease-in-out duration-500",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in-out duration-500",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog.Overlay, {
              className: "absolute inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: "fixed inset-y-0 right-0 pl-10 max-w-xs sm:max-w-sm flex",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {
              as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
              enter: "transform transition ease-in-out duration-500 sm:duration-700",
              enterFrom: "translate-x-full",
              enterTo: "translate-x-0",
              leave: "transform transition ease-in-out duration-500 sm:duration-700",
              leaveFrom: "translate-x-0",
              leaveTo: "translate-x-full",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "relative w-screen max-w-md",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {
                  as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
                  enter: "ease-in-out duration-500",
                  enterFrom: "opacity-0",
                  enterTo: "opacity-100",
                  leave: "ease-in-out duration-500",
                  leaveFrom: "opacity-100",
                  leaveTo: "opacity-0",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                    className: "absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
                      type: "button",
                      className: "rounded-md text-gray-300 duration-200 ease-in-out hover:text-white focus:outline-none focus:ring-0",
                      onClick: () => setmenuOpen(false),
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                        className: "sr-only",
                        children: "Close panel"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__/* .XIcon */ .b0D, {
                        className: "h-6 w-6",
                        "aria-hidden": "true"
                      })]
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "h-full flex flex-col py-6 bg-gray-900 shadow-xl overflow-y-scroll",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                    className: "px-4 sm:px-6",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog.Title, {
                      className: "text-lg font-medium text-gray-200",
                      children: "Navigation"
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                    className: "mt-6 relative flex-1 px-4 sm:px-6",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                      className: "flex flex-col space-y-2",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                        className: "text-gray-300 font-bold bg-gray-800 hover:bg-gray-700 transition duration-200 ease-in-out hover:text-white px-3 py-2 rounded-md text-sm font-medium",
                        href: "https://github.com/tabarra/txAdmin/blob/master/README.md",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Documentation"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                        className: "text-gray-300 font-bold bg-gray-800 hover:bg-gray-700 transition duration-200 ease-in-out hover:text-white px-3 py-2 rounded-md text-sm font-medium",
                        href: "https://discord.gg/yWxjt9zPWR",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Discord"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                        className: "text-gray-300 font-bold bg-gray-800 hover:bg-gray-700 transition duration-200 ease-in-out hover:text-white px-3 py-2 rounded-md text-sm font-medium",
                        href: "https://github.com/tabarra/txAdmin",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "GitHub"
                      })]
                    })
                  })]
                })]
              })
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("title", {
        children: "txAdmin - The best FiveM server management solution"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("link", {
        rel: "icon",
        href: "./favicon.png"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("meta", {
        name: "theme-color",
        content: "#0EB880"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("meta", {
        name: "description",
        content: "txAdmin is a completely free to use, full-featured web panel to Manage & Monitor your FiveM Server remotely, in use by over TEN thousand servers worldwide at any given time."
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("meta", {
        name: "keywords",
        content: "txadmin, fivem, fivem server, login, discord, manage fivem, fivem monitoring, fivem server panel, fivem web panel, fivem recipes"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("meta", {
        property: "og:site_name",
        content: "txAdmin"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("meta", {
        property: "og:title",
        content: "txAdmin - The best FiveM server management solution"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("meta", {
        property: "og:description",
        content: "txAdmin is a completely free to use, full-featured web panel to Manage & Monitor your FiveM Server remotely, in use by over TEN thousand servers worldwide at any given time."
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("meta", {
        property: "og:url",
        content: "https://txadm.in"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("meta", {
        property: "og:image",
        content: "https://i.file.glass/yuFh9dmlBS.png"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("link", {
        rel: "canonical",
        href: "https://txadm.in"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "flex justify-between mx-5 md:mx-0 md:justify-around mt-5",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
          href: "/",
          passHref: true,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
            className: "font-bold text-lg select-none text-white",
            children: "txAdmin"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
        "aria-label": "Mobile Navigation Button",
        className: "flex md:hidden bg-gray-300 hover:bg-gray-200 duration-200 ease-in-out p-2 rounded-xl",
        onClick: () => setmenuOpen(true),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__/* .MenuAlt4Icon */ .kds, {
          className: "h-6 w-6 text-gray-900"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "hidden md:block space-x-1 text-base text-white font-medium",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
          className: "duration-200 ease-in-out hover:bg-gray-800 p-2 rounded-lg",
          href: "https://github.com/tabarra/txAdmin/blob/master/README.md",
          children: "Documentation"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
          className: "duration-200 ease-in-out hover:bg-gray-800 p-2 rounded-lg",
          href: "https://discord.gg/yWxjt9zPWR",
          children: "Discord"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
          className: "duration-200 ease-in-out hover:bg-gray-800 p-2 rounded-lg",
          href: "https://github.com/tabarra/txAdmin",
          children: "GitHub"
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: "flex my-40 space-y-96",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex flex-col mx-auto w-10/12 space-y-4 text-center",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h1", {
          className: "text-white font-bold text-4xl",
          children: "Remotely Manage & Monitor your GTA5 FiveM Server"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
          className: "text-white text-xl",
          children: ["txAdmin is a ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
            className: "font-bold",
            children: "completely free to use"
          }), ", full-featured ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
            className: "font-bold",
            children: "web panel"
          }), " to Manage & Monitor your FiveM Server remotely, in use by over ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
            className: "font-bold",
            children: "TEN thousand servers"
          }), " worldwide at any given time."]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "space-y-10",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "flex justify-center mt-3 space-x-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex flex-col bg-gray-800 rounded-2xl items-center justify-center w-36 h-20",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                className: "text-green-300 text-4xl",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_5___default()), {
                  duration: 2.90,
                  separator: ",",
                  useEasing: true,
                  start: 1,
                  end: 10
                }), "k+"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                className: "text-gray-300 text-sm md:text-base",
                children: ["servers ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                  className: "hidden md:inline",
                  children: "online"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex flex-col bg-gray-800 rounded-2xl items-center justify-center w-36 h-20",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                className: "text-green-300 text-4xl",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_5___default()), {
                  duration: 2.90,
                  separator: ",",
                  useEasing: true,
                  start: 1,
                  end: 32
                }), "k+"]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                className: "text-gray-300 text-sm md:text-base",
                children: "admins"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex flex-col bg-gray-800 rounded-2xl items-center justify-center w-36 h-20",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                className: "text-green-300 text-4xl",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_5___default()), {
                  duration: 2.50,
                  separator: ",",
                  useEasing: true,
                  start: 1,
                  end: 669
                }), "k+"]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                className: "text-gray-300 text-sm md:text-base",
                children: "bans"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "flex flex-col space-y-2 justify-center md:flex-row md:space-y-0 md:space-x-2",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
                className: "hidden group flex mx-auto justify-center w-60 md:w-44 bg-green-600 hover:bg-green-500 text-white font-bold text-base py-2 px-3 rounded-lg transition duration-200 ease-in-out",
                children: ["Statistics", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__/* .ArrowRightIcon */ .LZ3, {
                  className: "group-hover:animate-bounce-x h-6 h-6 ml-2"
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
                className: "hidden group flex mx-auto justify-center w-60 md:w-44 bg-green-600 hover:bg-green-500 text-white font-bold text-base py-2 px-3 rounded-lg transition duration-200 ease-in-out",
                children: ["How to Login", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__/* .ArrowRightIcon */ .LZ3, {
                  className: "group-hover:animate-bounce-x h-6 h-6 ml-2"
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
                onClick: () => setOpen(true),
                className: "group flex mx-auto justify-center w-60 bg-green-600 hover:bg-green-500 text-white font-bold text-base py-2 px-3 rounded-lg transition duration-200 ease-in-out",
                children: ["Get Started", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__/* .ArrowRightIcon */ .LZ3, {
                  className: "group-hover:animate-bounce-x h-6 h-6 ml-2"
                })]
              })
            })]
          })]
        })]
      })
    })]
  });
}
;

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;