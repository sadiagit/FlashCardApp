(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/flash-card/flash-card-item.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/flash-card/flash-card-item.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ng-template let-item=\"item\" #template>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\" style=\"margin: 15px;font-weight:bold; font-size:large;\"> {{item.question}}</div>\r\n    <div class=\"col-sm-12\" style=\"margin: 15px;\" *ngIf=\"item.type == 'General'\" [innerHTML]=\"item.answer | sanitizeHtml\">\r\n      <!--https://blog.fullstacktraining.com/binding-html-with-angular/-->\r\n    </div>\r\n    <div class=\"col-sm-8\" style=\"margin: 15px;\" *ngIf=\"item.type == 'Code'\"><pre><code>{{item.answer}}</code></pre> </div>\r\n  </div>\r\n</ng-template>\r\n<kendo-scrollview [data]=\"FlashCards\"\r\n                  [width]=\"width\"\r\n                  [height]=\"height\"\r\n                  [arrows]=\"true\"\r\n                  [pageable]=\"true\" *ngIf=\"FlashCards\">\r\n  <ng-template let-item=\"item\">\r\n    <ng-template *ngTemplateOutlet=\"template; context: {item: item}\"></ng-template>\r\n  </ng-template>\r\n</kendo-scrollview>\r\n\r\n<ng-container *ngIf=\"FlashCard\"\r\n              [ngTemplateOutlet]=\"template\"\r\n              [ngTemplateOutletContext]=\"{item: FlashCard}\"></ng-container>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/flash-card/flash-card-list-item.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/flash-card/flash-card-list-item.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\" *ngIf=\"FlashCard\">\r\n    <div class=\"col-sm-12\">\r\n\r\n      <a (click)=\"openFlashCard=true\">\r\n        <h4 style=\"margin-bottom: 5px;\r\n    font-weight: bold;\r\n    font-size: large\">{{FlashCard.question}}</h4>\r\n      </a>\r\n      <span>{{FlashCard.trimmedAnswer}}</span>\r\n\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n<kendo-window [minWidth]=\"400\" [minHeight]=\"225\" [width]=\"800\" [height]=\"600\" style=\"left:0px !important;top:100px\"  title=\"Flash Card\" *ngIf=\"openFlashCard\" (close)=\"openFlashCard=false\">\r\n  <flash-card-item [FlashCard]=\"FlashCard\"></flash-card-item>\r\n</kendo-window>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/flash-card/flash-card.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/flash-card/flash-card.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n  .k-scrollview-wrap {\r\n    margin: 0 auto;\r\n    background-color: transparent;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .demo-title {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: 0;\r\n    padding: 15px;\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 24px;\r\n  }\r\n</style>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div>\r\n        <h4 style=\"margin-bottom: 25px;font-weight:bold; font-size:large\">Flash Card</h4>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row\" style=\"height:700px; margin: 20px 0px 20px 0px; \">\r\n\r\n    <div class=\"col-sm-2\" style=\"height:700px; background-color: #f5f5f5; box-shadow: 0 0 8px 0px white; border-bottom: 1px solid #ececec;margin-right:0px;\">\r\n      <div class=\"row\" >\r\n        <div class=\"col-sm-7\" style=\"margin-bottom: 15px;font-weight:bold; font-size:large; padding-top:10px\">Categories</div>\r\n        <div class=\"col-sm-3\" style=\"margin-left: 15px; padding-top:10px\"><button style=\"right:0\" (click)=\"OpenAddCategoryWindow =true;\"><span class=\"fa fa-plus\"></span></button></div>\r\n      </div>\r\n      <kendo-treeview [nodes]=\"Categories\"\r\n                      textField=\"categoryName\"\r\n                      kendoTreeViewExpandable\r\n                      kendoTreeViewSelectable\r\n                      kendoTreeViewFlatDataBinding\r\n                      idField=\"categoryId\"\r\n                      parentIdField=\"parentCategoryId\" *ngIf=\"Categories\"\r\n                      [selectBy]=\"'categoryName'\"\r\n                      [(selectedKeys)]=\"SelectedCategoryKeys\"\r\n                      (selectionChange)=\"handleCategorySelection($event)\">\r\n      </kendo-treeview>\r\n\r\n\r\n\r\n    </div>\r\n    <div class=\"col-sm-10\" style=\"padding-left:1px; margin-left:0px;left:1px;\">\r\n\r\n      <div class=\"row\" style=\"height:70px;background-color: #f5f5f5;margin:0px;\">\r\n        <div class=\"col-sm-4\" style=\"margin-top:25px;\">\r\n\r\n          <input class=\"form-control\"\r\n                 name=\"searchText\"\r\n                 style=\"width:100%; margin-bottom: 4px;\"\r\n                 placeholder=\"Search by text for a selected category...\"\r\n                 maxlength=\"300\" [(ngModel)]=\"SearchText\" />\r\n\r\n        </div>\r\n        <div class=\"col-sm-2\" style=\"margin-top:10px;\">\r\n          <button class=\"btn btn-default\" style=\"margin-top: 15px !important;\" (click)=\"LoadFlashCards(true)\"><span class=\"fa fa-search\">&nbsp;  </span> Search</button>\r\n        </div>\r\n        <div class=\"col-sm-2\" style=\"margin-top:10px;\">\r\n          <button class=\"btn btn-default\" style=\"margin-top: 15px !important;\" (click)=\"windowOpened=true\"><span class=\"fa fa-plus\">&nbsp;  </span> Add New</button>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"row\" style=\"margin:0\" *ngIf=\"isSearched\">\r\n\r\n        <div *ngFor=\"let card of FlashCards\">\r\n          <flash-card-list-item [FlashCard]=\"card\"></flash-card-list-item>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" style=\"margin:0\" *ngIf=\"!isSearched\">\r\n        <div class=\"col-sm-12\" style=\"height:630px; background-color: #f5f5f5;margin:0\">\r\n          <div style=\"padding-top:10px; margin-bottom:0px;\" *ngIf=\"FlashCards\">\r\n            <flash-card-item [FlashCards]=\"FlashCards\"></flash-card-item>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n  <kendo-window [minWidth]=\"400\" [minHeight]=\"225\" [width]=\"550\" [height]=\"100\" style=\"align-content:center;top:100px;\" title=\"New Category\" *ngIf=\"OpenAddCategoryWindow\" (close)=\"OpenAddCategoryWindow=false\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-5\">\r\n        <label>Category: </label><br />\r\n        <input class=\"form-control\"\r\n               name=\"searchText\"\r\n               style=\"width:100%; margin-bottom: 4px;\"\r\n               type=\"text\" [(ngModel)]=\"newCategory\" />\r\n        \r\n\r\n      </div>\r\n      <div class=\"col-sm-5\">\r\n        <label>Parent Category: </label><br />\r\n        <kendo-dropdownlist [data]=\"Categories\"\r\n                            [defaultItem]=\"{categoryName:null, categoryId:null}\"\r\n                            [textField]=\"'categoryName'\"\r\n                            [valueField]=\"'categoryId'\"\r\n                            [valuePrimitive]=\"true\"\r\n                            [(ngModel)]=\"newCategoryParent\">\r\n        </kendo-dropdownlist>\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        <button class=\"btn btn-primary\" style=\"margin-top:20px; width:auto\" (click)=\"addNewCategory()\">Save</button>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </kendo-window>\r\n\r\n  <kendo-window [minWidth]=\"400\" [minHeight]=\"225\" [width]=\"800\" [height]=\"650\" style=\"align-content:center; top:100px;\" title=\"New Flash Card\" *ngIf=\"windowOpened\" (close)=\"CloseFlashCardWindow()\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <label>Category: </label><br />\r\n        <kendo-dropdownlist [data]=\"Categories\"\r\n                            [textField]=\"'categoryName'\"\r\n                            [valueField]=\"'categoryId'\"\r\n                            [valuePrimitive]=\"true\"\r\n                            [(ngModel)]=\"newFlashCardCategory\">\r\n        </kendo-dropdownlist>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <label>Question: </label><br />\r\n        <textarea placeholder=\"Enter question...\" rows=\"4\" cols=\"4\" style=\"width:750px; height:50px\" [(ngModel)]=\"newFlashCardQuestion\"></textarea>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-offset-4\">\r\n        <button class=\"btn btn-default\" style=\"margin-right:5px;\" (click)=\"isGeneral=true;isCode=false;flashCardContent=null\"><span class=\"fa fa-align-justify\">&nbsp;</span> General </button>\r\n        <button class=\"btn btn-default\" (click)=\"isGeneral=false;isCode=true;flashCardContent=null\"><span class=\"fa fa-code\">&nbsp;</span> Code </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" style=\"margin-top:5px;\">\r\n\r\n      <div class=\"col-sm-12\" *ngIf=\"isGeneral\">\r\n\r\n        <kendo-editor [(ngModel)]=\"flashCardContent\" name=\"content\" style=\"height: 330px;\" *ngIf=\"isGeneral\"></kendo-editor>\r\n      </div>\r\n      <div class=\"col-sm-12\" *ngIf=\"isCode\">\r\n        <textarea style=\"width:750px;height:330px; \" placeholder=\"Enter code...\" [(ngModel)]=\"flashCardContent\"></textarea>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"row\" style=\"margin-top:5px;\">\r\n\r\n      <div class=\"col-sm-offset-9\">\r\n        <button class=\"btn btn-default\" style=\"margin-right:5px;\" (click)=\"CloseFlashCardWindow()\"><span class=\"fa fa-close\">&nbsp;</span> Cancel </button>\r\n        <button class=\"btn btn-default\" (click)=\"addNewFlashCard()\"><span class=\"fa fa-Save\">&nbsp;</span> Save </button>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n  </kendo-window>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/Base/base.service.ts":
/*!**************************************!*\
  !*** ./src/app/Base/base.service.ts ***!
  \**************************************/
/*! exports provided: BaseHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseHttpClient", function() { return BaseHttpClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");






class BaseHttpClient {
    constructor(http, toastr, spinner) {
        this.http = http;
        this.toastr = toastr;
        this.spinner = spinner;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
    }
    CreateSearchParams(randomizerAlways = false) {
        let parameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (randomizerAlways && navigator.onLine) {
            let time = new Date().getTime();
            parameters = parameters.append("random", time.toString());
        }
        return parameters;
    }
    GetDataHttpPost(url, postOjbect, displayError = true) {
        return this.http.post(url, postOjbect, { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(sr => {
            var toastr = this.toastr;
            sr.IsSuccess = function () {
                if (!this.success) {
                    toastr.error(this.message);
                }
                return this.success;
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError(url, displayError, null)));
    }
    GetDataHttpGet(url, postOjbect, displayError = true) {
        return this.http.get(url, { params: postOjbect })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(sr => {
            var toastr = this.toastr;
            sr.IsSuccess = function () {
                if (!this.success)
                    return toastr.error(this.Message);
                return this.success;
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError(url, displayError, null)));
    }
    handleError(operation = 'operation', showError, result) {
        return (error) => {
            if (error != null && error.status == 401) {
                localStorage.setItem("lastUrl", encodeURI(window.document.location.href));
                //   window.document.location.href = ApplicationManager.BaseSitePath + "Login.aspx?ReturnUrl=" + encodeURI(window.document.location.href);
                return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.statusText);
            }
            let errMsg = "Unexpected error occurred. Please try again. If the problem persists contact IT Support. <br \>Status Code: " + error.status + "<br \>Status Text: " + error.statusText;
            console.error(errMsg); // log to console instead
            if (showError) {
                this.spinner.hide();
                this.toastr.error(errMsg);
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errMsg);
        };
    }
}
BaseHttpClient.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _flash_card_flash_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flash-card/flash-card.component */ "./src/app/flash-card/flash-card.component.ts");




const routes = [
    { path: '', component: _flash_card_flash_card_component__WEBPACK_IMPORTED_MODULE_3__["FlashCardComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test.service */ "./src/app/test.service.ts");



let AppComponent = class AppComponent {
    constructor(svc) {
        this.svc = svc;
        this.title = 'app';
        this.svc.GetValues().subscribe(r => {
            console.log(r.payLoad); //https://github.com/aspnet/Announcements/issues/194
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _test_service__WEBPACK_IMPORTED_MODULE_2__["TestService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        providers: [_test_service__WEBPACK_IMPORTED_MODULE_2__["TestService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _flash_card_flash_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./flash-card/flash-card.component */ "./src/app/flash-card/flash-card.component.ts");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/dist/fesm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _progress_kendo_angular_treeview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-treeview */ "./node_modules/@progress/kendo-angular-treeview/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_scrollview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-scrollview */ "./node_modules/@progress/kendo-angular-scrollview/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-editor */ "./node_modules/@progress/kendo-angular-editor/dist/fesm2015/index.js");
/* harmony import */ var _flash_card_flash_card_list_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./flash-card/flash-card-list-item.component */ "./src/app/flash-card/flash-card-list-item.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _flash_card_flash_card_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./flash-card/flash-card-item.component */ "./src/app/flash-card/flash-card-item.component.ts");
/* harmony import */ var _common_pipes_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./common/pipes/sanitize-html.pipe */ "./src/app/common/pipes/sanitize-html.pipe.ts");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _flash_card_flash_card_component__WEBPACK_IMPORTED_MODULE_9__["FlashCardComponent"],
            _flash_card_flash_card_list_item_component__WEBPACK_IMPORTED_MODULE_16__["FlashCardListItemComponent"],
            _flash_card_flash_card_item_component__WEBPACK_IMPORTED_MODULE_18__["FlashCardItemComponent"],
            _common_pipes_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_19__["SanitizeHtmlPipe"] //TODO: move to common module
        ],
        imports: [
            //TODO: move to common module
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_10__["DropDownsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _progress_kendo_angular_treeview__WEBPACK_IMPORTED_MODULE_12__["TreeViewModule"],
            _progress_kendo_angular_scrollview__WEBPACK_IMPORTED_MODULE_13__["ScrollViewModule"],
            _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_14__["DialogsModule"],
            _progress_kendo_angular_editor__WEBPACK_IMPORTED_MODULE_15__["EditorModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/common/pipes/sanitize-html.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/common/pipes/sanitize-html.pipe.ts ***!
  \****************************************************/
/*! exports provided: SanitizeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeHtmlPipe", function() { return SanitizeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SanitizeHtmlPipe = class SanitizeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
};
SanitizeHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SanitizeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sanitizeHtml'
    })
], SanitizeHtmlPipe);



/***/ }),

/***/ "./src/app/flash-card/flash-card-item.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/flash-card/flash-card-item.component.ts ***!
  \*********************************************************/
/*! exports provided: FlashCardItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashCardItemComponent", function() { return FlashCardItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FlashCardItemComponent = class FlashCardItemComponent {
    constructor() {
        this.width = '100%';
        this.height = '610px';
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FlashCardItemComponent.prototype, "FlashCards", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FlashCardItemComponent.prototype, "FlashCard", void 0);
FlashCardItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'flash-card-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./flash-card-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/flash-card/flash-card-item.component.html")).default,
    })
], FlashCardItemComponent);



/***/ }),

/***/ "./src/app/flash-card/flash-card-list-item.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/flash-card/flash-card-list-item.component.ts ***!
  \**************************************************************/
/*! exports provided: FlashCardListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashCardListItemComponent", function() { return FlashCardListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FlashCardListItemComponent = class FlashCardListItemComponent {
    ngOnInit() {
        this.FlashCard.trimmedAnswer = this.FlashCard.answer.substring(0, 20) + '...';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FlashCardListItemComponent.prototype, "FlashCard", void 0);
FlashCardListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'flash-card-list-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./flash-card-list-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/flash-card/flash-card-list-item.component.html")).default,
    })
], FlashCardListItemComponent);



/***/ }),

/***/ "./src/app/flash-card/flash-card.component.ts":
/*!****************************************************!*\
  !*** ./src/app/flash-card/flash-card.component.ts ***!
  \****************************************************/
/*! exports provided: FlashCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashCardComponent", function() { return FlashCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _flash_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flash-card.service */ "./src/app/flash-card/flash-card.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");





let FlashCardComponent = class FlashCardComponent {
    constructor(svc, toastr, spinner) {
        this.svc = svc;
        this.toastr = toastr;
        this.spinner = spinner;
        this.Categories = [];
        this.Filter = { Category: '' };
        this.FlashCards = [];
        this.width = '100%';
        this.height = '610px';
    }
    ngOnInit() {
        this.GetCategories();
        //this.LoadFlashCards(false);
    }
    LoadFlashCards(isSearched) {
        this.isSearched = isSearched;
        var request = { selectedCategory: this.SelectedCategoryDataItem, searchText: isSearched ? this.SearchText : "" };
        this.svc.LoadFlashCards(request).subscribe(r => {
            if (r.IsSuccess()) {
                this.FlashCards = r.payLoad;
            }
        });
    }
    GetCategories() {
        this.svc.GetCategories().subscribe(r => {
            if (r.IsSuccess()) {
                this.Categories = r.payLoad;
                this.SelectedCategoryDataItem = this.Categories[0];
                this.SelectedCategoryKeys = [this.Categories[0].categoryName];
                this.LoadFlashCards(false);
            }
        });
    }
    handleCategorySelection({ index, dataItem }, upsert) {
        if (upsert) {
        }
        else {
            this.SelectedCategoryDataItem = dataItem;
            this.LoadFlashCards(false);
        }
    }
    addNewFlashCard() {
        this.spinner.show();
        var request = { question: this.newFlashCardQuestion, answer: this.flashCardContent, type: this.isCode ? "Code" : "General", category: this.newFlashCardCategory };
        this.svc.AddNewFlashCard(request).subscribe(r => {
            this.spinner.hide();
            if (r.IsSuccess()) {
                this.toastr.success("Flash card added successfully");
                this.LoadFlashCards(false);
                this.ResetFlashCardWindow();
            }
        });
    }
    ResetFlashCardWindow() {
        this.windowOpened = false;
        this.newFlashCardQuestion = null;
        this.newFlashCardCategory = null;
        this.flashCardContent = null;
    }
    addNewCategory() {
        this.spinner.show();
        var request = { CategoryName: this.newCategory, ParentCategoryId: this.newCategoryParent };
        this.svc.AddNewCategory(request).subscribe(r => {
            this.spinner.hide();
            if (r.IsSuccess()) {
                this.toastr.success("Category added successfully");
                this.GetCategories();
                this.OpenAddCategoryWindow = false;
            }
        });
    }
    CloseFlashCardWindow() {
        this.ResetFlashCardWindow();
    }
};
FlashCardComponent.ctorParameters = () => [
    { type: _flash_card_service__WEBPACK_IMPORTED_MODULE_2__["FlashCardervice"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
];
FlashCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./flash-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/flash-card/flash-card.component.html")).default,
        providers: [_flash_card_service__WEBPACK_IMPORTED_MODULE_2__["FlashCardervice"]]
    })
], FlashCardComponent);



/***/ }),

/***/ "./src/app/flash-card/flash-card.service.ts":
/*!**************************************************!*\
  !*** ./src/app/flash-card/flash-card.service.ts ***!
  \**************************************************/
/*! exports provided: FlashCardervice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashCardervice", function() { return FlashCardervice; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _Base_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Base/base.service */ "./src/app/Base/base.service.ts");






let FlashCardervice = class FlashCardervice extends _Base_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseHttpClient"] {
    constructor(http, toastr, spinner) {
        super(http, toastr, spinner);
        this.APIBaseUrl = "/api/flashcard/";
    }
    GetCategories() {
        var url = this.APIBaseUrl + "categories";
        let parameters = super.CreateSearchParams(true);
        return super.GetDataHttpGet(url, parameters);
    }
    LoadFlashCards(request) {
        var url = this.APIBaseUrl + 'get';
        return super.GetDataHttpPost(url, request);
    }
    GetFlashCards() {
        var url = "/api/values/";
        let parameters = super.CreateSearchParams(true);
        return super.GetDataHttpGet(url, parameters);
    }
    AddNewFlashCard(request) {
        var url = this.APIBaseUrl + 'addnew';
        return super.GetDataHttpPost(url, request);
    }
    AddNewCategory(request) {
        var url = this.APIBaseUrl + 'addcategory';
        return super.GetDataHttpPost(url, request);
    }
};
FlashCardervice.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
];
FlashCardervice = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FlashCardervice);



/***/ }),

/***/ "./src/app/test.service.ts":
/*!*********************************!*\
  !*** ./src/app/test.service.ts ***!
  \*********************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Base_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base/base.service */ "./src/app/Base/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");






let TestService = class TestService extends _Base_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseHttpClient"] {
    constructor(http, toastr, spinner) {
        super(http, toastr, spinner);
    }
    GetValues() {
        var url = "/api/values/";
        let parameters = super.CreateSearchParams(true);
        return super.GetDataHttpGet(url, parameters);
    }
};
TestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }
];
TestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TestService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Dev\FlashCardApp\MyFlashCardProject\app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.b376a7a085dc5a870ad2.js.map