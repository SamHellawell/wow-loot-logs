webpackHotUpdate("static/development/pages/import.js",{

/***/ "./pages/import.js":
/*!*************************!*\
  !*** ./pages/import.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Import; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _src_ProTip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/ProTip */ "./src/ProTip.js");
/* harmony import */ var _src_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/Link */ "./src/Link.js");
/* harmony import */ var _src_Copyright__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/Copyright */ "./src/Copyright.js");
/* harmony import */ var _services_db__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/db */ "./services/db.js");
var _jsxFileName = "/ssd-extra/remote.com/lootapp/pages/import.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var allowedColumns = ["player", "date", "item", "itemID", "itemString", "votes", "response", "class", "instance", "boss", "gear1", "gear2", "subType", "equipLoc", "note", "logid"];
function Import() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      csvData = _useState[0],
      setCSVData = _useState[1];

  function handleCSVChange(event) {
    setCSVData(event.target.value);
  }

  function handleCSVImport(event) {
    event.preventDefault();
    var dataSplitter = ",";
    var lineSplitter = "\n";
    var lines = csvData.split(lineSplitter);
    var columns = lines[0].split(dataSplitter);
    columns.push('logid');
    console.log('importing', lines.length, 'records with columns', columns);

    for (var i = 1; i < lines.length; i++) {
      var line = lines[i];
      var data = line.split(dataSplitter);
      var logId = data[0] + data[1] + data[2];
      data.push(logId);

      if (data.length === columns.length) {
        var query = 'INSERT INTO lootlogs("' + columns[0] + '"';
        var queryValues = '';

        for (var c = 0; c < columns.length; c++) {
          var column = columns[c];

          if (allowedColumns.indexOf(column) > -1) {
            if (c !== 0) {
              query += ', "' + column + '"';
            }

            var rowValue = data[c];

            if (column === 'date') {
              rowValue = new Date('20' + rowValue.split('/')[2], rowValue.split('/')[1] - 1, rowValue.split('/')[0]).getTime();
            }

            queryValues += (c === 0 ? '' : ', ') + '\'' + (rowValue + '').replace(/'/g, "") + '\'';
          }
        }

        query += ')\nVALUES(';
        query += queryValues + ');';

        try {
          _services_db__WEBPACK_IMPORTED_MODULE_9__["default"].runQuery(query);
          console.log('query success', query);
        } catch (error) {
          console.error('query failed', query);
          console.error('Unable to insert row ', i - 1, 'error:', error);
        }
      }
    }

    console.log('import done, export db and save it or browse pages');
  }

  function handleExport() {
    var binaryArray = _services_db__WEBPACK_IMPORTED_MODULE_9__["default"]["export"]();
    var blob = new Blob([binaryArray], {
      type: "application/x-sqlite3"
    });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'database.db';
    link.click();
  }

  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    maxWidth: "sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    my: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h4",
    component: "h1",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, "Import Loot Logs"), __jsx("form", {
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleCSVImport,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    rows: 10,
    label: "CSV Data",
    multiline: true,
    onChange: handleCSVChange,
    value: csvData,
    fullWidth: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "submit",
    variant: "contained",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, "Import")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: handleExport,
    variant: "contained",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, "Export Database"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }), __jsx(_src_Link__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: "/logs",
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, "Go to logs page")));
}

/***/ })

})
//# sourceMappingURL=import.js.b949c61baba5d260873e.hot-update.js.map