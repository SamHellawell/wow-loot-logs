webpackHotUpdate("static/development/pages/query.js",{

/***/ "./pages/query.js":
/*!************************!*\
  !*** ./pages/query.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RunQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _src_table_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/table-view */ "./src/table-view.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _services_db__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/db */ "./services/db.js");
var _jsxFileName = "/ssd-extra/remote.com/lootapp/pages/query.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













var defaultQueries = [{
  label: 'Custom Query',
  query: 'select sqlite_version()'
}, {
  label: 'All Loot',
  query: 'SELECT * FROM lootlogs'
}, {
  label: 'Items dropped by boss',
  query: 'SELECT item, boss FROM lootlogs GROUP BY item ORDER BY boss'
}, {
  label: 'Awarded loot with logged reason',
  query: 'SELECT player,note,item,response,date FROM lootlogs WHERE note!=""'
}, {
  label: 'Awarded loot without logged reason',
  query: 'SELECT player,note,item,response,date FROM lootlogs WHERE note=""'
}, {
  label: 'Search by player name',
  query: 'SELECT * FROM lootlogs WHERE player LIKE "%Magi%"'
}, {
  label: 'Search by player name in Blackwing Lair',
  query: 'SELECT * FROM lootlogs WHERE (player LIKE "%Magi%" AND instance LIKE "%Blackwing%")'
}, {
  label: 'Caster DPS loot drops',
  query: 'SELECT * FROM lootlogs WHERE (class LIKE "%MAGE%" OR class LIKE "%WARLOCK%") ORDER BY class'
}, {
  label: 'Healer loot drops',
  query: 'SELECT * FROM lootlogs WHERE (class LIKE "%PRIEST%" OR class LIKE "%SHAMAN%" OR class LIKE "%DRUID%") ORDER BY class'
}, {
  label: 'Show all players awarded loot',
  query: 'SELECT player,date FROM lootlogs GROUP BY player ORDER BY date DESC'
}];
function RunQuery() {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultQueries[0]),
      query = _useState2[0],
      setQuery = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultQueries[0].query),
      queryStr = _useState3[0],
      setQueryStr = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_services_db__WEBPACK_IMPORTED_MODULE_12__["default"].execQuery('select sqlite_version()')),
      queryResult = _useState4[0],
      setQueryResult = _useState4[1];

  var inputLabel = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);

  function handleChange(event) {
    setQuery(event.target.value);
    setQueryStr(event.target.value.query);
  }

  function handleQueryStrChange(event) {
    setQueryStr(event.target.value);
  }

  function handleRunQuery() {
    setQueryResult(null);

    try {
      var result = _services_db__WEBPACK_IMPORTED_MODULE_12__["default"].execQuery(queryStr);
      setQueryResult(result);
    } catch (e) {
      setError(e.toString());
    }
  }

  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    my: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h4",
    component: "h1",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, "Run Query"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "outlined",
    fullWidth: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ref: inputLabel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, "Default Queries"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: query,
    onChange: handleChange,
    labelWidth: 118,
    fullWidth: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, defaultQueries.map(function (query, index) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      value: query,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }
    }, query.label);
  }))), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
    rows: 6,
    label: "Query",
    multiline: true,
    variant: "outlined",
    fullWidth: true,
    value: queryStr,
    onChange: handleQueryStrChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: handleRunQuery,
    variant: "contained",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, "Run"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }), queryResult ? queryResult.map(function (result) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "h4",
      component: "h1",
      gutterBottom: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }
    }, "Result (", result.values.length, ")"), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }
    }), __jsx(_src_table_view__WEBPACK_IMPORTED_MODULE_5__["default"], {
      columns: result.columns,
      values: result.values,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 13
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 19
      }
    }));
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, error ? error : 'Executing query...'));
}

/***/ })

})
//# sourceMappingURL=query.js.3d8eef5aeeece87a1a7a.hot-update.js.map