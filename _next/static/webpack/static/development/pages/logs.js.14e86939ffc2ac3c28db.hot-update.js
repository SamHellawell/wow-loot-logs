webpackHotUpdate("static/development/pages/logs.js",{

/***/ "./src/table-view.js":
/*!***************************!*\
  !*** ./src/table-view.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "./node_modules/@material-ui/core/esm/TablePagination/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableSortLabel */ "./node_modules/@material-ui/core/esm/TableSortLabel/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/FilterList */ "./node_modules/@material-ui/icons/FilterList.js");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_20__);
var _jsxFileName = "/ssd-extra/remote.com/lootapp/src/table-view.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






















function getFormattedDate(date) {
  var year = date.getFullYear();
  var month = (1 + date.getMonth()).toString().padStart(2, '0');
  var day = date.getDate().toString().padStart(2, '0');
  return month + '/' + day + '/' + year;
}

function TableView(_ref) {
  var _this = this;

  var columns = _ref.columns,
      values = _ref.values,
      onRequestSort = _ref.onRequestSort,
      orderBy = _ref.orderBy,
      order = _ref.order,
      _ref$columnMaps = _ref.columnMaps,
      columnMaps = _ref$columnMaps === void 0 ? {} : _ref$columnMaps;

  var createSortHandler = function createSortHandler(property) {
    return function (event) {
      if (onRequestSort) {
        onRequestSort(event, property);
      }
    };
  };

  return __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-label": "Table View",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, columns.map(function (column) {
    return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
      align: "left",
      key: column,
      sortDirection: orderBy === column ? order : false,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }, onRequestSort ? __jsx(_material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_11__["default"], {
      active: orderBy === column,
      direction: orderBy === column ? order.toLowerCase() : 'ASC',
      onClick: createSortHandler(column),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 19
      }
    }, columnMaps[column] || column) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, columnMaps[column] || column));
  }))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, values.map(function (value, index) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: index,
      onClick: onRowClick,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }
    }, value.map(function (row, rowIndex) {
      var displayValue = row;

      if (columns[rowIndex] === 'date') {
        displayValue = getFormattedDate(new Date(displayValue));
      } else if (typeof displayValue === 'string') {
        var hyperLinkRegex = /=HYPERLINK\((["'])(.*?)\1;\"(.*?)\"\)/i;
        var matches = displayValue.match(hyperLinkRegex);

        if (matches && matches.length) {
          var url = matches[2];
          var text = matches[3];
          displayValue = __jsx("a", {
            href: url,
            target: "_blank",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 23
            }
          }, text);
        }
      }

      if (rowIndex === 0) {
        return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
          component: "th",
          scope: "value",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 21
          }
        }, displayValue);
      } else {
        return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
          align: "left",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 21
          }
        }, displayValue);
      }
    }));
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (TableView);

/***/ })

})
//# sourceMappingURL=logs.js.14e86939ffc2ac3c28db.hot-update.js.map