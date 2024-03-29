(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container{\r\n    max-width: 100%;\r\n    margin: 30px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <h1>Animal Characteristics</h1>\n  <app-animal-attribute></app-animal-attribute>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'full-stack-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_animal_attribute_animal_attribute_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/animal-attribute/animal-attribute.component */ "./src/app/components/animal-attribute/animal-attribute.component.ts");
/* harmony import */ var _services_animal_attribute_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/animal-attribute.service */ "./src/app/services/animal-attribute.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_animal_attribute_animal_attribute_component__WEBPACK_IMPORTED_MODULE_5__["AnimalAttributeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]
            ],
            providers: [
                _services_animal_attribute_service__WEBPACK_IMPORTED_MODULE_6__["AnimalAttributeService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/animal-attribute/animal-attribute.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/animal-attribute/animal-attribute.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n    display: table;\r\n    table-layout: fixed;\r\n    width:100%;\r\n    /* margin: 40px; */\r\n}\r\n\r\n\r\n.one{\r\n    display: table-cell;\r\n    background-color:white;\r\n    padding: 8px;\r\n    transition: visibility 0s linear 0.33s, opacity 0.33s linear;\r\n}\r\n\r\n\r\n.two{\r\n    /* width: 100%;    */\r\n    display: table-cell;\r\n    background-color:white;\r\n    padding: 8px;\r\n    transition: visibility 0s linear 0.33s, opacity 0.33s linear;\r\n}\r\n\r\n\r\n.animal-dropdown-input{\r\n    width: 100%;\r\n    height: 40px;\r\n    font-family: sans-serif;\r\n    color: black;\r\n    font-size: 18px;\r\n    padding: 10px;\r\n    border: 1px solid gray;\r\n    border-radius: 4px;\r\n}\r\n\r\n\r\n.attribute-dropdown-input{\r\n    width: 100%;\r\n    height: 40px;\r\n    font-family: sans-serif;\r\n    color: black;\r\n    font-size: 18px;\r\n    padding: 10px;\r\n    border: 1px solid gray;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    text-shadow: 0 0 0 gray;\r\n\r\n}\r\n\r\n\r\n:focus {\r\n    outline: none;\r\n}\r\n\r\n\r\n.animals-container-dropdown{\r\n    padding: 5px;\r\n    width: 100%;\r\n    background-color: white;\r\n    border: 0.5px solid #e0e2e6;\r\n    border-radius: 4px;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    margin-top: 10px;\r\n    box-shadow: 5px 5px 15px #e0e2e6;\r\n}\r\n\r\n\r\n.animal{\r\n    padding: 10px;\r\n    font-family: sans-serif;\r\n    color: black;\r\n    font-size: 18px;\r\n}\r\n\r\n\r\n.animal:hover{\r\n    background-color: #e0e2e6;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.attribute{\r\n    padding: 10px;\r\n    font-family: sans-serif;\r\n    color: black;\r\n    font-size: 18px;\r\n}\r\n\r\n\r\n.attribute:hover{\r\n    background-color: #e0e2e6;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.attribute-select{\r\n    height: 40px;\r\n    width: 100%;\r\n    border: 1px solid grey;\r\n    border-radius: 4px;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    color: black;\r\n}\r\n\r\n\r\n.animal-list-active {\r\n    margin: 0;\r\n    padding: 15px 15px 5px 10px;\r\n    border-radius: 4px;\r\n    background-color: #e0e2e6;\r\n    border-width: 1px;\r\n}\r\n\r\n\r\n.attribute-list-active {\r\n    margin: 0;\r\n    padding: 15px 15px 5px 10px;\r\n    border-radius: 4px;\r\n    background-color: #e0e2e6;\r\n    border-width: 1px;\r\n}\r\n\r\n\r\n.attribute{\r\n    padding: 10px;\r\n    font-family: sans-serif;\r\n    color: black;\r\n    font-size: 18px;\r\n}\r\n\r\n\r\n.attribute:hover{\r\n    background-color: #e0e2e6;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.attributes-container-dropdown{\r\n    padding: 5px;\r\n    width: 100%;\r\n    background-color: white;\r\n    border: 0.5px solid #e0e2e6;\r\n    border-radius: 4px;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    margin-top: 10px;\r\n    box-shadow: 5px 5px 15px #e0e2e6;\r\n}"

/***/ }),

/***/ "./src/app/components/animal-attribute/animal-attribute.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/animal-attribute/animal-attribute.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"one\">\r\n      <input [(ngModel)]=\"animal\" (keyup)=\"onKeyUp($event)\" placeholder=\"Search\" class=\"animal-dropdown-input\">\r\n        <div *ngIf=\"showDropDown\">\r\n            <div class=\"animals-container-dropdown\">\r\n              <div *ngFor=\"let animal of animals; let i=index\" (mouseover)=\"handleDropDownMouseOver($event)\" currIndex = i [ngClass]=\"{'animal-list-active': currIndex === i  }\" (click)=\"handleDropDownClick(animal)\" class=\"animal\">{{animal}}</div>\r\n          </div>\r\n          \r\n        </div>\r\n  </div>\r\n  \r\n  <div *ngIf=\"showDropDownAttr\" class=\"two\"> \r\n  <div>      \r\n      <input [(ngModel)]=\"selected_attribute\" (click)=\"handleAttributeListClick()\" placeholder=\"Choose Characteristic\" class=\"attribute-dropdown-input\">\r\n      <div *ngIf=\"showAttrList\">\r\n          <div class=\"attributes-container-dropdown\">\r\n            <div (mouseover)=\"handleDropDownMouseOver($event)\" *ngFor=\"let attribute of attributes; let i=index\" currIndex = i [ngClass]=\"{'attribute-list-active': currIndex === i  }\" (click)=\"handleAttrDropDownClick(attribute)\" class=\"attribute\">{{attribute}}</div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/animal-attribute/animal-attribute.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/animal-attribute/animal-attribute.component.ts ***!
  \***************************************************************************/
/*! exports provided: AnimalAttributeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalAttributeComponent", function() { return AnimalAttributeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_animal_attribute_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/animal-attribute.service */ "./src/app/services/animal-attribute.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};


var AnimalAttributeComponent = /** @class */ (function () {
    function AnimalAttributeComponent(service) {
        this.service = service;
        this.animal = "";
        this.animals = "";
        this.showDropDown = false;
        this.currIndex = 0;
        this.selected_animal = "";
        this.attributes = "";
        this.showDropDownAttr = false;
        this.showAttrList = false;
        this.selected_attribute = "";
        this.job = 0;
    }
    AnimalAttributeComponent.prototype.ngOnInit = function () { };
    // Method gets fired up on key up inside the Animal input field
    AnimalAttributeComponent.prototype.onKeyUp = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (event.code == "ArrowUp" || event.code == "ArrowDown" || event.keyCode == 13) {
                    if (this.showDropDown == true) {
                        if (event.code == "ArrowUp" && this.currIndex > 0) {
                            this.currIndex--;
                        }
                        if (event.code == "ArrowDown" && this.currIndex < this.animals.length - 1) {
                            this.currIndex++;
                        }
                        if (event.keyCode == 13) {
                            this.animal = this.animals[this.currIndex];
                            this.selected_animal = this.animal;
                            this.showDropDown = false;
                            this.service
                                .getAnimalAttributes(this.animals[this.currIndex])
                                .subscribe(function (response) {
                                if (response.json().length != 0) {
                                    _this.attributes = response.json();
                                    _this.showDropDownAttr = true;
                                }
                            });
                        }
                    }
                }
                else {
                    if (this.animal.length > 2) {
                        if (this.selected_animal == "") {
                            this.showDropDownAttr = false;
                            if (this.job)
                                window.clearTimeout(this.job);
                            this.job = window.setTimeout(function () {
                                var _this = this;
                                this.service
                                    .getAnimalsSuggestion(this.animal)
                                    .subscribe(function (response) {
                                    if (response.json().length != 0) {
                                        _this.animals = response.json();
                                        _this.showDropDown = true;
                                    }
                                });
                            }.bind(this), 500);
                        }
                        else if (this.animal == this.selected_animal) {
                            this.showDropDown = false;
                        }
                        else if (this.animal != this.selected_animal) {
                            this.currIndex = 0;
                            this.selected_animal = "";
                            this.showDropDown = false;
                            this.showDropDownAttr = false;
                            this.selected_attribute = "";
                            this.animals = "";
                            this.attributes = "";
                        }
                    }
                    else {
                        this.currIndex = 0;
                        this.selected_animal = "";
                        this.showDropDown = false;
                        this.showDropDownAttr = false;
                        this.selected_attribute = "";
                        this.animals = "";
                        this.attributes = "";
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    // Once the user clicks on the Animal suggestions. This method gets called
    AnimalAttributeComponent.prototype.handleDropDownClick = function (value) {
        var _this = this;
        this.animal = value;
        this.selected_animal = value;
        this.showDropDown = false;
        this.service.getAnimalAttributes(this.animal).subscribe(function (response) {
            if (response.json().length != 0) {
                _this.attributes = response.json();
                _this.showDropDownAttr = true;
            }
        });
    };
    // This is to toggle the Atribute list click
    AnimalAttributeComponent.prototype.handleAttributeListClick = function () {
        this.showAttrList = !this.showAttrList;
    };
    // This is called when the Attribute is clicked from the dropdown
    AnimalAttributeComponent.prototype.handleAttrDropDownClick = function (attribute) {
        this.selected_attribute = attribute;
        this.showAttrList = false;
    };
    // Switches control between mouse over and key up key down
    AnimalAttributeComponent.prototype.handleDropDownMouseOver = function (event) {
        this.currIndex = -1;
    };
    AnimalAttributeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-animal-attribute",
            template: __webpack_require__(/*! ./animal-attribute.component.html */ "./src/app/components/animal-attribute/animal-attribute.component.html"),
            styles: [__webpack_require__(/*! ./animal-attribute.component.css */ "./src/app/components/animal-attribute/animal-attribute.component.css")]
        }),
        __metadata("design:paramtypes", [_services_animal_attribute_service__WEBPACK_IMPORTED_MODULE_1__["AnimalAttributeService"]])
    ], AnimalAttributeComponent);
    return AnimalAttributeComponent;
}());



/***/ }),

/***/ "./src/app/services/animal-attribute.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/animal-attribute.service.ts ***!
  \******************************************************/
/*! exports provided: AnimalAttributeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalAttributeService", function() { return AnimalAttributeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnimalAttributeService = /** @class */ (function () {
    function AnimalAttributeService(http) {
        this.http = http;
        this.url = "http://localhost:5000/api/getAnimals";
        this.attr_url = "http://localhost:5000/api/getAttributes";
    }
    // Method to get Animal Suggestions
    AnimalAttributeService.prototype.getAnimalsSuggestion = function (word) {
        return this.http.get(this.url + "?" + "word=" + word);
    };
    // Method to get Animal Characteristics
    AnimalAttributeService.prototype.getAnimalAttributes = function (animal) {
        return this.http.get(this.attr_url + "?" + "animal=" + animal);
    };
    AnimalAttributeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
        // Service that makes call to the APIs and is injected into component
        ,
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AnimalAttributeService);
    return AnimalAttributeService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Coding_Challenges\RainForestConnection\full-stack-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map