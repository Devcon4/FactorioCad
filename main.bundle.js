webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Action; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
// tslint:disable-next-line:import-blacklist

var Action = /** @class */ (function () {
    function Action() {
        this._innerObservable = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"]({});
    }
    Action.prototype.asObservable = function () {
        return this._innerObservable;
    };
    Object.defineProperty(Action.prototype, "value", {
        get: function () {
            return this._innerObservable.getValue();
        },
        set: function (val) {
            console.log(val);
            this._innerObservable.next(val);
        },
        enumerable: true,
        configurable: true
    });
    return Action;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__build_build_component__ = __webpack_require__("../../../../../src/app/build/build.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__export_export_component__ = __webpack_require__("../../../../../src/app/export/export.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editor_editor_component__ = __webpack_require__("../../../../../src/app/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__root_root_component__ = __webpack_require__("../../../../../src/app/root/root.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/factorioCad/(sidebar:build//editor:editor)', pathMatch: 'full' },
    { path: 'FactorioCad', component: __WEBPACK_IMPORTED_MODULE_5__root_root_component__["a" /* RootComponent */], children: [
            { path: 'build', component: __WEBPACK_IMPORTED_MODULE_2__build_build_component__["a" /* BuildComponent */], outlet: 'sidebar' },
            { path: 'export', component: __WEBPACK_IMPORTED_MODULE_3__export_export_component__["a" /* ExportComponent */], outlet: 'sidebar' },
            { path: 'editor', component: __WEBPACK_IMPORTED_MODULE_4__editor_editor_component__["a" /* EditorComponent */], outlet: 'editor' }
        ] },
    // Todo: Fix this later.
    { path: '**', redirectTo: '/factorioCad/(sidebar:build//editor:editor)', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toolbox_toolbox_component__ = __webpack_require__("../../../../../src/app/toolbox/toolbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editor_editor_component__ = __webpack_require__("../../../../../src/app/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_item_component__ = __webpack_require__("../../../../../src/app/item/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__build_build_component__ = __webpack_require__("../../../../../src/app/build/build.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__export_export_component__ = __webpack_require__("../../../../../src/app/export/export.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__root_root_component__ = __webpack_require__("../../../../../src/app/root/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sidebar_nav_sidebar_nav_component__ = __webpack_require__("../../../../../src/app/sidebar-nav/sidebar-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tab_list_tab_list_component__ = __webpack_require__("../../../../../src/app/tab-list/tab-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__blueprint_string_service__ = __webpack_require__("../../../../../src/app/blueprint-string.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__blueprint_validator_directive__ = __webpack_require__("../../../../../src/app/blueprint-validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__monaco_editor_monaco_editor_component__ = __webpack_require__("../../../../../src/app/monaco-editor/monaco-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__url_shortener_service__ = __webpack_require__("../../../../../src/app/url-shortener.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__selected_service__ = __webpack_require__("../../../../../src/app/selected.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__toolbox_toolbox_component__["a" /* ToolboxComponent */],
                __WEBPACK_IMPORTED_MODULE_4__editor_editor_component__["a" /* EditorComponent */],
                __WEBPACK_IMPORTED_MODULE_5__item_item_component__["a" /* ItemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__build_build_component__["a" /* BuildComponent */],
                __WEBPACK_IMPORTED_MODULE_10__root_root_component__["a" /* RootComponent */],
                __WEBPACK_IMPORTED_MODULE_7__export_export_component__["a" /* ExportComponent */],
                __WEBPACK_IMPORTED_MODULE_11__sidebar_nav_sidebar_nav_component__["b" /* SidebarNavComponent */],
                __WEBPACK_IMPORTED_MODULE_14__tab_list_tab_list_component__["c" /* TabListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__blueprint_validator_directive__["a" /* BlueprintValidatorDirective */],
                __WEBPACK_IMPORTED_MODULE_19__monaco_editor_monaco_editor_component__["a" /* MonacoEditorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({ appId: 'serverApp' }),
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["j" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["g" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["e" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["b" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["k" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["f" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["i" /* MatSnackBarModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__blueprint_string_service__["a" /* BlueprintStringService */],
                __WEBPACK_IMPORTED_MODULE_20__url_shortener_service__["a" /* UrlShortenerService */],
                __WEBPACK_IMPORTED_MODULE_21__selected_service__["a" /* SelectedService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/blueprint-string.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlueprintStringService; });
/* unused harmony export deflatePipe */
/* unused harmony export Blueprint */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_let__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/let.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_buffer__ = __webpack_require__("../../../../buffer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_buffer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_buffer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_zlib__ = __webpack_require__("../../../../browserify-zlib/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_zlib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_zlib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var BlueprintStringService = /** @class */ (function () {
    function BlueprintStringService(router, ar) {
        var _this = this;
        this.router = router;
        this.ar = ar;
        this.blueprintString = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.blueprintJson = this.blueprintString.let(deflatePipe());
        this.blueprintJsonString = '';
        this.blueprintString.subscribe(function (s) { return _this.router.navigate([], { queryParams: { 'string': s } }); });
        this.ar.queryParams.take(1).filter(function (p) { return p['string']; }).subscribe(function (p) { return _this.blueprintString.next(p['string']); });
        // this.blueprintJson.subscribe(s => console.log(s));
        this.blueprintJson.map(function (v) { return v.toString(); }).subscribe(function (s) { return _this.blueprintJsonString = s || ' '; });
    }
    BlueprintStringService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], BlueprintStringService);
    return BlueprintStringService;
}());

var deflatePipe = function () { return function (source) { return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */](function (observer) {
    return source.subscribe({
        next: function (x) {
            if (x && x.length > 1) {
                var subX = (x || '  ').substring(1, x.length);
                var buffer = __WEBPACK_IMPORTED_MODULE_7_buffer__["Buffer"].from(subX, 'base64');
                Object(__WEBPACK_IMPORTED_MODULE_8_zlib__["unzip"])(buffer, function (err, buf) {
                    if (!err) {
                        observer.next(buf.toString());
                    }
                    else {
                        // handle error
                        observer.error(err);
                    }
                });
            }
        },
        error: function (err) { observer.error(err); },
        complete: function () { observer.complete(); }
    });
}); }; };
var GenericConstructor = /** @class */ (function () {
    function GenericConstructor(args) {
        Object.assign(this, args);
    }
    return GenericConstructor;
}());
var Blueprint;
(function (Blueprint) {
    var Book = /** @class */ (function (_super) {
        __extends(Book, _super);
        function Book() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.item = 'blueprint-book';
            _this.blueprints = [];
            _this.active_index = 0;
            return _this;
        }
        return Book;
    }(GenericConstructor));
    Blueprint.Book = Book;
    var Object = /** @class */ (function (_super) {
        __extends(Object, _super);
        function Object() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.item = 'blueprint';
            _this.entities = [];
            _this.icons = [];
            return _this;
        }
        Object.prototype.SetEntity = function (entity) {
            Object(__WEBPACK_IMPORTED_MODULE_9_lodash__["remove"])(this.entities, function (e) { return e.position.x === entity.position.x && e.position.y === entity.position.y; });
            this.entities = this.entities.concat([entity]);
        };
        return Object;
    }(GenericConstructor));
    Blueprint.Object = Object;
    var Icon = /** @class */ (function (_super) {
        __extends(Icon, _super);
        function Icon() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Icon;
    }(GenericConstructor));
    Blueprint.Icon = Icon;
    var Signal = /** @class */ (function (_super) {
        __extends(Signal, _super);
        function Signal() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Signal;
    }(GenericConstructor));
    Blueprint.Signal = Signal;
    var Entity = /** @class */ (function (_super) {
        __extends(Entity, _super);
        function Entity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Entity;
    }(GenericConstructor));
    Blueprint.Entity = Entity;
})(Blueprint || (Blueprint = {}));


/***/ }),

/***/ "../../../../../src/app/blueprint-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlueprintValidatorDirective; });
/* unused harmony export blueprintValidator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_validator__ = __webpack_require__("../../../../validator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_validator__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlueprintValidatorDirective = /** @class */ (function () {
    function BlueprintValidatorDirective() {
    }
    BlueprintValidatorDirective_1 = BlueprintValidatorDirective;
    BlueprintValidatorDirective.prototype.validate = function (control) {
        return blueprintValidator()(control);
    };
    BlueprintValidatorDirective = BlueprintValidatorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appBlueprint]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALIDATORS */], useExisting: BlueprintValidatorDirective_1, multi: true }]
        }),
        __metadata("design:paramtypes", [])
    ], BlueprintValidatorDirective);
    return BlueprintValidatorDirective;
    var BlueprintValidatorDirective_1;
}());

function blueprintValidator() {
    return function (control) {
        var blueprint = Object(__WEBPACK_IMPORTED_MODULE_2_validator__["isBase64"])(control.value.substring(1, control.value.length));
        return blueprint ? { 'blueprint': { value: control.value } } : null;
    };
}


/***/ }),

/***/ "../../../../../src/app/build/build.component.html":
/***/ (function(module, exports) {

module.exports = "<app-tab-list [list]=\"list\" [ordinalMap]=\"ordinalMap\"></app-tab-list>"

/***/ }),

/***/ "../../../../../src/app/build/build.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/build/build.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_list_tab_list_component__ = __webpack_require__("../../../../../src/app/tab-list/tab-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuildComponent = /** @class */ (function () {
    function BuildComponent(http) {
        this.http = http;
        this.list = {};
        this.ordinalMap = {
            'Logistics': 0,
            'Production': 1,
            'Components': 2,
            'Military': 3
        };
        this.raw = [
            { "name": "accumulator", "path": "assets/images/icons/accumulator.png", "group": 1 },
            { "name": 'arithmetic combinator', 'path': 'assets/images/icons/arithmetic-combinator.png', 'group': 0 },
            { 'name': 'artillery turret', 'path': 'assets/images/icons/artillery-turret.png', 'group': 3 },
            { 'name': 'artillery wagon', 'path': 'assets/images/icons/artillery-wagon.png', 'group': 3 },
            { 'name': 'assembling machine 1', 'path': 'assets/images/icons/assembling-machine-1.png', 'group': 1 },
            { 'name': 'assembling machine 2', 'path': 'assets/images/icons/assembling-machine-2.png', 'group': 1 },
            { 'name': 'assembling machine 3', 'path': 'assets/images/icons/assembling-machine-3.png', 'group': 1 },
            { 'name': 'beacon', 'path': 'assets/images/icons/beacon.png', 'group': 1 },
            { 'name': 'big electric pole', 'path': 'assets/images/icons/big-electric-pole.png', 'group': 0 },
            { 'name': 'boiler', 'path': 'assets/images/icons/boiler.png', 'group': 1 },
            { 'name': 'burner inserter', 'path': 'assets/images/icons/burner-inserter.png', 'group': 0 },
            { 'name': 'burner mining drill', 'path': 'assets/images/icons/burner-mining-drill.png', 'group': 1 },
            { 'name': 'cargo wagon', 'path': 'assets/images/icons/cargo-wagon.png', 'group': 0 },
            { 'name': 'centrifuge', 'path': 'assets/images/icons/centrifuge.png', 'group': 1 },
            { 'name': 'chemical plant', 'path': 'assets/images/icons/chemical-plant.png', 'group': 1 },
            { 'name': 'concrete', 'path': 'assets/images/icons/concrete.png', 'group': 2 },
            { 'name': 'constant combinator', 'path': 'assets/images/icons/constant-combinator.png', 'group': 0 },
            { 'name': 'decider combinator', 'path': 'assets/images/icons/decider-combinator.png', 'group': 0 },
            { 'name': 'electric furnace', 'path': 'assets/images/icons/electric-furnace.png', 'group': 1 },
            { 'name': 'electric mining drill', 'path': 'assets/images/icons/electric-mining-drill.png', 'group': 1 },
            { 'name': 'express loader', 'path': 'assets/images/icons/express-loader.png', 'group': 0 },
            { 'name': 'express splitter', 'path': 'assets/images/icons/express-splitter.png', 'group': 0 },
            { 'name': 'express transport belt', 'path': 'assets/images/icons/express-transport-belt.png', 'group': 0 },
            { 'name': 'express underground belt', 'path': 'assets/images/icons/express-underground-belt.png', 'group': 0 },
            { 'name': 'fast inserter', 'path': 'assets/images/icons/fast-inserter.png', 'group': 0 },
            { 'name': 'fast loader', 'path': 'assets/images/icons/fast-loader.png', 'group': 0 },
            { 'name': 'fast splitter', 'path': 'assets/images/icons/fast-splitter.png', 'group': 0 },
            { 'name': 'fast transport belt', 'path': 'assets/images/icons/fast-transport-belt.png', 'group': 0 },
            { 'name': 'fast underground belt', 'path': 'assets/images/icons/fast-underground-belt.png', 'group': 0 },
            { 'name': 'filter inserter', 'path': 'assets/images/icons/filter-inserter.png', 'group': 0 },
            { 'name': 'flamethrower turret', 'path': 'assets/images/icons/flamethrower-turret.png', 'group': 3 },
            { 'name': 'gate', 'path': 'assets/images/icons/gate.png', 'group': 3 },
            { 'name': 'green wire', 'path': 'assets/images/icons/green-wire.png', 'group': 2 },
            { 'name': 'gun turret', 'path': 'assets/images/icons/gun-turret.png', 'group': 3 },
            { 'name': 'hazard concrete', 'path': 'assets/images/icons/hazard-concrete.png', 'group': 2 },
            { 'name': 'heat boiler', 'path': 'assets/images/icons/heat-boiler.png', 'group': 1 },
            { 'name': 'heat pipe', 'path': 'assets/images/icons/heat-pipe.png', 'group': 1 },
            { 'name': 'inserter', 'path': 'assets/images/icons/inserter.png', 'group': 0 },
            { 'name': 'iron chest', 'path': 'assets/images/icons/iron-chest.png', 'group': 0 },
            { 'name': 'lab', 'path': 'assets/images/icons/lab.png', 'group': 1 },
            { 'name': 'land mine', 'path': 'assets/images/icons/land-mine.png', 'group': 3 },
            { 'name': 'landfill', 'path': 'assets/images/icons/landfill.png', 'group': 2 },
            { 'name': 'laser turret', 'path': 'assets/images/icons/laser-turret.png', 'group': 3 },
            { 'name': 'loader', 'path': 'assets/images/icons/loader.png', 'group': 0 },
            { 'name': 'logistic chest active provider', 'path': 'assets/images/icons/logistic-chest-active-provider.png', 'group': 0 },
            { 'name': 'logistic chest buffer', 'path': 'assets/images/icons/logistic-chest-buffer.png', 'group': 0 },
            { 'name': 'logistic chest passive provider', 'path': 'assets/images/icons/logistic-chest-passive-provider.png', 'group': 0 },
            { 'name': 'logistic chest requester', 'path': 'assets/images/icons/logistic-chest-requester.png', 'group': 0 },
            { 'name': 'logistic chest storage', 'path': 'assets/images/icons/logistic-chest-storage.png', 'group': 0 },
            { 'name': 'long handed inserter', 'path': 'assets/images/icons/long-handed-inserter.png', 'group': 0 },
            { 'name': 'medium electric pole', 'path': 'assets/images/icons/medium-electric-pole.png', 'group': 0 },
            { 'name': 'nuclear reactor', 'path': 'assets/images/icons/nuclear-reactor.png', 'group': 1 },
            { 'name': 'offshore pump', 'path': 'assets/images/icons/offshore-pump.png', 'group': 1 },
            { 'name': 'oil refinery', 'path': 'assets/images/icons/oil-refinery.png', 'group': 1 },
            { 'name': 'pipe to ground', 'path': 'assets/images/icons/pipe-to-ground.png', 'group': 0 },
            { 'name': 'pipe', 'path': 'assets/images/icons/pipe.png', 'group': 0 },
            { 'name': 'power switch', 'path': 'assets/images/icons/power-switch.png', 'group': 0 },
            { 'name': 'programmable speaker', 'path': 'assets/images/icons/programmable-speaker.png', 'group': 0 },
            { 'name': 'pump', 'path': 'assets/images/icons/pump.png', 'group': 0 },
            { 'name': 'pumpjack', 'path': 'assets/images/icons/pumpjack.png', 'group': 1 },
            { 'name': 'radar', 'path': 'assets/images/icons/radar.png', 'group': 3 },
            { 'name': 'rail chain signal', 'path': 'assets/images/icons/rail-chain-signal.png', 'group': 0 },
            { 'name': 'rail signal', 'path': 'assets/images/icons/rail-signal.png', 'group': 0 },
            { 'name': 'rail', 'path': 'assets/images/icons/rail.png', 'group': 0 },
            { 'name': 'red wire', 'path': 'assets/images/icons/red-wire.png', 'group': 0 },
            { 'name': 'roboport', 'path': 'assets/images/icons/roboport.png', 'group': 0 },
            { 'name': 'rocket silo', 'path': 'assets/images/icons/rocket-silo.png', 'group': 3 },
            { 'name': 'small electric pole', 'path': 'assets/images/icons/small-electric-pole.png', 'group': 0 },
            { 'name': 'small lamp', 'path': 'assets/images/icons/small-lamp.png', 'group': 0 },
            { 'name': 'solar panel', 'path': 'assets/images/icons/solar-panel.png', 'group': 1 },
            { 'name': 'splitter', 'path': 'assets/images/icons/splitter.png', 'group': 0 },
            { 'name': 'stack filter inserter', 'path': 'assets/images/icons/stack-filter-inserter.png', 'group': 0 },
            { 'name': 'stack inserter', 'path': 'assets/images/icons/stack-inserter.png', 'group': 0 },
            { 'name': 'steam engine', 'path': 'assets/images/icons/steam-engine.png', 'group': 1 },
            { 'name': 'steam turbine', 'path': 'assets/images/icons/steam-turbine.png', 'group': 1 },
            { 'name': 'steel chest', 'path': 'assets/images/icons/steel-chest.png', 'group': 0 },
            { 'name': 'steel furnace', 'path': 'assets/images/icons/steel-furnace.png', 'group': 1 },
            { 'name': 'stone brick', 'path': 'assets/images/icons/stone-brick.png', 'group': 2 },
            { 'name': 'stone furnace', 'path': 'assets/images/icons/stone-furnace.png', 'group': 1 },
            { 'name': 'stone wall', 'path': 'assets/images/icons/stone-wall.png', 'group': 3 },
            { 'name': 'storage tank', 'path': 'assets/images/icons/storage-tank.png', 'group': 0 },
            { 'name': 'substation', 'path': 'assets/images/icons/substation.png', 'group': 1 },
            { 'name': 'tank', 'path': 'assets/images/icons/tank.png', 'group': 3 },
            { 'name': 'train stop', 'path': 'assets/images/icons/train-stop.png', 'group': 0 },
            { 'name': 'transport belt', 'path': 'assets/images/icons/transport-belt.png', 'group': 0 },
            { 'name': 'underground belt', 'path': 'assets/images/icons/underground-belt.png', 'group': 0 },
            { 'name': 'wooden chest', 'path': 'assets/images/icons/wooden-chest.png', 'group': 0 }
        ];
    }
    BuildComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.raw.map(function (i) { return new __WEBPACK_IMPORTED_MODULE_1__tab_list_tab_list_component__["a" /* ImageRef */](i.name, i.path, i.group); }).forEach(function (i) {
            _this.list[__WEBPACK_IMPORTED_MODULE_1__tab_list_tab_list_component__["b" /* ItemType */][i.group]] = (_this.list[__WEBPACK_IMPORTED_MODULE_1__tab_list_tab_list_component__["b" /* ItemType */][i.group]] || []).concat([i]);
        });
    };
    BuildComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-build',
            template: __webpack_require__("../../../../../src/app/build/build.component.html"),
            styles: [__webpack_require__("../../../../../src/app/build/build.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], BuildComponent);
    return BuildComponent;
}());



/***/ }),

/***/ "../../../../../src/app/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"center\">\r\n  <mat-spinner color=\"accent\"></mat-spinner>\r\n</div> -->\r\n<button mat-fab (click)=\"openSnackBar('Link copied!')\"><mat-icon>share</mat-icon></button>\r\n<div #editor (window:resize)=\"adjustCanvasSize()\"></div>"

/***/ }),

/***/ "../../../../../src/app/editor/editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100vh;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\ndiv {\n  height: 100vh;\n  overflow: hidden; }\n\nbutton {\n  position: absolute;\n  bottom: 15px;\n  right: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pixi_js__ = __webpack_require__("../../../../pixi.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pixi_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__url_shortener_service__ = __webpack_require__("../../../../../src/app/url-shortener.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_clipboard_copy__ = __webpack_require__("../../../../clipboard-copy/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_clipboard_copy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_clipboard_copy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selected_service__ = __webpack_require__("../../../../../src/app/selected.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditorComponent = /** @class */ (function () {
    function EditorComponent(http, urlShortenerService, selectedService, snackBar) {
        var _this = this;
        this.http = http;
        this.urlShortenerService = urlShortenerService;
        this.selectedService = selectedService;
        this.snackBar = snackBar;
        this.desiredZoom = 1;
        this.app = new __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Application"]({ transparent: true });
        this.grid = new __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Graphics"]();
        this.blueprint = new __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Container"]();
        this.selected = new __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Sprite"]();
        this.lastMousePos = new __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Point"](0, 0);
        // http.get('assets/json/iconMap.json').subscribe(j => {
        //   this.file = j.json().map(r => ({name: r.name, path: r.path, group: r.group }));
        // });
        this.selectedService._innerObservable.subscribe(function (v) {
            _this.app.stage.removeChild(_this.selected);
            var texture = __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Texture"].fromImage(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].deployUrl + "/" + v.url);
            _this.selected = new __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Sprite"](texture);
            _this.selected.position.set(_this.lastMousePos.x, _this.lastMousePos.y);
            _this.selected.anchor.set(0.5, 0.5);
            _this.selected.scale.set(_this.desiredZoom, _this.desiredZoom);
            // this.selected.alpha = .4;
            console.log(_this.selected);
            _this.app.stage.addChild(_this.selected);
        });
    }
    EditorComponent.prototype.openSnackBar = function (message, action) {
        var _this = this;
        this.urlShortenerService.getCurrent(function (shortUrl) {
            __WEBPACK_IMPORTED_MODULE_5_clipboard_copy__(shortUrl);
            _this.snackBar.open(message, action, {
                duration: 2000,
            });
        });
    };
    EditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (document.body.addEventListener) {
            document.body.addEventListener('mousewheel', this.zoom.bind(this), false); // Chrome/Safari/Opera
            document.body.addEventListener('DOMMouseScroll', this.zoom.bind(this), false); // Firefox
        }
        // The application will create a renderer using WebGL, if possible,
        // with a fallback to a canvas render. It will also setup the ticker
        // and the root stage PIXI.Container
        // The application will create a canvas element for you that you
        // can then insert into the DOM
        this.editor.nativeElement.appendChild(this.app.view);
        setTimeout(function () {
            _this.adjustCanvasSize();
            _this.app.ticker.add(function (e) {
                if (_this.lastMousePos.x !== _this.app.renderer.plugins.interaction.mouse.global.x ||
                    _this.lastMousePos.y !== _this.app.renderer.plugins.interaction.mouse.global.y) {
                    _this.lastMousePos = new __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Point"](_this.app.renderer.plugins.interaction.mouse.global.x, _this.app.renderer.plugins.interaction.mouse.global.y);
                    _this.drawSelected({ x: _this.lastMousePos.x, y: _this.lastMousePos.y });
                }
            });
        }, 0);
        // load the texture we need
        // loader.add('accumulator', 'assets/images/icons/accumulator.png').load((l, resources) => {
        // This creates a texture from a 'bunny.png' image
        // const accumulator = new Sprite(resources.accumulator.texture);
        // // Setup the position of the bunny
        // accumulator.x = this.app.renderer.width / 2;
        // accumulator.y = this.app.renderer.height / 2;
        // // Rotate around the center
        // accumulator.anchor.x = 0.5;
        // accumulator.anchor.y = 0.5;
        // // Add the bunny to the scene we are building
        // this.app.stage.addChild(accumulator);
        // // Listen for frame updates
        // this.app.ticker.add(() => {
        //     // each frame we spin the bunny around a bit
        //     accumulator.rotation += 0.01;
        // });
        // });
    };
    EditorComponent.prototype.adjustCanvasSize = function () {
        this.app.renderer.resize(this.editor.nativeElement.clientWidth, this.editor.nativeElement.clientHeight);
        this.drawGrid();
        this.selected.scale.set(this.desiredZoom, this.desiredZoom);
    };
    EditorComponent.prototype.drawSelected = function (pos) {
        this.selected.position.set(pos.x, pos.y);
    };
    EditorComponent.prototype.drawGrid = function () {
        this.app.stage.removeChild(this.grid);
        this.grid = new __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Graphics"]();
        // set a fill and line style
        this.grid.lineStyle(3, 0x424242, 1);
        this.grid.moveTo(this.app.renderer.width / 2, 0);
        this.grid.lineTo(this.app.renderer.width / 2, this.app.renderer.height);
        this.grid.moveTo(0, this.app.renderer.height / 2);
        this.grid.lineTo(this.app.renderer.width, this.app.renderer.height / 2);
        this.grid.lineStyle(1, 0x424242, 1);
        var halfWidth = this.app.renderer.width / 2;
        var halfHeight = this.app.renderer.height / 2;
        var cellSize = this.desiredZoom * 25;
        for (var x = halfWidth % cellSize - (cellSize / 2); x < this.app.renderer.width; x += cellSize) {
            this.grid.moveTo(x, 0);
            this.grid.lineTo(x, this.app.renderer.height);
        }
        for (var y = halfHeight % cellSize - (cellSize / 2); y < this.app.renderer.height; y += cellSize) {
            this.grid.moveTo(0, y);
            this.grid.lineTo(this.app.renderer.width, y);
        }
        this.grid.endFill();
        this.app.stage.addChildAt(this.grid, this.app.stage.children.length - 1);
    };
    EditorComponent.prototype.zoom = function (event) {
        var newZoom = this.desiredZoom + (event.wheelDelta / 200);
        if (newZoom > .15) {
            this.desiredZoom = newZoom;
        }
        this.adjustCanvasSize();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('editor'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], EditorComponent.prototype, "editor", void 0);
    EditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-editor',
            template: __webpack_require__("../../../../../src/app/editor/editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/editor/editor.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__url_shortener_service__["a" /* UrlShortenerService */],
            __WEBPACK_IMPORTED_MODULE_6__selected_service__["a" /* SelectedService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatSnackBar */]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/export/export.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"body\">\r\n    <form>\r\n      <mat-form-field>\r\n        <textarea\r\n          matInput\r\n          id=\"rawString\"\r\n          name=\"rawString\"\r\n          placeholder=\"Blueprint String\"\r\n          matTextareaAutosize\r\n          matAutosizeMinRows=\"2\"\r\n          matAutosizeMaxRows=\"12\"\r\n          spellcheck=\"false\"\r\n          [formControl]=\"rawStringControl\"\r\n          (ngModelChange)=\"updateString($event)\">\r\n      </textarea>\r\n      <!-- <mat-error *ngIf=\"rawStringControl.hasError('blueprint')\">String is not a Blueprint</mat-error> -->\r\n    </mat-form-field>\r\n  </form>\r\n    <div class=\"jsonLabel\">Blueprint Json</div>\r\n  <app-monaco-editor [options]=\"editorOptions\" [(value)]=\"bs.blueprintJsonString\" (onInit)=\"editorInit($event)\"></app-monaco-editor>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/export/export.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 15px;\n  height: calc(100% - 79px);\n  overflow: hidden; }\n\ntextarea {\n  font-size: 11px;\n  font-family: monospace; }\n  textarea::-webkit-scrollbar {\n    width: 1em; }\n  textarea::-webkit-scrollbar-thumb {\n    opacity: 0;\n    transition: background-color 500ms ease-out 1s; }\n  textarea:hover::-webkit-scrollbar-thumb {\n    background-color: rgba(255, 255, 255, 0.2);\n    opacity: 0.2; }\n  textarea::-webkit-scrollbar-track {\n    border-left: 1px solid rgba(255, 255, 255, 0.2); }\n\nmat-form-field {\n  width: 100%; }\n\napp-monaco-editor {\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  height: calc(100% - 214px); }\n\n.jsonLabel {\n  font-family: Arial, Helvetica, sans-serif;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/export/export.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blueprint_string_service__ = __webpack_require__("../../../../../src/app/blueprint-string.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timkendrick_monaco_editor__ = __webpack_require__("../../../../@timkendrick/monaco-editor/dist/standalone/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timkendrick_monaco_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__timkendrick_monaco_editor__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExportComponent = /** @class */ (function () {
    function ExportComponent(bs) {
        this.bs = bs;
        this.rawStringControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.bs.blueprintString.getValue());
        this.editorOptions = {
            theme: 'factorioCad',
            language: 'json', ReadOnly: true,
            minimap: { enabled: false },
            formatOnPaste: true,
            formatOnType: true,
            fontSize: 10,
            tabSize: 1
        };
        __WEBPACK_IMPORTED_MODULE_3__timkendrick_monaco_editor__["editor"].defineTheme('factorioCad', {
            base: 'vs-dark',
            inherit: true,
            rules: [],
            colors: {
                'editor.background': '#424242',
                'editor.lineHighlightBorder': '#303030'
            }
        });
    }
    ExportComponent.prototype.ngOnInit = function () { };
    ExportComponent.prototype.updateString = function (val) {
        this.bs.blueprintString.next(val);
    };
    ExportComponent.prototype.editorInit = function (e) {
        e.model.updateOptions({ tabSize: 1 });
        this.bs.blueprintJson.subscribe(function (s) {
            setTimeout(function () {
                e.getAction('editor.action.formatDocument').run();
            }, 0);
        });
    };
    ExportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-export',
            template: __webpack_require__("../../../../../src/app/export/export.component.html"),
            styles: [__webpack_require__("../../../../../src/app/export/export.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__blueprint_string_service__["a" /* BlueprintStringService */]])
    ], ExportComponent);
    return ExportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/item/item.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  item works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/item/item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/item/item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemComponent = /** @class */ (function () {
    function ItemComponent() {
    }
    ItemComponent.prototype.ngOnInit = function () {
    };
    ItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-item',
            template: __webpack_require__("../../../../../src/app/item/item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/item/item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/monaco-editor/monaco-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div #editorRef></div>"

/***/ }),

/***/ "../../../../../src/app/monaco-editor/monaco-editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n  height: 100%;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/monaco-editor/monaco-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonacoEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timkendrick_monaco_editor__ = __webpack_require__("../../../../@timkendrick/monaco-editor/dist/standalone/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timkendrick_monaco_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__timkendrick_monaco_editor__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MonacoEditorComponent = /** @class */ (function () {
    function MonacoEditorComponent() {
        this.options = {};
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    MonacoEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._editor = __WEBPACK_IMPORTED_MODULE_1__timkendrick_monaco_editor__["editor"].create(this.EditorRef.nativeElement, __assign({}, this.options, { automaticLayout: true, value: this.value }));
        this._editor.onDidChangeModelContent(function (e) { return _this.valueChange.emit(_this._editor.getValue()); });
        this.onInit.emit(this._editor);
    };
    MonacoEditorComponent.prototype.ngOnChanges = function (changes) {
        if (!!this._editor) {
            if (changes['value'] && changes['value'].currentValue !== changes['value'].previousValue) {
                this._editor.setValue(changes['value'].currentValue);
            }
            if (changes['options'] && changes['options'].currentValue !== changes['options'].previousValue) {
                this._editor.updateOptions(changes['options'].currentValue);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", typeof (_a = ((_b = (typeof __WEBPACK_IMPORTED_MODULE_1__timkendrick_monaco_editor__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__timkendrick_monaco_editor__).editor) && _b).IEditorOptions) === "function" && _a || Object)
    ], MonacoEditorComponent.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MonacoEditorComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], MonacoEditorComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], MonacoEditorComponent.prototype, "onInit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('editorRef'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], MonacoEditorComponent.prototype, "EditorRef", void 0);
    MonacoEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-monaco-editor',
            template: __webpack_require__("../../../../../src/app/monaco-editor/monaco-editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/monaco-editor/monaco-editor.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MonacoEditorComponent);
    return MonacoEditorComponent;
    var _b, _a;
}());



/***/ }),

/***/ "../../../../../src/app/root/root.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container autosize class=\"main\">\r\n  <mat-sidenav mode=\"side\" opened=\"true\" class=\"sidebar mat-elevation-z8\">\r\n      <app-sidebar-nav [(navLinks)]=\"links\"></app-sidebar-nav>\r\n    <router-outlet name=\"sidebar\"></router-outlet>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content class=\"editor\">\r\n    <router-outlet name=\"editor\"></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/root/root.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n  height: 100vh; }\n\napp-sidebar-nav {\n  height: 49px; }\n\nmat-sidenav {\n  max-height: 100vh;\n  height: 100vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/root/root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_nav_sidebar_nav_component__ = __webpack_require__("../../../../../src/app/sidebar-nav/sidebar-nav.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RootComponent = /** @class */ (function () {
    function RootComponent() {
        this.links = [
            new __WEBPACK_IMPORTED_MODULE_1__sidebar_nav_sidebar_nav_component__["a" /* NavLink */]('Build', '/factorioCad/(sidebar:build//editor:editor)'),
            new __WEBPACK_IMPORTED_MODULE_1__sidebar_nav_sidebar_nav_component__["a" /* NavLink */]('Export', '/factorioCad/(sidebar:export//editor:editor)'),
        ];
    }
    RootComponent.prototype.ngOnInit = function () {
    };
    RootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/root/root.component.html"),
            styles: [__webpack_require__("../../../../../src/app/root/root.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "../../../../../src/app/selected.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Action__ = __webpack_require__("../../../../../src/app/Action.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SelectedService = /** @class */ (function (_super) {
    __extends(SelectedService, _super);
    function SelectedService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], SelectedService);
    return SelectedService;
}(__WEBPACK_IMPORTED_MODULE_1__Action__["a" /* Action */]));



/***/ }),

/***/ "../../../../../src/app/sidebar-nav/sidebar-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav mat-tab-nav-bar color=\"accent\">\r\n    <a mat-tab-link\r\n      *ngFor=\"let link of navLinks\"\r\n      (click)=\"link.nav(router, qp, navLinks)\"\r\n      [active]=\"link.isActive\">\r\n      {{link.name}}\r\n    </a>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/sidebar-nav/sidebar-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar-nav/sidebar-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavLink = /** @class */ (function () {
    function NavLink(name, path) {
        this.isActive = false;
        this.name = name;
        this.path = path;
        this.absPath = "../.." + path;
    }
    NavLink.prototype.nav = function (r, qp, list) {
        var _this = this;
        if (list === void 0) { list = []; }
        // Timeout to preserve animations.
        setTimeout(function () {
            console.log(qp);
            r.navigateByUrl(_this.path, { queryParams: qp });
        }, 0);
        list.forEach(function (l) { return l.isActive = false; });
        this.isActive = true;
    };
    NavLink.prototype.setIsActive = function (r) {
        return r.isActive(this.path, false);
    };
    return NavLink;
}());

var SidebarNavComponent = /** @class */ (function () {
    function SidebarNavComponent(router, ar) {
        var _this = this;
        this.router = router;
        this.ar = ar;
        this.navLinks = [];
        this.ar.queryParams.subscribe(function (p) { return _this.qp = p; });
    }
    SidebarNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navLinks.forEach(function (l) { return l.isActive = l.setIsActive(_this.router); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], SidebarNavComponent.prototype, "navLinks", void 0);
    SidebarNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar-nav',
            template: __webpack_require__("../../../../../src/app/sidebar-nav/sidebar-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar-nav/sidebar-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], SidebarNavComponent);
    return SidebarNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tab-list/tab-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group color=\"accent\" class=\"mat-elevation-z5\">\r\n  <mat-tab *ngFor=\"let link of getProps(list)\" [label]=\"link\">\r\n      <mat-grid-list cols=\"9\" rowHeight=\"40px\">\r\n        <div class=\"tile\" *ngFor=\"let item of list[link]; trackBy: trackFunc\">\r\n          <mat-grid-tile\r\n              [colspan]=\"1\"\r\n              [rowspan]=\"1\"\r\n              [matTooltip]=\"item.name\"\r\n              [class.selected]=\"toggled[item.name]\"\r\n              (click)=\"select(item)\">\r\n              <div>\r\n                <div class=\"image-center\"><img [src]=\"getUrl(item.url)\" [alt]=\"item.name\"></div>\r\n                <!-- <p>{{item.name}}</p> -->\r\n            </div>\r\n          </mat-grid-tile>\r\n        </div>\r\n      </mat-grid-list>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n\r\n<!-- <nav mat-tab-nav-bar>\r\n  <a mat-tab-link\r\n     *ngFor=\"let link of tabs\"\r\n     [routerLink]=\"\"\r\n     [fragment]=\"link\">\r\n    {{link}}\r\n  </a>\r\n</nav>\r\n\r\n<mat-list>\r\n  <div *ngFor=\"let group of list\">\r\n    <h3 mat-subheader [id]=\"group.name\">{{group.name}}</h3>\r\n    <mat-list-item *ngFor=\"let item of group.items\">\r\n      <h4 mat-line>{{item.name}}</h4>\r\n    </mat-list-item>\r\n    <mat-divider></mat-divider>\r\n  </div>\r\n</mat-list>\r\n -->"

/***/ }),

/***/ "../../../../../src/app/tab-list/tab-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\nmat-tab-group {\n  background-color: #808080;\n  margin: 8px;\n  width: 320px; }\n\nmat-grid-tile {\n  font-size: small;\n  text-align: center;\n  transition: background-color 200ms ease-in-out; }\n  mat-grid-tile div {\n    cursor: pointer; }\n  mat-grid-tile:hover {\n    background-color: #676666; }\n  mat-grid-tile.selected {\n    background-color: #4d4d4d; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tab-list/tab-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ItemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TabListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selected_service__ = __webpack_require__("../../../../../src/app/selected.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemType;
(function (ItemType) {
    ItemType[ItemType["Logistics"] = 0] = "Logistics";
    ItemType[ItemType["Production"] = 1] = "Production";
    ItemType[ItemType["Components"] = 2] = "Components";
    ItemType[ItemType["Military"] = 3] = "Military";
})(ItemType || (ItemType = {}));
var ImageRef = /** @class */ (function () {
    function ImageRef(name, url, group) {
        this.name = name;
        this.url = url;
        this.group = group;
    }
    return ImageRef;
}());

var TabListComponent = /** @class */ (function () {
    function TabListComponent(router, route, selected) {
        this.router = router;
        this.route = route;
        this.selected = selected;
        this.list = {};
        this.ordinalMap = {};
        this.toggled = {};
    }
    TabListComponent.prototype.getProps = function (obj) {
        var _this = this;
        return Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["orderBy"])(Object.getOwnPropertyNames(obj), function (p) { return _this.ordinalMap[p]; });
    };
    TabListComponent.prototype.trackFunc = function (x, i) {
        return i.name;
    };
    TabListComponent.prototype.getUrl = function (url) {
        return __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].deployUrl + "/" + url;
    };
    TabListComponent.prototype.select = function (item) {
        this.toggled = {};
        this.toggled[item.name] = true;
        this.selected.value = item;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], TabListComponent.prototype, "list", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], TabListComponent.prototype, "ordinalMap", void 0);
    TabListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tab-list',
            template: __webpack_require__("../../../../../src/app/tab-list/tab-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tab-list/tab-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__selected_service__["a" /* SelectedService */]])
    ], TabListComponent);
    return TabListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/toolbox/toolbox.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  toolbox works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/toolbox/toolbox.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toolbox/toolbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolboxComponent = /** @class */ (function () {
    function ToolboxComponent() {
    }
    ToolboxComponent.prototype.ngOnInit = function () {
    };
    ToolboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-toolbox',
            template: __webpack_require__("../../../../../src/app/toolbox/toolbox.component.html"),
            styles: [__webpack_require__("../../../../../src/app/toolbox/toolbox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolboxComponent);
    return ToolboxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/url-shortener.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlShortenerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UrlShortenerService = /** @class */ (function () {
    function UrlShortenerService(http) {
        this.http = http;
    }
    UrlShortenerService.prototype.getCurrent = function (callback) {
        console.log("Can't get a shortener working for now... (Tinyurl has CORS issues, Goo.gl has problems with the blueprint string)");
        callback(window.location.href);
        // this.http.get('http://tinyurl.com/api-create.php?url=' + encodeURIComponent(window.location.href)).subscribe(r => callback(r.json()));
    };
    UrlShortenerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UrlShortenerService);
    return UrlShortenerService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    deployUrl: '',
    urlShortenApiKey: 'AIzaSyChUmevsNp9-RlLMdd_Ix2iQHUQUGznvkw',
    firebase: {
        apiKey: "AIzaSyCJMVYfKNYSTM9bBsgg2fypF5XeNkiPmh4",
        authDomain: "factoriocad.firebaseapp.com",
        databaseURL: "https://factoriocad.firebaseio.com",
        projectId: "factoriocad",
        storageBucket: "factoriocad.appspot.com",
        messagingSenderId: "123429148303"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
        .catch(function (err) { return console.log(err); });
});


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map