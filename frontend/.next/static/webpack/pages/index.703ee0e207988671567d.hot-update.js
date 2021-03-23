webpackHotUpdate_N_E("pages/index",{

/***/ "./components/RestaurantList/index.js":
/*!********************************************!*\
  !*** ./components/RestaurantList/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_xampp_htdocs_next_react_hooks_strapi_food_delivery_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_xampp_htdocs_next_react_hooks_strapi_food_delivery_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_xampp_htdocs_next_react_hooks_strapi_food_delivery_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_xampp_htdocs_next_react_hooks_strapi_food_delivery_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-responsive */ "./node_modules/react-responsive/dist/react-responsive.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_15__);





var _jsxFileName = "C:\\xampp\\htdocs\\next-react-hooks-strapi-food-delivery\\frontend\\components\\RestaurantList\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_xampp_htdocs_next_react_hooks_strapi_food_delivery_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = Object(C_xampp_htdocs_next_react_hooks_strapi_food_delivery_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n    query restaurants($start: Int, $limit: Int, $name : String!) {\n      \n      restaurants(start: $start, limit: $limit, where: { name_contains: $name }) {\n          id\n          name\n          description\n          image {\n            url\n          }\n      }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/* components/RestaurantList/index.js */











var QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject());

function RestaurantList(props) {
  _s();

  var _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_9___default.a.useState(0),
      _React$useState2 = Object(C_xampp_htdocs_next_react_hooks_strapi_food_delivery_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      Wholeres = _React$useState2[0],
      setWholeres = _React$useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();
  var page = router.query.page;
  /*const starte = 0;
  if({page} == 2){
    const starte = 5;
  }
  else{
    const starte = 0;
  }*/

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(QUERY, {
    variables: {
      //date: date,
      //offset: 0,
      start: 0,
      limit: 10,
      name: props.search //limit: 10,
      //start: starte,
      //resellIndex: resellFilter,
      //brandCategorieName: brandFilter

    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data,
      fetchMore = _useQuery.fetchMore;

  if (error) return "Error loading restaurants"; //if restaurants are returned from the GraphQL query, run the filter query
  //and set equal to variable restaurantSearch

  if (loading) return __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 23
    }
  }, "Fetching"); //setWholeres(data.restaurants.length);

  axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("".concat("http://localhost:1337", "/restaurants/count/?name_contains=").concat(props.search)).then(function (response) {
    var restau = response.data;
    setWholeres(restau); //alert(restau);

    console.log(restau);
  }, function (error) {
    console.log(error);
  });
  var pageCount = Wholeres / 10;

  if (pageCount < 1) {
    pageCount = 1;
  } //alert(pageCount);
  //const pageCount = 5;
  //alert(allp.data.code);


  if (data.restaurants && data.restaurants.length) {
    //searchQuery
    var searchQuery = data.restaurants.filter(function (query) {
      return query.name.toLowerCase().includes(props.search);
    }); //setWholeres(data.restaurants.length);
    //const pageCount = Wholeres / 10;

    if (searchQuery.length != 0) {
      var pagginationHandler = function pagginationHandler(page) {
        var currentPath = router.pathname;

        var currentQuery = _objectSpread({}, router.query);

        currentQuery.page = page.selected + 1; //alert(page.selected);
        //console.log(page.selected);

        router.push({
          pathname: currentPath //query: currentQuery,

        });
        fetchMore({
          variables: {
            //start: data.restaurants.length * currentQuery.page - 10,
            start: 10 * (page.selected + 1) - 10,
            limit: 10,
            name: props.search
          },
          updateQuery: function updateQuery(prev, _ref) {
            var fetchMoreResult = _ref.fetchMoreResult;
            //setWholeres(searchQuery.length);
            if (!fetchMoreResult) return prev;
            return Object.assign({}, prev, {
              //restaurants: [...prev.restaurants, ...fetchMoreResult.restaurants]
              restaurants: Object(C_xampp_htdocs_next_react_hooks_strapi_food_delivery_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(fetchMoreResult.restaurants)
            });
          }
        });
      }; //const pageCount = searchQuery.length / 10;
      //setWholeres(searchQuery.length);
      //const pageCount = Wholeres / 10;
      //const pageCount = 5;
      //const pageCount = data.restaurants.length / 10;

      /*const pagginationHandler = (page) => {
        const currentPath = router.pathname;
        const currentQuery = { ...router.query };
        currentQuery.page = page.selected + 1;
        //alert(currentQuery.page);
        router.push({
            pathname: currentPath,
            query: currentQuery,
        });
        
        //use state to keep  the searchQuery.length val()///////
        
        fetchMore({
          variables: {
            //start: data.restaurants.length * currentQuery.page - 10,
            start: 10 * currentQuery.page - 10,
            limit: 10,
            name: props.search,
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            setWholeres(searchQuery.length);
            if (!fetchMoreResult) return prev;
            return Object.assign({}, prev, {
              //restaurants: [...prev.restaurants, ...fetchMoreResult.restaurants]
              restaurants: [...fetchMoreResult.restaurants]
            });
          }
        })
        
      };*/
      //const {page} = router.query;
      //const content = {page};

      /*const page = 1;
      const currentQuery = { ...router.query };
      currentQuery.page = page.selected + 1;
      const content = currentQuery.page;*/
      //alert(pageCount);


      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 9
        }
      }, __jsx(react_responsive__WEBPACK_IMPORTED_MODULE_15___default.a, {
        query: "(min-device-width: 1224px)",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 9
        }
      }, __jsx("div", {
        style: {
          marginRight: 35,
          marginLeft: 10,
          marginTop: 5,
          color: "#343a40"
        },
        className: "jsx-2274621739",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }
      }, __jsx("h4", {
        className: "jsx-2274621739",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 15
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faShoppingBasket"],
        size: "xs",
        color: "#343a40",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 19
        }
      }), " \u0E23\u0E49\u0E32\u0E19\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 (All Restaurants)")), __jsx("div", {
        style: {
          marginTop: 4
        },
        className: "jsx-2274621739",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        as: "/addrestaurant/",
        href: "/addrestaurants/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 15
        }
      }, __jsx("a", {
        className: "jsx-2274621739" + " " + "btn btn-primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 21
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faPlusSquare"],
        size: "xs",
        color: "white",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 23
        }
      }), "\xA0 \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E23\u0E49\u0E32\u0E19\u0E2D\u0E32\u0E2B\u0E32\u0E23"))), __jsx("span", {
        style: {
          marginTop: 10,
          color: "red",
          whiteSpace: "pre-line"
        },
        className: "jsx-2274621739" + " " + "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 11
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faSearch"],
        color: "red",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 13
        }
      }), "\xA0\xA0", "\u0E23\u0E49\u0E32\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ".concat(Wholeres, " \u0E23\u0E49\u0E32\u0E19 ( There are ").concat(Wholeres, " Restaurants ) \n ")), __jsx("div", {
        style: {
          marginBottom: 20
        },
        className: "jsx-2274621739" + " " + "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 11
        }
      }, __jsx(react_paginate__WEBPACK_IMPORTED_MODULE_10___default.a, {
        previousLabel: 'previous',
        nextLabel: 'next',
        breakLabel: '...',
        breakClassName: 'break-me',
        activeClassName: 'active',
        containerClassName: 'pagination',
        subContainerClassName: 'pages pagination',
        initialPage: 1 - 1,
        pageCount: pageCount //page count
        ,
        marginPagesDisplayed: 2,
        pageRangeDisplayed: 5,
        onPageChange: pagginationHandler,
        disableInitialCallback: true,
        activeLinkClassName: 'active',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 11
        }
      })), searchQuery.map(function (res) {
        return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          xs: "6",
          sm: "4",
          key: res.id,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 13
          }
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
          style: {
            margin: "0 0.5rem 20px 0.5rem"
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 15
          }
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardImg"], {
          top: true,
          style: {
            height: 250
          },
          src: false ? undefined : res.image[0] != null ? "".concat("http://localhost:1337", "/uploads/").concat(res.image.url) : "".concat("http://localhost:1337", "/uploads/istockphoto-922962354-612x612.jpg"),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 17
          }
        }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 17
          }
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardTitle"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 19
          }
        }, __jsx("b", {
          className: "jsx-2274621739",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 30
          }
        }, res.name)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardText"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 19
          }
        }, res.description)), __jsx("div", {
          className: "jsx-2274621739" + " " + "card-footer",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 17
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          as: "/restaurants/".concat(res.id),
          href: "/restaurants?id=".concat(res.id),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 19
          }
        }, __jsx("a", {
          className: "jsx-2274621739" + " " + "btn btn-primary",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 21
          }
        }, "View")))));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
        id: "2274621739",
        __self: this,
        __source: void 0
      }, ".card-columns{-webkit-column-count:3;column-count:3;}.posts{min-height:400px;}.pagination{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style:none;height:40px;border:1px solid black;border-radius:5px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0;margin-top:40px;}a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;padding:0 10px;cursor:pointer;color:black;}a:hover{-webkit-text-decoration:underline;text-decoration:underline;}.active a{font-weight:bold;-webkit-text-decoration:underline;text-decoration:underline;pointer-events:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx4YW1wcFxcaHRkb2NzXFxuZXh0LXJlYWN0LWhvb2tzLXN0cmFwaS1mb29kLWRlbGl2ZXJ5XFxmcm9udGVuZFxcY29tcG9uZW50c1xcUmVzdGF1cmFudExpc3RcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdRYSxBQWFnQyxBQVFFLEFBR0osQUFZQSxBQVFhLEFBR1QsaUJBekJuQixBQTBCd0IscUJBbEN4QixzQkErQkEsY0FwQmtCLEFBWUcsR0FZSCxhQXZCSixPQXdCZCxLQXZCeUIsdUJBQ0wsa0JBQ0Esd0JBU04sWUFDRyxlQUNBLGVBQ0gsQ0FYTyxXQVlyQixrRkFYWSxVQUNNLGdCQUVsQiIsImZpbGUiOiJDOlxceGFtcHBcXGh0ZG9jc1xcbmV4dC1yZWFjdC1ob29rcy1zdHJhcGktZm9vZC1kZWxpdmVyeVxcZnJvbnRlbmRcXGNvbXBvbmVudHNcXFJlc3RhdXJhbnRMaXN0XFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNvbXBvbmVudHMvUmVzdGF1cmFudExpc3QvaW5kZXguanMgKi9cclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiO1xyXG5pbXBvcnQgeyBncWwgfSBmcm9tIFwiYXBvbGxvLWJvb3N0XCI7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgQ2FyZEJvZHksXHJcbiAgQ2FyZEltZyxcclxuICBDYXJkVGV4dCxcclxuICBDYXJkVGl0bGUsXHJcbiAgUm93LFxyXG4gIENvbCxcclxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdFBhZ2luYXRlIGZyb20gJ3JlYWN0LXBhZ2luYXRlJztcclxuaW1wb3J0IFJvdXRlciwgeyB3aXRoUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhU2hvcHBpbmdCYXNrZXQsIGZhU2VhcmNoLCBmYVBsdXNTcXVhcmUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCBNZWRpYVF1ZXJ5IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUnXHJcblxyXG5jb25zdCBRVUVSWSA9IGdxbGBcclxuICAgIHF1ZXJ5IHJlc3RhdXJhbnRzKCRzdGFydDogSW50LCAkbGltaXQ6IEludCwgJG5hbWUgOiBTdHJpbmchKSB7XHJcbiAgICAgIFxyXG4gICAgICByZXN0YXVyYW50cyhzdGFydDogJHN0YXJ0LCBsaW1pdDogJGxpbWl0LCB3aGVyZTogeyBuYW1lX2NvbnRhaW5zOiAkbmFtZSB9KSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFJlc3RhdXJhbnRMaXN0KHByb3BzKSB7XHJcbiAgY29uc3QgW1dob2xlcmVzLCBzZXRXaG9sZXJlc10gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qge3BhZ2V9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIC8qY29uc3Qgc3RhcnRlID0gMDtcclxuICBpZih7cGFnZX0gPT0gMil7XHJcbiAgICBjb25zdCBzdGFydGUgPSA1O1xyXG4gIH1cclxuICBlbHNle1xyXG4gICAgY29uc3Qgc3RhcnRlID0gMDtcclxuICB9Ki9cclxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhLCBmZXRjaE1vcmUgfSA9IHVzZVF1ZXJ5KFFVRVJZLCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgLy9kYXRlOiBkYXRlLFxyXG4gICAgICAvL29mZnNldDogMCxcclxuICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgIGxpbWl0OiAxMCxcclxuICAgICAgbmFtZTogcHJvcHMuc2VhcmNoLFxyXG4gICAgICAvL2xpbWl0OiAxMCxcclxuICAgICAgLy9zdGFydDogc3RhcnRlLFxyXG4gICAgICAvL3Jlc2VsbEluZGV4OiByZXNlbGxGaWx0ZXIsXHJcbiAgICAgIC8vYnJhbmRDYXRlZ29yaWVOYW1lOiBicmFuZEZpbHRlclxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpZiAoZXJyb3IpIHJldHVybiBcIkVycm9yIGxvYWRpbmcgcmVzdGF1cmFudHNcIjtcclxuICAvL2lmIHJlc3RhdXJhbnRzIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBHcmFwaFFMIHF1ZXJ5LCBydW4gdGhlIGZpbHRlciBxdWVyeVxyXG4gIC8vYW5kIHNldCBlcXVhbCB0byB2YXJpYWJsZSByZXN0YXVyYW50U2VhcmNoXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8aDE+RmV0Y2hpbmc8L2gxPjtcclxuICBcclxuICAvL3NldFdob2xlcmVzKGRhdGEucmVzdGF1cmFudHMubGVuZ3RoKTtcclxuIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9yZXN0YXVyYW50cy9jb3VudC8/bmFtZV9jb250YWlucz0ke3Byb3BzLnNlYXJjaH1gKVxyXG4gIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIGNvbnN0IHJlc3RhdSA9cmVzcG9uc2UuZGF0YTtcclxuICAgIHNldFdob2xlcmVzKHJlc3RhdSk7XHJcbiAgICAvL2FsZXJ0KHJlc3RhdSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN0YXUpO1xyXG4gIH0sIGVycm9yID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9KTtcclxuICBcclxuICB2YXIgcGFnZUNvdW50ID0gV2hvbGVyZXMgLyAxMDtcclxuICBpZihwYWdlQ291bnQgPCAxKXtcclxuICAgIHBhZ2VDb3VudCA9IDE7XHJcbiAgfVxyXG4gIC8vYWxlcnQocGFnZUNvdW50KTtcclxuICAvL2NvbnN0IHBhZ2VDb3VudCA9IDU7XHJcbiAgLy9hbGVydChhbGxwLmRhdGEuY29kZSk7XHJcblxyXG4gIGlmIChkYXRhLnJlc3RhdXJhbnRzICYmIGRhdGEucmVzdGF1cmFudHMubGVuZ3RoKSB7XHJcbiAgICBcclxuICAgIC8vc2VhcmNoUXVlcnlcclxuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gZGF0YS5yZXN0YXVyYW50cy5maWx0ZXIoKHF1ZXJ5KSA9PlxyXG4gICAgICBxdWVyeS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoKVxyXG4gICAgKTtcclxuICAgIC8vc2V0V2hvbGVyZXMoZGF0YS5yZXN0YXVyYW50cy5sZW5ndGgpO1xyXG4gICAgLy9jb25zdCBwYWdlQ291bnQgPSBXaG9sZXJlcyAvIDEwO1xyXG4gICAgaWYgKHNlYXJjaFF1ZXJ5Lmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2dpbmF0aW9uSGFuZGxlciA9IChwYWdlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhdGggPSByb3V0ZXIucGF0aG5hbWU7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFF1ZXJ5ID0geyAuLi5yb3V0ZXIucXVlcnkgfTtcclxuICAgICAgICBjdXJyZW50UXVlcnkucGFnZSA9IHBhZ2Uuc2VsZWN0ZWQgKyAxO1xyXG4gICAgICAgIC8vYWxlcnQocGFnZS5zZWxlY3RlZCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwYWdlLnNlbGVjdGVkKTtcclxuICAgICAgICBcclxuICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiBjdXJyZW50UGF0aCxcclxuICAgICAgICAgICAgLy9xdWVyeTogY3VycmVudFF1ZXJ5LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICBmZXRjaE1vcmUoe1xyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgLy9zdGFydDogZGF0YS5yZXN0YXVyYW50cy5sZW5ndGggKiBjdXJyZW50UXVlcnkucGFnZSAtIDEwLFxyXG4gICAgICAgICAgc3RhcnQ6IDEwICogKHBhZ2Uuc2VsZWN0ZWQgKyAxKSAtIDEwLFxyXG4gICAgICAgICAgbGltaXQ6IDEwLFxyXG4gICAgICAgICAgbmFtZTogcHJvcHMuc2VhcmNoLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlUXVlcnk6IChwcmV2LCB7IGZldGNoTW9yZVJlc3VsdCB9KSA9PiB7XHJcbiAgICAgICAgICAvL3NldFdob2xlcmVzKHNlYXJjaFF1ZXJ5Lmxlbmd0aCk7XHJcbiAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkgcmV0dXJuIHByZXY7XHJcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldiwge1xyXG4gICAgICAgICAgICAvL3Jlc3RhdXJhbnRzOiBbLi4ucHJldi5yZXN0YXVyYW50cywgLi4uZmV0Y2hNb3JlUmVzdWx0LnJlc3RhdXJhbnRzXVxyXG4gICAgICAgICAgICByZXN0YXVyYW50czogWy4uLmZldGNoTW9yZVJlc3VsdC5yZXN0YXVyYW50c11cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgfTtcclxuICAgICAgLy9jb25zdCBwYWdlQ291bnQgPSBzZWFyY2hRdWVyeS5sZW5ndGggLyAxMDtcclxuICAgICAgLy9zZXRXaG9sZXJlcyhzZWFyY2hRdWVyeS5sZW5ndGgpO1xyXG4gICAgICAvL2NvbnN0IHBhZ2VDb3VudCA9IFdob2xlcmVzIC8gMTA7XHJcbiAgICAgIC8vY29uc3QgcGFnZUNvdW50ID0gNTtcclxuICAgICAgLy9jb25zdCBwYWdlQ291bnQgPSBkYXRhLnJlc3RhdXJhbnRzLmxlbmd0aCAvIDEwO1xyXG4gICAgICAvKmNvbnN0IHBhZ2dpbmF0aW9uSGFuZGxlciA9IChwYWdlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhdGggPSByb3V0ZXIucGF0aG5hbWU7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFF1ZXJ5ID0geyAuLi5yb3V0ZXIucXVlcnkgfTtcclxuICAgICAgICBjdXJyZW50UXVlcnkucGFnZSA9IHBhZ2Uuc2VsZWN0ZWQgKyAxO1xyXG4gICAgICAgIC8vYWxlcnQoY3VycmVudFF1ZXJ5LnBhZ2UpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6IGN1cnJlbnRQYXRoLFxyXG4gICAgICAgICAgICBxdWVyeTogY3VycmVudFF1ZXJ5LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vdXNlIHN0YXRlIHRvIGtlZXAgIHRoZSBzZWFyY2hRdWVyeS5sZW5ndGggdmFsKCkvLy8vLy8vXHJcbiAgICAgICAgXHJcbiAgICAgICAgZmV0Y2hNb3JlKHtcclxuICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAvL3N0YXJ0OiBkYXRhLnJlc3RhdXJhbnRzLmxlbmd0aCAqIGN1cnJlbnRRdWVyeS5wYWdlIC0gMTAsXHJcbiAgICAgICAgICAgIHN0YXJ0OiAxMCAqIGN1cnJlbnRRdWVyeS5wYWdlIC0gMTAsXHJcbiAgICAgICAgICAgIGxpbWl0OiAxMCxcclxuICAgICAgICAgICAgbmFtZTogcHJvcHMuc2VhcmNoLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldiwgeyBmZXRjaE1vcmVSZXN1bHQgfSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRXaG9sZXJlcyhzZWFyY2hRdWVyeS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkgcmV0dXJuIHByZXY7XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2LCB7XHJcbiAgICAgICAgICAgICAgLy9yZXN0YXVyYW50czogWy4uLnByZXYucmVzdGF1cmFudHMsIC4uLmZldGNoTW9yZVJlc3VsdC5yZXN0YXVyYW50c11cclxuICAgICAgICAgICAgICByZXN0YXVyYW50czogWy4uLmZldGNoTW9yZVJlc3VsdC5yZXN0YXVyYW50c11cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgfTsqL1xyXG5cclxuICAgICAgLy9jb25zdCB7cGFnZX0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICAgIC8vY29uc3QgY29udGVudCA9IHtwYWdlfTtcclxuICAgICAgLypjb25zdCBwYWdlID0gMTtcclxuICAgICAgY29uc3QgY3VycmVudFF1ZXJ5ID0geyAuLi5yb3V0ZXIucXVlcnkgfTtcclxuICAgICAgY3VycmVudFF1ZXJ5LnBhZ2UgPSBwYWdlLnNlbGVjdGVkICsgMTtcclxuICAgICAgY29uc3QgY29udGVudCA9IGN1cnJlbnRRdWVyeS5wYWdlOyovXHJcbiAgICAgIC8vYWxlcnQocGFnZUNvdW50KTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Um93PlxyXG4gICAgXHJcbiAgICAgICAgPE1lZGlhUXVlcnkgcXVlcnk9JyhtaW4tZGV2aWNlLXdpZHRoOiAxMjI0cHgpJz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDM1LCBtYXJnaW5MZWZ0OjEwLCBtYXJnaW5Ub3A6IDUsIGNvbG9yOiBcIiMzNDNhNDBcIiwgfX0+XHJcbiAgICAgICAgICAgICAgPGg0PjxGb250QXdlc29tZUljb24gaWNvbj17ZmFTaG9wcGluZ0Jhc2tldH0gc2l6ZT1cInhzXCIgY29sb3I9XCIjMzQzYTQwXCIgLz4g4Lij4LmJ4Liy4LiZ4Lit4Liy4Lir4Liy4Lij4LiX4Lix4LmJ4LiH4Lir4Lih4LiUIChBbGwgUmVzdGF1cmFudHMpPC9oND5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDQgfX0+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBhcz17YC9hZGRyZXN0YXVyYW50L2B9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hZGRyZXN0YXVyYW50cy9gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFQbHVzU3F1YXJlfSBcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJ4c1wiIGNvbG9yPVwid2hpdGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIC8+Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICDguYDguJ7guLTguYjguKHguKPguYnguLLguJnguK3guLLguKvguLLguKNcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwLCBjb2xvcjogXCJyZWRcIiwgd2hpdGVTcGFjZTogXCJwcmUtbGluZVwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTZWFyY2h9IGNvbG9yPVwicmVkXCIgLz4mbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAge2DguKPguYnguLLguJnguJfguLHguYnguIfguKvguKHguJQgJHtXaG9sZXJlc30g4Lij4LmJ4Liy4LiZICggVGhlcmUgYXJlICR7V2hvbGVyZXN9IFJlc3RhdXJhbnRzICkgXFxuIGB9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fT5cclxuICAgICAgICAgIDxSZWFjdFBhZ2luYXRlXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c0xhYmVsPXsncHJldmlvdXMnfVxyXG4gICAgICAgICAgICAgICAgbmV4dExhYmVsPXsnbmV4dCd9XHJcbiAgICAgICAgICAgICAgICBicmVha0xhYmVsPXsnLi4uJ31cclxuICAgICAgICAgICAgICAgIGJyZWFrQ2xhc3NOYW1lPXsnYnJlYWstbWUnfVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPXsnYWN0aXZlJ31cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzTmFtZT17J3BhZ2luYXRpb24nfVxyXG4gICAgICAgICAgICAgICAgc3ViQ29udGFpbmVyQ2xhc3NOYW1lPXsncGFnZXMgcGFnaW5hdGlvbid9XHJcblxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFBhZ2U9ezEgLSAxfVxyXG4gICAgICAgICAgICAgICAgcGFnZUNvdW50PXtwYWdlQ291bnR9IC8vcGFnZSBjb3VudFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luUGFnZXNEaXNwbGF5ZWQ9ezJ9XHJcbiAgICAgICAgICAgICAgICBwYWdlUmFuZ2VEaXNwbGF5ZWQ9ezV9XHJcbiAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3BhZ2dpbmF0aW9uSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVJbml0aWFsQ2FsbGJhY2s9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVMaW5rQ2xhc3NOYW1lPXsnYWN0aXZlJ31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7c2VhcmNoUXVlcnkubWFwKChyZXMpID0+IChcclxuICAgICAgICAgICAgPENvbCB4cz1cIjZcIiBzbT1cIjRcIiBrZXk9e3Jlcy5pZH0+XHJcbiAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMC41cmVtIDIwcHggMC41cmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZEltZ1xyXG4gICAgICAgICAgICAgICAgICB0b3A9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMjUwIH19XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuaW1hZ2VbMF0gIT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHJlcy5pbWFnZVswXS51cmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgaHR0cHM6Ly9zdHJhcGl1cGxvYWR0b2V5LnMzLmFtYXpvbmF3cy5jb20vaXN0b2NrcGhvdG9fOTIyOTYyMzU0XzYxMng2MTJfMGY1YTBlYWJjNC5qcGdgXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuaW1hZ2VbMF0gIT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L3VwbG9hZHMvJHtyZXMuaW1hZ2UudXJsfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS91cGxvYWRzL2lzdG9ja3Bob3RvLTkyMjk2MjM1NC02MTJ4NjEyLmpwZ2BcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPjxiPntyZXMubmFtZX08L2I+PC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dD57cmVzLmRlc2NyaXB0aW9ufTwvQ2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGFzPXtgL3Jlc3RhdXJhbnRzLyR7cmVzLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9yZXN0YXVyYW50cz9pZD0ke3Jlcy5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+VmlldzwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgIC8qYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGE6bGluayB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICAgIC5jYXJkLWNvbHVtbnMge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uLWNvdW50OiAzO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLyouY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgICAucG9zdHMge1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5wYWdpbmF0aW9uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5hY3RpdmUgYXtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdCAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblx0XHRcdFx0ICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L01lZGlhUXVlcnk+XHJcbiAgICAgICAgPE1lZGlhUXVlcnkgcXVlcnk9JyhtYXgtZGV2aWNlLXdpZHRoOiAxMjI0cHgpJz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDcsIG1hcmdpbkxlZnQ6IDUsIGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Cb3R0b206IDIwLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBhcz17YC9hZGRyZXN0YXVyYW50L2B9XHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYWRkcmVzdGF1cmFudHMvYH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZzogMjAsIHdpZHRoOiAyMDAsIGZvbnRTaXplOiAyMH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFQbHVzU3F1YXJlfSBcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJ4c1wiIGNvbG9yPVwid2hpdGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIC8+Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICDguYDguJ7guLTguYjguKHguKPguYnguLLguJnguK3guLLguKvguLLguKNcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDQwLCBtYXJnaW5Ub3A6IDUsIGNvbG9yOiBcIiMzNDNhNDBcIiwgd2hpdGVTcGFjZTogXCJwcmUtbGluZVwiIH19PlxyXG4gICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gXHJcbiAgICAgICAgICAgICAgICBpY29uPXtmYVNob3BwaW5nQmFza2V0fSBcclxuICAgICAgICAgICAgICAgIHNpemU9XCJ4c1wiIGNvbG9yPVwiIzM0M2E0MFwiIFxyXG4gICAgICAgICAgICAgICAgLz4gXHJcbiAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgIHtcIuC4o+C5ieC4suC4meC4reC4suC4q+C4suC4o+C4l+C4seC5ieC4h+C4q+C4oeC4lCBcXG5cIn1cclxuICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAge1wiKEFsbCBSZXN0YXVyYW50cylcIn1cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwLCBjb2xvcjogXCJyZWRcIiwgd2hpdGVTcGFjZTogXCJwcmUtbGluZVwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTZWFyY2h9IGNvbG9yPVwicmVkXCIgLz4mbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAge2DguKPguYnguLLguJnguJfguLHguYnguIfguKvguKHguJQgJHtXaG9sZXJlc30g4Lij4LmJ4Liy4LiZIFxcbiBgfSAmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAge2AoIFRoZXJlIGFyZSAke1dob2xlcmVzfSBSZXN0YXVyYW50cyApYH1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19PlxyXG4gICAgICAgICAgPFJlYWN0UGFnaW5hdGVcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzTGFiZWw9eydwcmV2aW91cyd9XHJcbiAgICAgICAgICAgICAgICBuZXh0TGFiZWw9eyduZXh0J31cclxuICAgICAgICAgICAgICAgIGJyZWFrTGFiZWw9eycuLi4nfVxyXG4gICAgICAgICAgICAgICAgYnJlYWtDbGFzc05hbWU9eydicmVhay1tZSd9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9eydhY3RpdmUnfVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lPXsncGFnaW5hdGlvbid9XHJcbiAgICAgICAgICAgICAgICBzdWJDb250YWluZXJDbGFzc05hbWU9eydwYWdlcyBwYWdpbmF0aW9uJ31cclxuXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsUGFnZT17MSAtIDF9XHJcbiAgICAgICAgICAgICAgICBwYWdlQ291bnQ9e3BhZ2VDb3VudH0gLy9wYWdlIGNvdW50XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5QYWdlc0Rpc3BsYXllZD17Mn1cclxuICAgICAgICAgICAgICAgIHBhZ2VSYW5nZURpc3BsYXllZD17NX1cclxuICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17cGFnZ2luYXRpb25IYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZUluaXRpYWxDYWxsYmFjaz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGFjdGl2ZUxpbmtDbGFzc05hbWU9eydhY3RpdmUnfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHtzZWFyY2hRdWVyeS5tYXAoKHJlcykgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHhzPVwiNlwiIHNtPVwiNFwiIGtleT17cmVzLmlkfT5cclxuICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW46IFwiMCAwLjVyZW0gMjBweCAwLjVyZW1cIiB9fT5cclxuICAgICAgICAgICAgICAgIDxDYXJkSW1nXHJcbiAgICAgICAgICAgICAgICAgIHRvcD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAyNTAgfX1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbWFnZVswXSAhPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcmVzLmltYWdlWzBdLnVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBodHRwczovL3N0cmFwaXVwbG9hZHRvZXkuczMuYW1hem9uYXdzLmNvbS9pc3RvY2twaG90b185MjI5NjIzNTRfNjEyeDYxMl8wZjVhMGVhYmM0LmpwZ2BcclxuICAgICAgICAgICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbWFnZVswXSAhPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0ke3Jlcy5pbWFnZVswXS51cmx9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L3VwbG9hZHMvaXN0b2NrcGhvdG8tOTIyOTYyMzU0LTYxMng2MTIuanBnYFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+PGI+e3Jlcy5uYW1lfTwvYj48L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgPENhcmRUZXh0PntyZXMuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgYXM9e2AvcmVzdGF1cmFudHMvJHtyZXMuaWR9YH1cclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3Jlc3RhdXJhbnRzP2lkPSR7cmVzLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5WaWV3PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgLyphIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYTpsaW5rIHtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgICAgLmNhcmQtY29sdW1ucyB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4tY291bnQ6IDM7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAvKi5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICAgIC5wb3N0cyB7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnBhZ2luYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmFjdGl2ZSBhe1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdFx0ICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHRcdFx0XHQgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvTWVkaWFRdWVyeT5cclxuXHJcbiAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgIFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDxoMT5ObyBSZXN0YXVyYW50cyBGb3VuZDwvaDE+O1xyXG4gICAgfVxyXG4gIH1cclxuICAvL3JldHVybiA8aDU+QWRkIFJlc3RhdXJhbnRzPC9oNT47XHJcbiAgcmV0dXJuIDxoNSBzdHlsZT17e2NvbG9yOiBcInJlZFwifX0+IeC5hOC4oeC5iOC4nuC4muC4o+C5ieC4suC4meC4reC4suC4q+C4suC4oyAoIE5vIFJlc3RhdXJhbnRzIEZvdW5kICk8L2g1PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudExpc3Q7Il19 */\n/*@ sourceURL=C:\\\\xampp\\\\htdocs\\\\next-react-hooks-strapi-food-delivery\\\\frontend\\\\components\\\\RestaurantList\\\\index.js */")), __jsx(react_responsive__WEBPACK_IMPORTED_MODULE_15___default.a, {
        query: "(max-device-width: 1224px)",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 9
        }
      }, __jsx("div", {
        style: {
          marginTop: 7,
          marginLeft: 5,
          display: "flex",
          marginBottom: 20,
          justifyContent: "center"
        },
        className: "jsx-2274621739",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 11
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        as: "/addrestaurant/",
        href: "/addrestaurants/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 15
        }
      }, __jsx("a", {
        style: {
          textAlign: "center",
          padding: 20,
          width: 200,
          fontSize: 20
        },
        className: "jsx-2274621739" + " " + "btn btn-primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 21
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faPlusSquare"],
        size: "xs",
        color: "white",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 23
        }
      }), "\xA0 \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E23\u0E49\u0E32\u0E19\u0E2D\u0E32\u0E2B\u0E32\u0E23"))), __jsx("div", {
        style: {
          marginRight: 40,
          marginTop: 5,
          color: "#343a40",
          whiteSpace: "pre-line"
        },
        className: "jsx-2274621739",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 11
        }
      }, __jsx("h4", {
        className: "jsx-2274621739",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 15
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faShoppingBasket"],
        size: "xs",
        color: "#343a40",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332,
          columnNumber: 17
        }
      }), "\xA0", "ร้านอาหารทั้งหมด \n", "\xA0\xA0\xA0", "(All Restaurants)")), __jsx("span", {
        style: {
          marginTop: 10,
          color: "red",
          whiteSpace: "pre-line"
        },
        className: "jsx-2274621739" + " " + "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 11
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faSearch"],
        color: "red",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 13
        }
      }), "\xA0\xA0", "\u0E23\u0E49\u0E32\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ".concat(Wholeres, " \u0E23\u0E49\u0E32\u0E19 \n "), " \xA0\xA0\xA0\xA0", "( There are ".concat(Wholeres, " Restaurants )")), __jsx("div", {
        style: {
          marginBottom: 20
        },
        className: "jsx-2274621739" + " " + "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 11
        }
      }, __jsx(react_paginate__WEBPACK_IMPORTED_MODULE_10___default.a, {
        previousLabel: 'previous',
        nextLabel: 'next',
        breakLabel: '...',
        breakClassName: 'break-me',
        activeClassName: 'active',
        containerClassName: 'pagination',
        subContainerClassName: 'pages pagination',
        initialPage: 1 - 1,
        pageCount: pageCount //page count
        ,
        marginPagesDisplayed: 2,
        pageRangeDisplayed: 5,
        onPageChange: pagginationHandler,
        disableInitialCallback: true,
        activeLinkClassName: 'active',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 11
        }
      })), searchQuery.map(function (res) {
        return __jsx("div", {
          xs: "6",
          sm: "4",
          key: res.id,
          className: "jsx-2274621739" + " " + "container",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 372,
            columnNumber: 13
          }
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
          style: {
            margin: "0 0.5rem 20px 0.5rem"
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 373,
            columnNumber: 15
          }
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardImg"], {
          top: true,
          style: {
            height: 250
          },
          src: false ? undefined : res.image[0] != null ? "".concat("http://localhost:1337").concat(res.image[0].url) : "".concat("http://localhost:1337", "/uploads/istockphoto-922962354-612x612.jpg"),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 374,
            columnNumber: 17
          }
        }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardBody"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 390,
            columnNumber: 17
          }
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardTitle"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 391,
            columnNumber: 19
          }
        }, __jsx("b", {
          className: "jsx-2274621739",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 391,
            columnNumber: 30
          }
        }, res.name)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["CardText"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 392,
            columnNumber: 19
          }
        }, res.description)), __jsx("div", {
          className: "jsx-2274621739" + " " + "card-footer",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 394,
            columnNumber: 17
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          as: "/restaurants/".concat(res.id),
          href: "/restaurants?id=".concat(res.id),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 395,
            columnNumber: 19
          }
        }, __jsx("a", {
          className: "jsx-2274621739" + " " + "btn btn-primary",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 399,
            columnNumber: 21
          }
        }, "View")))));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
        id: "2274621739",
        __self: this,
        __source: void 0
      }, ".card-columns{-webkit-column-count:3;column-count:3;}.posts{min-height:400px;}.pagination{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style:none;height:40px;border:1px solid black;border-radius:5px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0;margin-top:40px;}a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;padding:0 10px;cursor:pointer;color:black;}a:hover{-webkit-text-decoration:underline;text-decoration:underline;}.active a{font-weight:bold;-webkit-text-decoration:underline;text-decoration:underline;pointer-events:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx4YW1wcFxcaHRkb2NzXFxuZXh0LXJlYWN0LWhvb2tzLXN0cmFwaS1mb29kLWRlbGl2ZXJ5XFxmcm9udGVuZFxcY29tcG9uZW50c1xcUmVzdGF1cmFudExpc3RcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNaYSxBQWFnQyxBQVFFLEFBR0osQUFZQSxBQVFhLEFBR1QsaUJBekJuQixBQTBCd0IscUJBbEN4QixzQkErQkEsY0FwQmtCLEFBWUcsR0FZSCxhQXZCSixPQXdCZCxLQXZCeUIsdUJBQ0wsa0JBQ0Esd0JBU04sWUFDRyxlQUNBLGVBQ0gsQ0FYTyxXQVlyQixrRkFYWSxVQUNNLGdCQUVsQiIsImZpbGUiOiJDOlxceGFtcHBcXGh0ZG9jc1xcbmV4dC1yZWFjdC1ob29rcy1zdHJhcGktZm9vZC1kZWxpdmVyeVxcZnJvbnRlbmRcXGNvbXBvbmVudHNcXFJlc3RhdXJhbnRMaXN0XFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNvbXBvbmVudHMvUmVzdGF1cmFudExpc3QvaW5kZXguanMgKi9cclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiO1xyXG5pbXBvcnQgeyBncWwgfSBmcm9tIFwiYXBvbGxvLWJvb3N0XCI7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgQ2FyZEJvZHksXHJcbiAgQ2FyZEltZyxcclxuICBDYXJkVGV4dCxcclxuICBDYXJkVGl0bGUsXHJcbiAgUm93LFxyXG4gIENvbCxcclxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdFBhZ2luYXRlIGZyb20gJ3JlYWN0LXBhZ2luYXRlJztcclxuaW1wb3J0IFJvdXRlciwgeyB3aXRoUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhU2hvcHBpbmdCYXNrZXQsIGZhU2VhcmNoLCBmYVBsdXNTcXVhcmUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCBNZWRpYVF1ZXJ5IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUnXHJcblxyXG5jb25zdCBRVUVSWSA9IGdxbGBcclxuICAgIHF1ZXJ5IHJlc3RhdXJhbnRzKCRzdGFydDogSW50LCAkbGltaXQ6IEludCwgJG5hbWUgOiBTdHJpbmchKSB7XHJcbiAgICAgIFxyXG4gICAgICByZXN0YXVyYW50cyhzdGFydDogJHN0YXJ0LCBsaW1pdDogJGxpbWl0LCB3aGVyZTogeyBuYW1lX2NvbnRhaW5zOiAkbmFtZSB9KSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFJlc3RhdXJhbnRMaXN0KHByb3BzKSB7XHJcbiAgY29uc3QgW1dob2xlcmVzLCBzZXRXaG9sZXJlc10gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qge3BhZ2V9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIC8qY29uc3Qgc3RhcnRlID0gMDtcclxuICBpZih7cGFnZX0gPT0gMil7XHJcbiAgICBjb25zdCBzdGFydGUgPSA1O1xyXG4gIH1cclxuICBlbHNle1xyXG4gICAgY29uc3Qgc3RhcnRlID0gMDtcclxuICB9Ki9cclxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhLCBmZXRjaE1vcmUgfSA9IHVzZVF1ZXJ5KFFVRVJZLCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgLy9kYXRlOiBkYXRlLFxyXG4gICAgICAvL29mZnNldDogMCxcclxuICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgIGxpbWl0OiAxMCxcclxuICAgICAgbmFtZTogcHJvcHMuc2VhcmNoLFxyXG4gICAgICAvL2xpbWl0OiAxMCxcclxuICAgICAgLy9zdGFydDogc3RhcnRlLFxyXG4gICAgICAvL3Jlc2VsbEluZGV4OiByZXNlbGxGaWx0ZXIsXHJcbiAgICAgIC8vYnJhbmRDYXRlZ29yaWVOYW1lOiBicmFuZEZpbHRlclxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpZiAoZXJyb3IpIHJldHVybiBcIkVycm9yIGxvYWRpbmcgcmVzdGF1cmFudHNcIjtcclxuICAvL2lmIHJlc3RhdXJhbnRzIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBHcmFwaFFMIHF1ZXJ5LCBydW4gdGhlIGZpbHRlciBxdWVyeVxyXG4gIC8vYW5kIHNldCBlcXVhbCB0byB2YXJpYWJsZSByZXN0YXVyYW50U2VhcmNoXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8aDE+RmV0Y2hpbmc8L2gxPjtcclxuICBcclxuICAvL3NldFdob2xlcmVzKGRhdGEucmVzdGF1cmFudHMubGVuZ3RoKTtcclxuIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9yZXN0YXVyYW50cy9jb3VudC8/bmFtZV9jb250YWlucz0ke3Byb3BzLnNlYXJjaH1gKVxyXG4gIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIGNvbnN0IHJlc3RhdSA9cmVzcG9uc2UuZGF0YTtcclxuICAgIHNldFdob2xlcmVzKHJlc3RhdSk7XHJcbiAgICAvL2FsZXJ0KHJlc3RhdSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN0YXUpO1xyXG4gIH0sIGVycm9yID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9KTtcclxuICBcclxuICB2YXIgcGFnZUNvdW50ID0gV2hvbGVyZXMgLyAxMDtcclxuICBpZihwYWdlQ291bnQgPCAxKXtcclxuICAgIHBhZ2VDb3VudCA9IDE7XHJcbiAgfVxyXG4gIC8vYWxlcnQocGFnZUNvdW50KTtcclxuICAvL2NvbnN0IHBhZ2VDb3VudCA9IDU7XHJcbiAgLy9hbGVydChhbGxwLmRhdGEuY29kZSk7XHJcblxyXG4gIGlmIChkYXRhLnJlc3RhdXJhbnRzICYmIGRhdGEucmVzdGF1cmFudHMubGVuZ3RoKSB7XHJcbiAgICBcclxuICAgIC8vc2VhcmNoUXVlcnlcclxuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gZGF0YS5yZXN0YXVyYW50cy5maWx0ZXIoKHF1ZXJ5KSA9PlxyXG4gICAgICBxdWVyeS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoKVxyXG4gICAgKTtcclxuICAgIC8vc2V0V2hvbGVyZXMoZGF0YS5yZXN0YXVyYW50cy5sZW5ndGgpO1xyXG4gICAgLy9jb25zdCBwYWdlQ291bnQgPSBXaG9sZXJlcyAvIDEwO1xyXG4gICAgaWYgKHNlYXJjaFF1ZXJ5Lmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2dpbmF0aW9uSGFuZGxlciA9IChwYWdlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhdGggPSByb3V0ZXIucGF0aG5hbWU7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFF1ZXJ5ID0geyAuLi5yb3V0ZXIucXVlcnkgfTtcclxuICAgICAgICBjdXJyZW50UXVlcnkucGFnZSA9IHBhZ2Uuc2VsZWN0ZWQgKyAxO1xyXG4gICAgICAgIC8vYWxlcnQocGFnZS5zZWxlY3RlZCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwYWdlLnNlbGVjdGVkKTtcclxuICAgICAgICBcclxuICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiBjdXJyZW50UGF0aCxcclxuICAgICAgICAgICAgLy9xdWVyeTogY3VycmVudFF1ZXJ5LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICBmZXRjaE1vcmUoe1xyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgLy9zdGFydDogZGF0YS5yZXN0YXVyYW50cy5sZW5ndGggKiBjdXJyZW50UXVlcnkucGFnZSAtIDEwLFxyXG4gICAgICAgICAgc3RhcnQ6IDEwICogKHBhZ2Uuc2VsZWN0ZWQgKyAxKSAtIDEwLFxyXG4gICAgICAgICAgbGltaXQ6IDEwLFxyXG4gICAgICAgICAgbmFtZTogcHJvcHMuc2VhcmNoLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlUXVlcnk6IChwcmV2LCB7IGZldGNoTW9yZVJlc3VsdCB9KSA9PiB7XHJcbiAgICAgICAgICAvL3NldFdob2xlcmVzKHNlYXJjaFF1ZXJ5Lmxlbmd0aCk7XHJcbiAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkgcmV0dXJuIHByZXY7XHJcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldiwge1xyXG4gICAgICAgICAgICAvL3Jlc3RhdXJhbnRzOiBbLi4ucHJldi5yZXN0YXVyYW50cywgLi4uZmV0Y2hNb3JlUmVzdWx0LnJlc3RhdXJhbnRzXVxyXG4gICAgICAgICAgICByZXN0YXVyYW50czogWy4uLmZldGNoTW9yZVJlc3VsdC5yZXN0YXVyYW50c11cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgfTtcclxuICAgICAgLy9jb25zdCBwYWdlQ291bnQgPSBzZWFyY2hRdWVyeS5sZW5ndGggLyAxMDtcclxuICAgICAgLy9zZXRXaG9sZXJlcyhzZWFyY2hRdWVyeS5sZW5ndGgpO1xyXG4gICAgICAvL2NvbnN0IHBhZ2VDb3VudCA9IFdob2xlcmVzIC8gMTA7XHJcbiAgICAgIC8vY29uc3QgcGFnZUNvdW50ID0gNTtcclxuICAgICAgLy9jb25zdCBwYWdlQ291bnQgPSBkYXRhLnJlc3RhdXJhbnRzLmxlbmd0aCAvIDEwO1xyXG4gICAgICAvKmNvbnN0IHBhZ2dpbmF0aW9uSGFuZGxlciA9IChwYWdlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhdGggPSByb3V0ZXIucGF0aG5hbWU7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFF1ZXJ5ID0geyAuLi5yb3V0ZXIucXVlcnkgfTtcclxuICAgICAgICBjdXJyZW50UXVlcnkucGFnZSA9IHBhZ2Uuc2VsZWN0ZWQgKyAxO1xyXG4gICAgICAgIC8vYWxlcnQoY3VycmVudFF1ZXJ5LnBhZ2UpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6IGN1cnJlbnRQYXRoLFxyXG4gICAgICAgICAgICBxdWVyeTogY3VycmVudFF1ZXJ5LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vdXNlIHN0YXRlIHRvIGtlZXAgIHRoZSBzZWFyY2hRdWVyeS5sZW5ndGggdmFsKCkvLy8vLy8vXHJcbiAgICAgICAgXHJcbiAgICAgICAgZmV0Y2hNb3JlKHtcclxuICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAvL3N0YXJ0OiBkYXRhLnJlc3RhdXJhbnRzLmxlbmd0aCAqIGN1cnJlbnRRdWVyeS5wYWdlIC0gMTAsXHJcbiAgICAgICAgICAgIHN0YXJ0OiAxMCAqIGN1cnJlbnRRdWVyeS5wYWdlIC0gMTAsXHJcbiAgICAgICAgICAgIGxpbWl0OiAxMCxcclxuICAgICAgICAgICAgbmFtZTogcHJvcHMuc2VhcmNoLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldiwgeyBmZXRjaE1vcmVSZXN1bHQgfSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRXaG9sZXJlcyhzZWFyY2hRdWVyeS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkgcmV0dXJuIHByZXY7XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2LCB7XHJcbiAgICAgICAgICAgICAgLy9yZXN0YXVyYW50czogWy4uLnByZXYucmVzdGF1cmFudHMsIC4uLmZldGNoTW9yZVJlc3VsdC5yZXN0YXVyYW50c11cclxuICAgICAgICAgICAgICByZXN0YXVyYW50czogWy4uLmZldGNoTW9yZVJlc3VsdC5yZXN0YXVyYW50c11cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgfTsqL1xyXG5cclxuICAgICAgLy9jb25zdCB7cGFnZX0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICAgIC8vY29uc3QgY29udGVudCA9IHtwYWdlfTtcclxuICAgICAgLypjb25zdCBwYWdlID0gMTtcclxuICAgICAgY29uc3QgY3VycmVudFF1ZXJ5ID0geyAuLi5yb3V0ZXIucXVlcnkgfTtcclxuICAgICAgY3VycmVudFF1ZXJ5LnBhZ2UgPSBwYWdlLnNlbGVjdGVkICsgMTtcclxuICAgICAgY29uc3QgY29udGVudCA9IGN1cnJlbnRRdWVyeS5wYWdlOyovXHJcbiAgICAgIC8vYWxlcnQocGFnZUNvdW50KTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Um93PlxyXG4gICAgXHJcbiAgICAgICAgPE1lZGlhUXVlcnkgcXVlcnk9JyhtaW4tZGV2aWNlLXdpZHRoOiAxMjI0cHgpJz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDM1LCBtYXJnaW5MZWZ0OjEwLCBtYXJnaW5Ub3A6IDUsIGNvbG9yOiBcIiMzNDNhNDBcIiwgfX0+XHJcbiAgICAgICAgICAgICAgPGg0PjxGb250QXdlc29tZUljb24gaWNvbj17ZmFTaG9wcGluZ0Jhc2tldH0gc2l6ZT1cInhzXCIgY29sb3I9XCIjMzQzYTQwXCIgLz4g4Lij4LmJ4Liy4LiZ4Lit4Liy4Lir4Liy4Lij4LiX4Lix4LmJ4LiH4Lir4Lih4LiUIChBbGwgUmVzdGF1cmFudHMpPC9oND5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDQgfX0+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBhcz17YC9hZGRyZXN0YXVyYW50L2B9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hZGRyZXN0YXVyYW50cy9gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFQbHVzU3F1YXJlfSBcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJ4c1wiIGNvbG9yPVwid2hpdGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIC8+Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICDguYDguJ7guLTguYjguKHguKPguYnguLLguJnguK3guLLguKvguLLguKNcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwLCBjb2xvcjogXCJyZWRcIiwgd2hpdGVTcGFjZTogXCJwcmUtbGluZVwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTZWFyY2h9IGNvbG9yPVwicmVkXCIgLz4mbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAge2DguKPguYnguLLguJnguJfguLHguYnguIfguKvguKHguJQgJHtXaG9sZXJlc30g4Lij4LmJ4Liy4LiZICggVGhlcmUgYXJlICR7V2hvbGVyZXN9IFJlc3RhdXJhbnRzICkgXFxuIGB9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fT5cclxuICAgICAgICAgIDxSZWFjdFBhZ2luYXRlXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c0xhYmVsPXsncHJldmlvdXMnfVxyXG4gICAgICAgICAgICAgICAgbmV4dExhYmVsPXsnbmV4dCd9XHJcbiAgICAgICAgICAgICAgICBicmVha0xhYmVsPXsnLi4uJ31cclxuICAgICAgICAgICAgICAgIGJyZWFrQ2xhc3NOYW1lPXsnYnJlYWstbWUnfVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPXsnYWN0aXZlJ31cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzTmFtZT17J3BhZ2luYXRpb24nfVxyXG4gICAgICAgICAgICAgICAgc3ViQ29udGFpbmVyQ2xhc3NOYW1lPXsncGFnZXMgcGFnaW5hdGlvbid9XHJcblxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFBhZ2U9ezEgLSAxfVxyXG4gICAgICAgICAgICAgICAgcGFnZUNvdW50PXtwYWdlQ291bnR9IC8vcGFnZSBjb3VudFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luUGFnZXNEaXNwbGF5ZWQ9ezJ9XHJcbiAgICAgICAgICAgICAgICBwYWdlUmFuZ2VEaXNwbGF5ZWQ9ezV9XHJcbiAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3BhZ2dpbmF0aW9uSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVJbml0aWFsQ2FsbGJhY2s9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVMaW5rQ2xhc3NOYW1lPXsnYWN0aXZlJ31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7c2VhcmNoUXVlcnkubWFwKChyZXMpID0+IChcclxuICAgICAgICAgICAgPENvbCB4cz1cIjZcIiBzbT1cIjRcIiBrZXk9e3Jlcy5pZH0+XHJcbiAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMC41cmVtIDIwcHggMC41cmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZEltZ1xyXG4gICAgICAgICAgICAgICAgICB0b3A9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMjUwIH19XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuaW1hZ2VbMF0gIT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHJlcy5pbWFnZVswXS51cmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgaHR0cHM6Ly9zdHJhcGl1cGxvYWR0b2V5LnMzLmFtYXpvbmF3cy5jb20vaXN0b2NrcGhvdG9fOTIyOTYyMzU0XzYxMng2MTJfMGY1YTBlYWJjNC5qcGdgXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuaW1hZ2VbMF0gIT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L3VwbG9hZHMvJHtyZXMuaW1hZ2UudXJsfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS91cGxvYWRzL2lzdG9ja3Bob3RvLTkyMjk2MjM1NC02MTJ4NjEyLmpwZ2BcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPjxiPntyZXMubmFtZX08L2I+PC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dD57cmVzLmRlc2NyaXB0aW9ufTwvQ2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGFzPXtgL3Jlc3RhdXJhbnRzLyR7cmVzLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9yZXN0YXVyYW50cz9pZD0ke3Jlcy5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+VmlldzwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgIC8qYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGE6bGluayB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICAgIC5jYXJkLWNvbHVtbnMge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uLWNvdW50OiAzO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLyouY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgICAucG9zdHMge1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5wYWdpbmF0aW9uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5hY3RpdmUgYXtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdCAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblx0XHRcdFx0ICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L01lZGlhUXVlcnk+XHJcbiAgICAgICAgPE1lZGlhUXVlcnkgcXVlcnk9JyhtYXgtZGV2aWNlLXdpZHRoOiAxMjI0cHgpJz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDcsIG1hcmdpbkxlZnQ6IDUsIGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Cb3R0b206IDIwLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBhcz17YC9hZGRyZXN0YXVyYW50L2B9XHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYWRkcmVzdGF1cmFudHMvYH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZzogMjAsIHdpZHRoOiAyMDAsIGZvbnRTaXplOiAyMH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFQbHVzU3F1YXJlfSBcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJ4c1wiIGNvbG9yPVwid2hpdGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIC8+Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICDguYDguJ7guLTguYjguKHguKPguYnguLLguJnguK3guLLguKvguLLguKNcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDQwLCBtYXJnaW5Ub3A6IDUsIGNvbG9yOiBcIiMzNDNhNDBcIiwgd2hpdGVTcGFjZTogXCJwcmUtbGluZVwiIH19PlxyXG4gICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gXHJcbiAgICAgICAgICAgICAgICBpY29uPXtmYVNob3BwaW5nQmFza2V0fSBcclxuICAgICAgICAgICAgICAgIHNpemU9XCJ4c1wiIGNvbG9yPVwiIzM0M2E0MFwiIFxyXG4gICAgICAgICAgICAgICAgLz4gXHJcbiAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgIHtcIuC4o+C5ieC4suC4meC4reC4suC4q+C4suC4o+C4l+C4seC5ieC4h+C4q+C4oeC4lCBcXG5cIn1cclxuICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAge1wiKEFsbCBSZXN0YXVyYW50cylcIn1cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwLCBjb2xvcjogXCJyZWRcIiwgd2hpdGVTcGFjZTogXCJwcmUtbGluZVwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTZWFyY2h9IGNvbG9yPVwicmVkXCIgLz4mbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAge2DguKPguYnguLLguJnguJfguLHguYnguIfguKvguKHguJQgJHtXaG9sZXJlc30g4Lij4LmJ4Liy4LiZIFxcbiBgfSAmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAge2AoIFRoZXJlIGFyZSAke1dob2xlcmVzfSBSZXN0YXVyYW50cyApYH1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19PlxyXG4gICAgICAgICAgPFJlYWN0UGFnaW5hdGVcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzTGFiZWw9eydwcmV2aW91cyd9XHJcbiAgICAgICAgICAgICAgICBuZXh0TGFiZWw9eyduZXh0J31cclxuICAgICAgICAgICAgICAgIGJyZWFrTGFiZWw9eycuLi4nfVxyXG4gICAgICAgICAgICAgICAgYnJlYWtDbGFzc05hbWU9eydicmVhay1tZSd9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9eydhY3RpdmUnfVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lPXsncGFnaW5hdGlvbid9XHJcbiAgICAgICAgICAgICAgICBzdWJDb250YWluZXJDbGFzc05hbWU9eydwYWdlcyBwYWdpbmF0aW9uJ31cclxuXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsUGFnZT17MSAtIDF9XHJcbiAgICAgICAgICAgICAgICBwYWdlQ291bnQ9e3BhZ2VDb3VudH0gLy9wYWdlIGNvdW50XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5QYWdlc0Rpc3BsYXllZD17Mn1cclxuICAgICAgICAgICAgICAgIHBhZ2VSYW5nZURpc3BsYXllZD17NX1cclxuICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17cGFnZ2luYXRpb25IYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZUluaXRpYWxDYWxsYmFjaz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGFjdGl2ZUxpbmtDbGFzc05hbWU9eydhY3RpdmUnfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHtzZWFyY2hRdWVyeS5tYXAoKHJlcykgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHhzPVwiNlwiIHNtPVwiNFwiIGtleT17cmVzLmlkfT5cclxuICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW46IFwiMCAwLjVyZW0gMjBweCAwLjVyZW1cIiB9fT5cclxuICAgICAgICAgICAgICAgIDxDYXJkSW1nXHJcbiAgICAgICAgICAgICAgICAgIHRvcD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAyNTAgfX1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbWFnZVswXSAhPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcmVzLmltYWdlWzBdLnVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBodHRwczovL3N0cmFwaXVwbG9hZHRvZXkuczMuYW1hem9uYXdzLmNvbS9pc3RvY2twaG90b185MjI5NjIzNTRfNjEyeDYxMl8wZjVhMGVhYmM0LmpwZ2BcclxuICAgICAgICAgICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbWFnZVswXSAhPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0ke3Jlcy5pbWFnZVswXS51cmx9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L3VwbG9hZHMvaXN0b2NrcGhvdG8tOTIyOTYyMzU0LTYxMng2MTIuanBnYFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+PGI+e3Jlcy5uYW1lfTwvYj48L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgPENhcmRUZXh0PntyZXMuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgYXM9e2AvcmVzdGF1cmFudHMvJHtyZXMuaWR9YH1cclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3Jlc3RhdXJhbnRzP2lkPSR7cmVzLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5WaWV3PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgLyphIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYTpsaW5rIHtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgICAgLmNhcmQtY29sdW1ucyB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4tY291bnQ6IDM7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAvKi5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICAgIC5wb3N0cyB7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnBhZ2luYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmFjdGl2ZSBhe1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdFx0ICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHRcdFx0XHQgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvTWVkaWFRdWVyeT5cclxuXHJcbiAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgIFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDxoMT5ObyBSZXN0YXVyYW50cyBGb3VuZDwvaDE+O1xyXG4gICAgfVxyXG4gIH1cclxuICAvL3JldHVybiA8aDU+QWRkIFJlc3RhdXJhbnRzPC9oNT47XHJcbiAgcmV0dXJuIDxoNSBzdHlsZT17e2NvbG9yOiBcInJlZFwifX0+IeC5hOC4oeC5iOC4nuC4muC4o+C5ieC4suC4meC4reC4suC4q+C4suC4oyAoIE5vIFJlc3RhdXJhbnRzIEZvdW5kICk8L2g1PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudExpc3Q7Il19 */\n/*@ sourceURL=C:\\\\xampp\\\\htdocs\\\\next-react-hooks-strapi-food-delivery\\\\frontend\\\\components\\\\RestaurantList\\\\index.js */")));
    } else {
      return __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467,
          columnNumber: 14
        }
      }, "No Restaurants Found");
    }
  } //return <h5>Add Restaurants</h5>;


  return __jsx("h5", {
    style: {
      color: "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 10
    }
  }, "!\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E23\u0E49\u0E32\u0E19\u0E2D\u0E32\u0E2B\u0E32\u0E23 ( No Restaurants Found )");
}

_s(RestaurantList, "c4wThDKTO6FwLbzvRL9MPe5bD6c=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"]];
});

_c = RestaurantList;
/* harmony default export */ __webpack_exports__["default"] = (RestaurantList);

var _c;

$RefreshReg$(_c, "RestaurantList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN0YXVyYW50TGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJRVUVSWSIsImdxbCIsIlJlc3RhdXJhbnRMaXN0IiwicHJvcHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiV2hvbGVyZXMiLCJzZXRXaG9sZXJlcyIsInJvdXRlciIsInVzZVJvdXRlciIsInBhZ2UiLCJxdWVyeSIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwic3RhcnQiLCJsaW1pdCIsIm5hbWUiLCJzZWFyY2giLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiZmV0Y2hNb3JlIiwiYXhpb3MiLCJnZXQiLCJwcm9jZXNzIiwidGhlbiIsInJlc3BvbnNlIiwicmVzdGF1IiwiY29uc29sZSIsImxvZyIsInBhZ2VDb3VudCIsInJlc3RhdXJhbnRzIiwibGVuZ3RoIiwic2VhcmNoUXVlcnkiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwicGFnZ2luYXRpb25IYW5kbGVyIiwiY3VycmVudFBhdGgiLCJwYXRobmFtZSIsImN1cnJlbnRRdWVyeSIsInNlbGVjdGVkIiwicHVzaCIsInVwZGF0ZVF1ZXJ5IiwicHJldiIsImZldGNoTW9yZVJlc3VsdCIsIk9iamVjdCIsImFzc2lnbiIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsImNvbG9yIiwiZmFTaG9wcGluZ0Jhc2tldCIsImZhUGx1c1NxdWFyZSIsIndoaXRlU3BhY2UiLCJmYVNlYXJjaCIsIm1hcmdpbkJvdHRvbSIsIm1hcCIsInJlcyIsImlkIiwibWFyZ2luIiwiaGVpZ2h0IiwiaW1hZ2UiLCJ1cmwiLCJkZXNjcmlwdGlvbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInRleHRBbGlnbiIsInBhZGRpbmciLCJ3aWR0aCIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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S0FoWEQsTUFnWE87QUFDTCxhQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQVA7QUFDRDtBQUNGLEdBN2E0QixDQThhN0I7OztBQUNBLFNBQU87QUFBSSxTQUFLLEVBQUU7QUFBQ1IsV0FBSyxFQUFFO0FBQVIsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNIQUFQO0FBQ0Q7O0dBaGJRakQsYztVQUdRTyxzRCxFQVM2QkcsNEQ7OztLQVpyQ1YsYztBQWtiTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzAzZWUwZTIwNzk4ODY3MTU2N2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNvbXBvbmVudHMvUmVzdGF1cmFudExpc3QvaW5kZXguanMgKi9cclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiO1xyXG5pbXBvcnQgeyBncWwgfSBmcm9tIFwiYXBvbGxvLWJvb3N0XCI7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgQ2FyZEJvZHksXHJcbiAgQ2FyZEltZyxcclxuICBDYXJkVGV4dCxcclxuICBDYXJkVGl0bGUsXHJcbiAgUm93LFxyXG4gIENvbCxcclxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdFBhZ2luYXRlIGZyb20gJ3JlYWN0LXBhZ2luYXRlJztcclxuaW1wb3J0IFJvdXRlciwgeyB3aXRoUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhU2hvcHBpbmdCYXNrZXQsIGZhU2VhcmNoLCBmYVBsdXNTcXVhcmUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCBNZWRpYVF1ZXJ5IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUnXHJcblxyXG5jb25zdCBRVUVSWSA9IGdxbGBcclxuICAgIHF1ZXJ5IHJlc3RhdXJhbnRzKCRzdGFydDogSW50LCAkbGltaXQ6IEludCwgJG5hbWUgOiBTdHJpbmchKSB7XHJcbiAgICAgIFxyXG4gICAgICByZXN0YXVyYW50cyhzdGFydDogJHN0YXJ0LCBsaW1pdDogJGxpbWl0LCB3aGVyZTogeyBuYW1lX2NvbnRhaW5zOiAkbmFtZSB9KSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFJlc3RhdXJhbnRMaXN0KHByb3BzKSB7XHJcbiAgY29uc3QgW1dob2xlcmVzLCBzZXRXaG9sZXJlc10gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qge3BhZ2V9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIC8qY29uc3Qgc3RhcnRlID0gMDtcclxuICBpZih7cGFnZX0gPT0gMil7XHJcbiAgICBjb25zdCBzdGFydGUgPSA1O1xyXG4gIH1cclxuICBlbHNle1xyXG4gICAgY29uc3Qgc3RhcnRlID0gMDtcclxuICB9Ki9cclxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhLCBmZXRjaE1vcmUgfSA9IHVzZVF1ZXJ5KFFVRVJZLCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgLy9kYXRlOiBkYXRlLFxyXG4gICAgICAvL29mZnNldDogMCxcclxuICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgIGxpbWl0OiAxMCxcclxuICAgICAgbmFtZTogcHJvcHMuc2VhcmNoLFxyXG4gICAgICAvL2xpbWl0OiAxMCxcclxuICAgICAgLy9zdGFydDogc3RhcnRlLFxyXG4gICAgICAvL3Jlc2VsbEluZGV4OiByZXNlbGxGaWx0ZXIsXHJcbiAgICAgIC8vYnJhbmRDYXRlZ29yaWVOYW1lOiBicmFuZEZpbHRlclxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpZiAoZXJyb3IpIHJldHVybiBcIkVycm9yIGxvYWRpbmcgcmVzdGF1cmFudHNcIjtcclxuICAvL2lmIHJlc3RhdXJhbnRzIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBHcmFwaFFMIHF1ZXJ5LCBydW4gdGhlIGZpbHRlciBxdWVyeVxyXG4gIC8vYW5kIHNldCBlcXVhbCB0byB2YXJpYWJsZSByZXN0YXVyYW50U2VhcmNoXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8aDE+RmV0Y2hpbmc8L2gxPjtcclxuICBcclxuICAvL3NldFdob2xlcmVzKGRhdGEucmVzdGF1cmFudHMubGVuZ3RoKTtcclxuIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9yZXN0YXVyYW50cy9jb3VudC8/bmFtZV9jb250YWlucz0ke3Byb3BzLnNlYXJjaH1gKVxyXG4gIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIGNvbnN0IHJlc3RhdSA9cmVzcG9uc2UuZGF0YTtcclxuICAgIHNldFdob2xlcmVzKHJlc3RhdSk7XHJcbiAgICAvL2FsZXJ0KHJlc3RhdSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN0YXUpO1xyXG4gIH0sIGVycm9yID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9KTtcclxuICBcclxuICB2YXIgcGFnZUNvdW50ID0gV2hvbGVyZXMgLyAxMDtcclxuICBpZihwYWdlQ291bnQgPCAxKXtcclxuICAgIHBhZ2VDb3VudCA9IDE7XHJcbiAgfVxyXG4gIC8vYWxlcnQocGFnZUNvdW50KTtcclxuICAvL2NvbnN0IHBhZ2VDb3VudCA9IDU7XHJcbiAgLy9hbGVydChhbGxwLmRhdGEuY29kZSk7XHJcblxyXG4gIGlmIChkYXRhLnJlc3RhdXJhbnRzICYmIGRhdGEucmVzdGF1cmFudHMubGVuZ3RoKSB7XHJcbiAgICBcclxuICAgIC8vc2VhcmNoUXVlcnlcclxuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gZGF0YS5yZXN0YXVyYW50cy5maWx0ZXIoKHF1ZXJ5KSA9PlxyXG4gICAgICBxdWVyeS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoKVxyXG4gICAgKTtcclxuICAgIC8vc2V0V2hvbGVyZXMoZGF0YS5yZXN0YXVyYW50cy5sZW5ndGgpO1xyXG4gICAgLy9jb25zdCBwYWdlQ291bnQgPSBXaG9sZXJlcyAvIDEwO1xyXG4gICAgaWYgKHNlYXJjaFF1ZXJ5Lmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2dpbmF0aW9uSGFuZGxlciA9IChwYWdlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhdGggPSByb3V0ZXIucGF0aG5hbWU7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFF1ZXJ5ID0geyAuLi5yb3V0ZXIucXVlcnkgfTtcclxuICAgICAgICBjdXJyZW50UXVlcnkucGFnZSA9IHBhZ2Uuc2VsZWN0ZWQgKyAxO1xyXG4gICAgICAgIC8vYWxlcnQocGFnZS5zZWxlY3RlZCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwYWdlLnNlbGVjdGVkKTtcclxuICAgICAgICBcclxuICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiBjdXJyZW50UGF0aCxcclxuICAgICAgICAgICAgLy9xdWVyeTogY3VycmVudFF1ZXJ5LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICBmZXRjaE1vcmUoe1xyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgLy9zdGFydDogZGF0YS5yZXN0YXVyYW50cy5sZW5ndGggKiBjdXJyZW50UXVlcnkucGFnZSAtIDEwLFxyXG4gICAgICAgICAgc3RhcnQ6IDEwICogKHBhZ2Uuc2VsZWN0ZWQgKyAxKSAtIDEwLFxyXG4gICAgICAgICAgbGltaXQ6IDEwLFxyXG4gICAgICAgICAgbmFtZTogcHJvcHMuc2VhcmNoLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlUXVlcnk6IChwcmV2LCB7IGZldGNoTW9yZVJlc3VsdCB9KSA9PiB7XHJcbiAgICAgICAgICAvL3NldFdob2xlcmVzKHNlYXJjaFF1ZXJ5Lmxlbmd0aCk7XHJcbiAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkgcmV0dXJuIHByZXY7XHJcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldiwge1xyXG4gICAgICAgICAgICAvL3Jlc3RhdXJhbnRzOiBbLi4ucHJldi5yZXN0YXVyYW50cywgLi4uZmV0Y2hNb3JlUmVzdWx0LnJlc3RhdXJhbnRzXVxyXG4gICAgICAgICAgICByZXN0YXVyYW50czogWy4uLmZldGNoTW9yZVJlc3VsdC5yZXN0YXVyYW50c11cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgfTtcclxuICAgICAgLy9jb25zdCBwYWdlQ291bnQgPSBzZWFyY2hRdWVyeS5sZW5ndGggLyAxMDtcclxuICAgICAgLy9zZXRXaG9sZXJlcyhzZWFyY2hRdWVyeS5sZW5ndGgpO1xyXG4gICAgICAvL2NvbnN0IHBhZ2VDb3VudCA9IFdob2xlcmVzIC8gMTA7XHJcbiAgICAgIC8vY29uc3QgcGFnZUNvdW50ID0gNTtcclxuICAgICAgLy9jb25zdCBwYWdlQ291bnQgPSBkYXRhLnJlc3RhdXJhbnRzLmxlbmd0aCAvIDEwO1xyXG4gICAgICAvKmNvbnN0IHBhZ2dpbmF0aW9uSGFuZGxlciA9IChwYWdlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhdGggPSByb3V0ZXIucGF0aG5hbWU7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFF1ZXJ5ID0geyAuLi5yb3V0ZXIucXVlcnkgfTtcclxuICAgICAgICBjdXJyZW50UXVlcnkucGFnZSA9IHBhZ2Uuc2VsZWN0ZWQgKyAxO1xyXG4gICAgICAgIC8vYWxlcnQoY3VycmVudFF1ZXJ5LnBhZ2UpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6IGN1cnJlbnRQYXRoLFxyXG4gICAgICAgICAgICBxdWVyeTogY3VycmVudFF1ZXJ5LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vdXNlIHN0YXRlIHRvIGtlZXAgIHRoZSBzZWFyY2hRdWVyeS5sZW5ndGggdmFsKCkvLy8vLy8vXHJcbiAgICAgICAgXHJcbiAgICAgICAgZmV0Y2hNb3JlKHtcclxuICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAvL3N0YXJ0OiBkYXRhLnJlc3RhdXJhbnRzLmxlbmd0aCAqIGN1cnJlbnRRdWVyeS5wYWdlIC0gMTAsXHJcbiAgICAgICAgICAgIHN0YXJ0OiAxMCAqIGN1cnJlbnRRdWVyeS5wYWdlIC0gMTAsXHJcbiAgICAgICAgICAgIGxpbWl0OiAxMCxcclxuICAgICAgICAgICAgbmFtZTogcHJvcHMuc2VhcmNoLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldiwgeyBmZXRjaE1vcmVSZXN1bHQgfSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRXaG9sZXJlcyhzZWFyY2hRdWVyeS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkgcmV0dXJuIHByZXY7XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2LCB7XHJcbiAgICAgICAgICAgICAgLy9yZXN0YXVyYW50czogWy4uLnByZXYucmVzdGF1cmFudHMsIC4uLmZldGNoTW9yZVJlc3VsdC5yZXN0YXVyYW50c11cclxuICAgICAgICAgICAgICByZXN0YXVyYW50czogWy4uLmZldGNoTW9yZVJlc3VsdC5yZXN0YXVyYW50c11cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgfTsqL1xyXG5cclxuICAgICAgLy9jb25zdCB7cGFnZX0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICAgIC8vY29uc3QgY29udGVudCA9IHtwYWdlfTtcclxuICAgICAgLypjb25zdCBwYWdlID0gMTtcclxuICAgICAgY29uc3QgY3VycmVudFF1ZXJ5ID0geyAuLi5yb3V0ZXIucXVlcnkgfTtcclxuICAgICAgY3VycmVudFF1ZXJ5LnBhZ2UgPSBwYWdlLnNlbGVjdGVkICsgMTtcclxuICAgICAgY29uc3QgY29udGVudCA9IGN1cnJlbnRRdWVyeS5wYWdlOyovXHJcbiAgICAgIC8vYWxlcnQocGFnZUNvdW50KTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Um93PlxyXG4gICAgXHJcbiAgICAgICAgPE1lZGlhUXVlcnkgcXVlcnk9JyhtaW4tZGV2aWNlLXdpZHRoOiAxMjI0cHgpJz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDM1LCBtYXJnaW5MZWZ0OjEwLCBtYXJnaW5Ub3A6IDUsIGNvbG9yOiBcIiMzNDNhNDBcIiwgfX0+XHJcbiAgICAgICAgICAgICAgPGg0PjxGb250QXdlc29tZUljb24gaWNvbj17ZmFTaG9wcGluZ0Jhc2tldH0gc2l6ZT1cInhzXCIgY29sb3I9XCIjMzQzYTQwXCIgLz4g4Lij4LmJ4Liy4LiZ4Lit4Liy4Lir4Liy4Lij4LiX4Lix4LmJ4LiH4Lir4Lih4LiUIChBbGwgUmVzdGF1cmFudHMpPC9oND5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDQgfX0+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICBhcz17YC9hZGRyZXN0YXVyYW50L2B9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hZGRyZXN0YXVyYW50cy9gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFQbHVzU3F1YXJlfSBcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJ4c1wiIGNvbG9yPVwid2hpdGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIC8+Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICDguYDguJ7guLTguYjguKHguKPguYnguLLguJnguK3guLLguKvguLLguKNcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwLCBjb2xvcjogXCJyZWRcIiwgd2hpdGVTcGFjZTogXCJwcmUtbGluZVwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTZWFyY2h9IGNvbG9yPVwicmVkXCIgLz4mbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAge2DguKPguYnguLLguJnguJfguLHguYnguIfguKvguKHguJQgJHtXaG9sZXJlc30g4Lij4LmJ4Liy4LiZICggVGhlcmUgYXJlICR7V2hvbGVyZXN9IFJlc3RhdXJhbnRzICkgXFxuIGB9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fT5cclxuICAgICAgICAgIDxSZWFjdFBhZ2luYXRlXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c0xhYmVsPXsncHJldmlvdXMnfVxyXG4gICAgICAgICAgICAgICAgbmV4dExhYmVsPXsnbmV4dCd9XHJcbiAgICAgICAgICAgICAgICBicmVha0xhYmVsPXsnLi4uJ31cclxuICAgICAgICAgICAgICAgIGJyZWFrQ2xhc3NOYW1lPXsnYnJlYWstbWUnfVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPXsnYWN0aXZlJ31cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzTmFtZT17J3BhZ2luYXRpb24nfVxyXG4gICAgICAgICAgICAgICAgc3ViQ29udGFpbmVyQ2xhc3NOYW1lPXsncGFnZXMgcGFnaW5hdGlvbid9XHJcblxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFBhZ2U9ezEgLSAxfVxyXG4gICAgICAgICAgICAgICAgcGFnZUNvdW50PXtwYWdlQ291bnR9IC8vcGFnZSBjb3VudFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luUGFnZXNEaXNwbGF5ZWQ9ezJ9XHJcbiAgICAgICAgICAgICAgICBwYWdlUmFuZ2VEaXNwbGF5ZWQ9ezV9XHJcbiAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3BhZ2dpbmF0aW9uSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVJbml0aWFsQ2FsbGJhY2s9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVMaW5rQ2xhc3NOYW1lPXsnYWN0aXZlJ31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7c2VhcmNoUXVlcnkubWFwKChyZXMpID0+IChcclxuICAgICAgICAgICAgPENvbCB4cz1cIjZcIiBzbT1cIjRcIiBrZXk9e3Jlcy5pZH0+XHJcbiAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3sgbWFyZ2luOiBcIjAgMC41cmVtIDIwcHggMC41cmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZEltZ1xyXG4gICAgICAgICAgICAgICAgICB0b3A9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMjUwIH19XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuaW1hZ2VbMF0gIT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHJlcy5pbWFnZVswXS51cmxcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgaHR0cHM6Ly9zdHJhcGl1cGxvYWR0b2V5LnMzLmFtYXpvbmF3cy5jb20vaXN0b2NrcGhvdG9fOTIyOTYyMzU0XzYxMng2MTJfMGY1YTBlYWJjNC5qcGdgXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuaW1hZ2VbMF0gIT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L3VwbG9hZHMvJHtyZXMuaW1hZ2UudXJsfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS91cGxvYWRzL2lzdG9ja3Bob3RvLTkyMjk2MjM1NC02MTJ4NjEyLmpwZ2BcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFRpdGxlPjxiPntyZXMubmFtZX08L2I+PC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dD57cmVzLmRlc2NyaXB0aW9ufTwvQ2FyZFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGFzPXtgL3Jlc3RhdXJhbnRzLyR7cmVzLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9yZXN0YXVyYW50cz9pZD0ke3Jlcy5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+VmlldzwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgIC8qYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGE6bGluayB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICAgIC5jYXJkLWNvbHVtbnMge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uLWNvdW50OiAzO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLyouY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgICAucG9zdHMge1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5wYWdpbmF0aW9uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5hY3RpdmUgYXtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdCAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblx0XHRcdFx0ICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L01lZGlhUXVlcnk+XHJcbiAgICAgICAgPE1lZGlhUXVlcnkgcXVlcnk9JyhtYXgtZGV2aWNlLXdpZHRoOiAxMjI0cHgpJz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDcsIG1hcmdpbkxlZnQ6IDUsIGRpc3BsYXk6IFwiZmxleFwiLCBtYXJnaW5Cb3R0b206IDIwLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBhcz17YC9hZGRyZXN0YXVyYW50L2B9XHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AvYWRkcmVzdGF1cmFudHMvYH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZzogMjAsIHdpZHRoOiAyMDAsIGZvbnRTaXplOiAyMH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj17ZmFQbHVzU3F1YXJlfSBcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJ4c1wiIGNvbG9yPVwid2hpdGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIC8+Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICDguYDguJ7guLTguYjguKHguKPguYnguLLguJnguK3guLLguKvguLLguKNcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDQwLCBtYXJnaW5Ub3A6IDUsIGNvbG9yOiBcIiMzNDNhNDBcIiwgd2hpdGVTcGFjZTogXCJwcmUtbGluZVwiIH19PlxyXG4gICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gXHJcbiAgICAgICAgICAgICAgICBpY29uPXtmYVNob3BwaW5nQmFza2V0fSBcclxuICAgICAgICAgICAgICAgIHNpemU9XCJ4c1wiIGNvbG9yPVwiIzM0M2E0MFwiIFxyXG4gICAgICAgICAgICAgICAgLz4gXHJcbiAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgIHtcIuC4o+C5ieC4suC4meC4reC4suC4q+C4suC4o+C4l+C4seC5ieC4h+C4q+C4oeC4lCBcXG5cIn1cclxuICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAge1wiKEFsbCBSZXN0YXVyYW50cylcIn1cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwLCBjb2xvcjogXCJyZWRcIiwgd2hpdGVTcGFjZTogXCJwcmUtbGluZVwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTZWFyY2h9IGNvbG9yPVwicmVkXCIgLz4mbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAge2DguKPguYnguLLguJnguJfguLHguYnguIfguKvguKHguJQgJHtXaG9sZXJlc30g4Lij4LmJ4Liy4LiZIFxcbiBgfSAmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAge2AoIFRoZXJlIGFyZSAke1dob2xlcmVzfSBSZXN0YXVyYW50cyApYH1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19PlxyXG4gICAgICAgICAgPFJlYWN0UGFnaW5hdGVcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzTGFiZWw9eydwcmV2aW91cyd9XHJcbiAgICAgICAgICAgICAgICBuZXh0TGFiZWw9eyduZXh0J31cclxuICAgICAgICAgICAgICAgIGJyZWFrTGFiZWw9eycuLi4nfVxyXG4gICAgICAgICAgICAgICAgYnJlYWtDbGFzc05hbWU9eydicmVhay1tZSd9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9eydhY3RpdmUnfVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lPXsncGFnaW5hdGlvbid9XHJcbiAgICAgICAgICAgICAgICBzdWJDb250YWluZXJDbGFzc05hbWU9eydwYWdlcyBwYWdpbmF0aW9uJ31cclxuXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsUGFnZT17MSAtIDF9XHJcbiAgICAgICAgICAgICAgICBwYWdlQ291bnQ9e3BhZ2VDb3VudH0gLy9wYWdlIGNvdW50XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5QYWdlc0Rpc3BsYXllZD17Mn1cclxuICAgICAgICAgICAgICAgIHBhZ2VSYW5nZURpc3BsYXllZD17NX1cclxuICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17cGFnZ2luYXRpb25IYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZUluaXRpYWxDYWxsYmFjaz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGFjdGl2ZUxpbmtDbGFzc05hbWU9eydhY3RpdmUnfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHtzZWFyY2hRdWVyeS5tYXAoKHJlcykgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHhzPVwiNlwiIHNtPVwiNFwiIGtleT17cmVzLmlkfT5cclxuICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBtYXJnaW46IFwiMCAwLjVyZW0gMjBweCAwLjVyZW1cIiB9fT5cclxuICAgICAgICAgICAgICAgIDxDYXJkSW1nXHJcbiAgICAgICAgICAgICAgICAgIHRvcD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAyNTAgfX1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbWFnZVswXSAhPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcmVzLmltYWdlWzBdLnVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGBodHRwczovL3N0cmFwaXVwbG9hZHRvZXkuczMuYW1hem9uYXdzLmNvbS9pc3RvY2twaG90b185MjI5NjIzNTRfNjEyeDYxMl8wZjVhMGVhYmM0LmpwZ2BcclxuICAgICAgICAgICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5pbWFnZVswXSAhPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0ke3Jlcy5pbWFnZVswXS51cmx9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L3VwbG9hZHMvaXN0b2NrcGhvdG8tOTIyOTYyMzU0LTYxMng2MTIuanBnYFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+PGI+e3Jlcy5uYW1lfTwvYj48L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgPENhcmRUZXh0PntyZXMuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgYXM9e2AvcmVzdGF1cmFudHMvJHtyZXMuaWR9YH1cclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3Jlc3RhdXJhbnRzP2lkPSR7cmVzLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5WaWV3PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgLyphIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYTpsaW5rIHtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgICAgLmNhcmQtY29sdW1ucyB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4tY291bnQ6IDM7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAvKi5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICAgIC5wb3N0cyB7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnBhZ2luYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmFjdGl2ZSBhe1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdFx0ICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHRcdFx0XHQgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvTWVkaWFRdWVyeT5cclxuXHJcbiAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgIFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDxoMT5ObyBSZXN0YXVyYW50cyBGb3VuZDwvaDE+O1xyXG4gICAgfVxyXG4gIH1cclxuICAvL3JldHVybiA8aDU+QWRkIFJlc3RhdXJhbnRzPC9oNT47XHJcbiAgcmV0dXJuIDxoNSBzdHlsZT17e2NvbG9yOiBcInJlZFwifX0+IeC5hOC4oeC5iOC4nuC4muC4o+C5ieC4suC4meC4reC4suC4q+C4suC4oyAoIE5vIFJlc3RhdXJhbnRzIEZvdW5kICk8L2g1PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudExpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==