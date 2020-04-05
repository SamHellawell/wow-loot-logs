webpackHotUpdate("static/development/pages/player.js",{

/***/ "./pages/player.js":
/*!*************************!*\
  !*** ./pages/player.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerStats; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _src_table_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/table-view */ "./src/table-view.js");
/* harmony import */ var _services_db__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/db */ "./services/db.js");

var _jsxFileName = "/ssd-extra/remote.com/lootapp/pages/player.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






 // TODO: put in sep file

var columnMaps = {
  player: 'Player Name',
  date: 'Date',
  item: 'Item',
  itemID: 'Item ID',
  itemString: 'Item String',
  votes: 'Votes',
  response: 'Response',
  "class": 'Class',
  instance: 'Instance',
  boss: 'Boss Name',
  gear1: 'Prev Gear (slot 1)',
  gear2: 'Prev Gear (slot 2)',
  subType: 'Item Type',
  equipLoc: 'Slot Type',
  note: 'Reward Reasoning',
  logid: 'Unique Log ID'
};
function PlayerStats(_ref) {
  var query = _ref.query;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      logsList = _useState[0],
      setLogsList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('date'),
      orderBy = _useState2[0],
      setOrderBy = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('DESC'),
      order = _useState3[0],
      setOrder = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(query.name || 'Magi'),
      playerName = _useState4[0],
      setPlayerName = _useState4[1];

  function loadLogs() {
    var result;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function loadLogs$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = _services_db__WEBPACK_IMPORTED_MODULE_7__["default"].execQuery("SELECT date,item,note,response,instance,boss FROM lootlogs WHERE player LIKE \"%".concat(playerName, "%\" ORDER BY ").concat(orderBy, " ").concat(order, ";"));
            setLogsList(result[0]);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }

  function onRequestSort(event, property) {
    if (orderBy === property) {
      setOrder(order === 'ASC' ? 'DESC' : 'ASC');
    } else {
      setOrderBy(property);
      setOrder('DESC');
    }

    setLogsList(null);
    loadLogs();
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!logsList) {
      loadLogs();
    }
  }, []);
  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    my: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h4",
    component: "h1",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, "Player: ", playerName), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), logsList ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_src_table_view__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onRequestSort: onRequestSort,
    columns: logsList.columns,
    values: logsList.values,
    columnMaps: columnMaps,
    orderBy: orderBy,
    order: order,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Loading logs..."));
}

PlayerStats.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  return {
    query: query
  };
};

/***/ })

})
//# sourceMappingURL=player.js.cfca5b6502ef9848e66e.hot-update.js.map