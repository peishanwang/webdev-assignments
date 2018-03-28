webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n  padding-top: 70px;\r\n  padding-bottom: 70px;\r\n}\r\ninput.form-control {\r\n  margin-bottom: 5px;\r\n}\r\n.cl-form-bottom-padding{\r\n  margin-bottom: 2em;\r\n}\r\na:hover{\r\n  text-decoration: none;\r\n}\r\n.cl-container-padding {\r\n  padding-top: 5%;\r\n  padding-bottom: 10%;\r\n}\r\n.cl-blue-navbar{\r\n  background-color: #337ab7;\r\n}\r\n.cl-text-white{\r\n  color: #fff;\r\n}\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n.cl-text-bold{\r\n  font-weight: bold;\r\n}\r\n.cl-icon-padding {\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n.cl-header-padding{\r\n  padding-left: 5%;\r\n}\r\n.cl-full-width{\r\n  width: 100%;\r\n}\r\n.cl-widget-list-item{\r\n  padding-bottom: 20px;\r\n}\r\n.cl-v-divider{\r\n  border-right: 1px solid #808080;\r\n  height: 100%;\r\n}\r\n.cl-widget-heading{\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n}\r\n.cl-widget-paragraph{\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n}\r\n.cl-height{\r\n  height: 100%;\r\n  min-height: 100%;\r\n}\r\n.cl-relative-position{\r\n  position: relative;\r\n}\r\n.cl-absolute-position{\r\n  position: absolute;\r\n}\r\n.cl-widget-list-icons{\r\n  top: 0px;\r\n  right: 0px;\r\n  z-index: 10;\r\n  background-color: white;\r\n}\r\n.cl-zero-right-padding{\r\n  padding-right: 0px;\r\n}\r\n.cl-list-item-borderless {\r\n  border-top: 0 none;\r\n  border-bottom: 0 none;\r\n  border-left: 0 none;\r\n  border-right: 0 none;\r\n}\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!--<h2>App Component from app-root</h2>-->\r\n<!--<a routerLink=\"/login\">Login</a>\r\n<a routerLink=\"/register\">Register</a>-->\r\n<!--<a href=\"../assets/index.html\"> Entrance for assignment2 </a>-->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_users_login_login_component__ = __webpack_require__("./src/app/views/users/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_users_profile_profile_component__ = __webpack_require__("./src/app/views/users/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_users_register_register_component__ = __webpack_require__("./src/app/views/users/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_website_website_list_website_list_component__ = __webpack_require__("./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_website_website_new_website_new_component__ = __webpack_require__("./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_website_website_edit_website_edit_component__ = __webpack_require__("./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_page_page_list_page_list_component__ = __webpack_require__("./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_page_page_new_page_new_component__ = __webpack_require__("./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_page_page_edit_page_edit_component__ = __webpack_require__("./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_widget_widget_list_widget_list_component__ = __webpack_require__("./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_quill_editor__ = __webpack_require__("./node_modules/ngx-quill-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__views_widget_widget_edit_widget_edit_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__views_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__views_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__views_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_gif_service_client__ = __webpack_require__("./src/app/services/gif.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__wbdv_sortable_directive__ = __webpack_require__("./src/app/wbdv-sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__views_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__views_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_flickr_service_client__ = __webpack_require__("./src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__views_widget_widget_list_order_by_pipe_pipe__ = __webpack_require__("./src/app/views/widget/widget-list/order-by-pipe.pipe.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__views_users_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__views_users_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_5__views_users_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__views_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__views_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
                __WEBPACK_IMPORTED_MODULE_10__views_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
                __WEBPACK_IMPORTED_MODULE_11__views_page_page_list_page_list_component__["a" /* PageListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__views_page_page_new_page_new_component__["a" /* PageNewComponent */],
                __WEBPACK_IMPORTED_MODULE_13__views_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
                __WEBPACK_IMPORTED_MODULE_14__views_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
                __WEBPACK_IMPORTED_MODULE_15__views_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
                __WEBPACK_IMPORTED_MODULE_19__views_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
                __WEBPACK_IMPORTED_MODULE_20__views_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_21__views_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
                __WEBPACK_IMPORTED_MODULE_22__views_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
                __WEBPACK_IMPORTED_MODULE_28__wbdv_sortable_directive__["a" /* WbdvSortableDirective */],
                __WEBPACK_IMPORTED_MODULE_29__views_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
                __WEBPACK_IMPORTED_MODULE_30__views_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
                __WEBPACK_IMPORTED_MODULE_31__views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_34__views_widget_widget_list_order_by_pipe_pipe__["a" /* OrderByPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_18_ngx_quill_editor__["a" /* QuillEditorModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_23__services_gif_service_client__["a" /* GifService */], __WEBPACK_IMPORTED_MODULE_24__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_25__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_26__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_27__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_32__services_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_33__services_flickr_service_client__["a" /* FlickrService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_users_login_login_component__ = __webpack_require__("./src/app/views/users/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_users_profile_profile_component__ = __webpack_require__("./src/app/views/users/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_users_register_register_component__ = __webpack_require__("./src/app/views/users/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_website_website_list_website_list_component__ = __webpack_require__("./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_website_website_edit_website_edit_component__ = __webpack_require__("./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_website_website_new_website_new_component__ = __webpack_require__("./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_page_page_list_page_list_component__ = __webpack_require__("./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_page_page_new_page_new_component__ = __webpack_require__("./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_page_page_edit_page_edit_component__ = __webpack_require__("./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_widget_widget_list_widget_list_component__ = __webpack_require__("./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_widget_widget_edit_widget_edit_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");



















var appRoutes = [
    //path from root
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__views_users_login_login_component__["a" /* LoginComponent */], pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__views_users_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__views_users_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_2__views_users_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_4__views_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_6__views_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_5__views_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_8__views_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_9__views_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_10__views_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_11__views_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_7__views_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_12__views_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/header', component: __WEBPACK_IMPORTED_MODULE_13__views_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/image', component: __WEBPACK_IMPORTED_MODULE_14__views_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/youtube', component: __WEBPACK_IMPORTED_MODULE_15__views_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/html', component: __WEBPACK_IMPORTED_MODULE_16__views_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/text', component: __WEBPACK_IMPORTED_MODULE_17__views_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */] },
    { path: 'user/website/:websiteId/page/:pageId/widget/:widgetId/flickr', component: __WEBPACK_IMPORTED_MODULE_18__views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */] }
];
/*
*
1.	login, , default							LoginComponent
2.	register								RegisterComponent
3.	user/:uid								ProfileComponent
4.	user/:uid/website							WebsiteComponent
5.	user/:uid/website/new						WebsiteNewComponent
6.	user/:uid/website/:wid						WebsiteEditComponent
7.	user/:uid/website/:wid/page					PageListComponent
8.	user/:uid/website/:wid/page/new				PageNewComponent
9.	user/:uid/website/:wid/page/:pid				PageEditComponent
10.	user/:uid/website/:wid/page/:pid/widget			WidgetListComponent
11.	user/:uid/website/:wid/page/:pid/widget/new		WidgetChooserComponent
12.	user/:uid/website/:wid/page/:pid/widget/:wgid		WidgetEditComponent

*
* */
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/models/page.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var Page = /** @class */ (function () {
    function Page(name, websiteId, description) {
        this.name = name;
        this.websiteId = websiteId;
        this.title = description;
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(username, password, firstName, lastName, email) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/models/website.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Website; });
var Website = /** @class */ (function () {
    function Website(name, developerId, description) {
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());



/***/ }),

/***/ "./src/app/models/widget.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Widget; });
var Widget = /** @class */ (function () {
    function Widget(type, pageId, name, size, text, width, url) {
        if (text === void 0) { text = 'text'; }
        if (width === void 0) { width = '100%'; }
        if (url === void 0) { url = 'url'; }
        this.type = type;
        this.pageId = pageId;
        this.size = size;
        this.text = text;
        this.url = url;
        this.width = width;
    }
    return Widget;
}());



/***/ }),

/***/ "./src/app/models/widgetText.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetText; });
var WidgetText = /** @class */ (function () {
    function WidgetText(type, pageId, name, text, rows, placeholder, formatted) {
        this.type = type;
        this.pageId = pageId;
        this.name = name;
        this.text = text;
        this.rows = rows;
        this.placeholder = placeholder;
        this.formatted = formatted;
    }
    return WidgetText;
}());



/***/ }),

/***/ "./src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by mayankrd on 8/16/17.
 */


var FlickrService = /** @class */ (function () {
    function FlickrService(_http) {
        this._http = _http;
        this.key = '90ea0df0685933f65ea96fab852a3023';
        this.secret = '59b7fb7ceb0a467b';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this._http.get(url);
    };
    FlickrService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])() // needed as we're injecting Http service into this service
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], FlickrService);
    return FlickrService;
}());



/***/ }),

/***/ "./src/app/services/gif.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GifService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GifService = /** @class */ (function () {
    function GifService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        this.apikey = '258J4ETfsQvSShza5JQScuxrO02whWZk';
        this.giphyQueryUrl = 'https://api.giphy.com/v1/gifs/random?api_key=258J4ETfsQvSShza5JQScuxrO02whWZk&tag=banana&rating=G';
    }
    GifService.prototype.getUrlLink = function (input) {
        var url = 'https://api.giphy.com/v1/gifs/random?api_key=258J4ETfsQvSShza5JQScuxrO02whWZk&tag='
            + input + '&rating=G';
        return this.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    GifService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GifService);
    return GifService;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageService = /** @class */ (function () {
    function PageService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    PageService.prototype.createPage = function (websiteId, page) {
        var url = this.baseUrl + '/api/website/' + websiteId + '/page';
        return this._http.post(url, page)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId + '/page';
        return this._http.get(url)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this._http.get(url)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        var url = this.baseUrl + '/api/page/' + pageId;
        //console.log("updating");
        return this._http.put(url, page)
            .map(function (res) {
            var data = res;
            //console.log(data);
            return data;
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this._http.delete(url)
            .map(function (res) {
            var data = res;
            return data;
        });
    };
    PageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/**
 * Created by mayankrd on 8/10/17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = /** @class */ (function () {
    function SharedService() {
        this.user = '';
    }
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    UserService.prototype.createUser = function (user) {
        var url = this.baseUrl + '/api/user';
        return this.http.post(url, user).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this.http.get(this.baseUrl + '/api/user?username=' + username)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        //console.log(this.baseUrl + '/api/user?username=' + username + '&password=' + password);
        return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
            .map(function (response) {
            //console.log(response.json());
            return response.json();
        });
    };
    UserService.prototype.updateUser = function (user) {
        var url = this.baseUrl + '/api/user/' + user._id;
        return this.http.put(url, user).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.baseUrl + '/api/user/' + userId)
            .map(function (response) {
            return response.json();
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteService = /** @class */ (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.post(url, website).map(function (response) {
            //console.log(response.json());
            return response.json();
        });
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.get(url).map(function (response) {
            //console.log(response.json());
            return response.json();
        });
    };
    WebsiteService.prototype.updateWebsite = function (newWebsite) {
        var url = this.baseUrl + '/api/website/' + newWebsite._id;
        return this.http.put(url, newWebsite).map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.get(url).map(function (response) {
            //console.log(response);
            return response.json();
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.delete(url).map(function (response) {
            return response.json();
        });
    };
    WebsiteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetService = /** @class */ (function () {
    function WidgetService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        return this._http.post(url, widget)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        return this._http.get(url)
            .map(function (res) {
            var data = res.json();
            //console.log(data);
            return data;
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this._http.get(url)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this._http.put(url, widget)
            .map(function (res) {
            var data = res;
            return data;
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this._http.delete(url)
            .map(function (res) {
            var data = res;
            return data;
        });
    };
    WidgetService.prototype.reorderWidgets = function (startIndex, endIndex, pageId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
        return this._http.put(url, '')
            .map(function (res) {
            var data = res;
            return data;
        });
    };
    WidgetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"..\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a class=\"cl-icon-padding cl-text-black\">\n          <span class=\"glyphicon glyphicon-ok\" (click)=\"updatePage()\">\n          </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\">\n      Edit Page\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\" *ngIf=\"curPage\">\n  <div class=\"form-group\">\n    <label for=\"page-name\">Name</label>\n    <input [(ngModel)]=\"curPage.name\" type=\"text\" class=\"form-control\" id=\"page-name\" placeholder=\"Page Name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"page-title\">Title</label>\n    <input [(ngModel)]=\"curPage.title\" type=\"text\" class=\"form-control\" id=\"page-title\" placeholder=\"Page Title\">\n  </div>\n  <button class=\"btn btn-danger btn-block\" (click)=\"deletePage()\">Delete</button>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"/user/{{userId}}\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, activateRoute, router) {
        this.pageService = pageService;
        this.activateRoute = activateRoute;
        this.router = router;
    }
    PageEditComponent.prototype.updatePage = function () {
        var _this = this;
        //console.log("updating");
        this.pageService.updatePage(this.pageId, this.curPage).subscribe(function (data) { return _this.router
            .navigate(['user/', _this.userId, 'website', _this.websiteId, 'page']); });
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this.pageService.deletePage(this.pageId).subscribe(function (data) { return _this.router
            .navigate(['user/', _this.userId, 'website', _this.websiteId, 'page']); });
    };
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageService.findPageById(params['pid']).subscribe(function (page) {
                _this.curPage = page;
            });
        });
    };
    PageEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-edit',
            template: __webpack_require__("./src/app/views/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__("./src/app/views/page/page-edit/page-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"../..\" class=\"cl-text-black cl-icon-padding\">\n            <span class=\"glyphicon glyphicon-chevron-left\">\n            </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a  routerLink=\"new\" class=\"cl-icon-padding cl-text-black\">\n            <span class=\"glyphicon glyphicon-plus\">\n            </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\">\n      Pages\n    </a>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li *ngFor = \"let page of pages\" class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"{{page._id}}\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n      <a routerLink=\"{{page._id}}/widget\">{{page.name}}</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"/user/{{userId}}\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, activateRoute) {
        this.pageService = pageService;
        this.activateRoute = activateRoute;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageService.findPageByWebsiteId(_this.websiteId).subscribe(function (pages) {
                _this.pages = pages;
            });
        });
    };
    PageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-list',
            template: __webpack_require__("./src/app/views/page/page-list/page-list.component.html"),
            styles: [__webpack_require__("./src/app/views/page/page-list/page-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"..\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a class=\"cl-icon-padding cl-text-black\">\n          <span class=\"glyphicon glyphicon-ok\" (click)=\"createPage()\">\n          </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\">\n      New Page\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div class=\"form-group\">\n    <label for=\"page-name\">Name</label>\n    <input [(ngModel)]=\"pageName\" type=\"text\" class=\"form-control\" id=\"page-name\" placeholder=\"Page Name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"page-title\">Title</label>\n    <input [(ngModel)]=\"pageTitle\" type=\"text\" class=\"form-control\" id=\"page-title\" placeholder=\"Page Title\">\n  </div>\n  <button routerLink=\"..\" class=\"btn btn-danger btn-block\">Delete</button>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"/user/{{userId}}\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_page_model_client__ = __webpack_require__("./src/app/models/page.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageService, activateRoute, router) {
        this.pageService = pageService;
        this.activateRoute = activateRoute;
        this.router = router;
    }
    PageNewComponent.prototype.createPage = function () {
        var _this = this;
        var newPage = new __WEBPACK_IMPORTED_MODULE_3__models_page_model_client__["a" /* Page */](this.pageName, this.websiteId, this.pageTitle);
        this.pageService.createPage(this.websiteId, newPage).subscribe(function (data) { return _this.router
            .navigate(['user/', _this.userId, 'website', _this.websiteId, 'page']); });
    };
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
    };
    PageNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-new',
            template: __webpack_require__("./src/app/views/page/page-new/page-new.component.html"),
            styles: [__webpack_require__("./src/app/views/page/page-new/page-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/views/users/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/users/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"errorFlag\"\r\n     class=\"alert alert-danger\">\r\n  {{errorMsg}}\r\n\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <h1>Login</h1>\r\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\r\n    <label>Username</label>\r\n    <input placeholder=\"username\" name=\"username\" type=\"text\" class=\"form-control\" ngModel required #username=\"ngModel\"/>\r\n\r\n    <label>Password</label>\r\n    <input placeholder=\"password\" name=\"password\" type=\"password\" class=\"form-control\" ngModel required #password=\"ngModel\"/>\r\n\r\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\r\n        Please enter username!\r\n    </span>\r\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\r\n        Please enter password!\r\n  </span>\r\n    <button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"!f.valid\">Login</button>\r\n    <button class=\"btn btn-success btn-block\" type=\"submit\"\r\n            [routerLink]=\"['/register']\">Register</button>\r\n    <p style=\"color: darkorange\">Hi! You can use username: 'jannunzi' password: 'jannunzi' to login. Then click 'websites' - 'Gizmodo' - 'Post 1' to view the widget list :)</p>\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/users/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.findUserByCredentials(this.username, this.password)
            .subscribe(function (user) {
            _this.router.navigate(['user/', user._id]);
        }, function (error) {
            _this.errorFlag = true;
            //alert(this.errorMsg);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/views/users/login/login.component.html"),
            styles: [__webpack_require__("./src/app/views/users/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/users/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/users/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar cl-blue-navbar navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\r\n      Profile\r\n    </a>\r\n    <a routerLink=\".\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\r\n      <span class=\"glyphicon glyphicon-ok\" (click)=\"updateUser()\"></span>\r\n    </a>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<div class=\"container\" *ngIf=\"user\">\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">Username</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"user.username\" name = \"username\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email address</label>\r\n      <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"user.email\" name = \"email\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"first-name\">First Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"first-name\" [(ngModel)]=\"user.firstName\" name = \"first-name\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"last-name\">Last Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"last-name\" [(ngModel)]=\"user.lastName\" name = \"last-name\">\r\n    </div>\r\n  </form>\r\n\r\n  <a class=\"btn btn-primary btn-block\"\r\n     routerLink=\"/user/{{user._id}}/website\">Websites</a>\r\n  <a class=\"btn btn-danger  btn-block\"\r\n     [routerLink]=\"['/login']\">Logout</a>\r\n  <a (click)=\"deleteUser()\"\r\n     class=\"btn btn-danger btn-block\">Delete User</a>\r\n</div>\r\n\r\n<nav class=\"navbar cl-blue-navbar navbar-fixed-bottom\">\r\n  <div class=\"container-fluid\">\r\n    <a class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\r\n      <span class=\"glyphicon glyphicon-user\" ></span>\r\n    </a>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/views/users/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        //console.log(user);
        this.route.params.subscribe(function (params) {
            _this.userService.updateUser(_this.user).subscribe();
        });
    };
    ProfileComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userService.deleteUser(this.userId).subscribe(function (status) {
            _this.router.navigate(['/login']);
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['uid'];
            return _this.userService.findUserById(_this.userId).subscribe(function (user) {
                _this.user = user;
                //console.log(user);
            });
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/views/users/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/views/users/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/users/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/users/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"errorFlag\"\r\n     class=\"alert alert-danger\">\r\n  {{errorMsg}}\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <h1>Register</h1>\r\n  <form (ngSubmit) = \"register()\" #f=\"ngForm\">\r\n    <input placeholder=\"username\" name=\"username\" type=\"text\" class=\"form-control\" ngModel required #username=\"ngModel\"/>\r\n\r\n    <input placeholder=\"verify password\" name=\"password1\" type=\"password\" class=\"form-control\" ngModel required #password1=\"ngModel\"/>\r\n\r\n    <input placeholder=\"password\" name=\"password2\" type=\"password\" class=\"form-control\" ngModel required #password2=\"ngModel\"/>\r\n\r\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\r\n        Please enter username!\r\n    </span>\r\n\r\n    <span class=\"help-block\" *ngIf=\"!password1.valid && password1.touched\">\r\n        Please enter password!\r\n    </span>\r\n\r\n    <span class=\"help-block\" *ngIf=\"!password2.valid && password2.touched\">\r\n        Please verify your password!\r\n    </span>\r\n\r\n    <button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"!f.valid\">Register</button>\r\n    <button class=\"btn btn-danger btn-block\" type=\"submit\"\r\n            [routerLink]=\"['/login']\">Cancel</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/users/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model_client__ = __webpack_require__("./src/app/models/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Passwords are different!';
        this.errorFlag = false;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password1;
        this.confirmPassword = this.registerForm.value.password2;
        if (this.password == this.confirmPassword) {
            var user = new __WEBPACK_IMPORTED_MODULE_2__models_user_model_client__["a" /* User */](this.username, this.password, '', '', '');
            this.userService.createUser(user).subscribe(function (user) {
                _this.router.navigate(['user/', user._id]);
            });
        }
        else {
            this.errorFlag = true;
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/views/users/register/register.component.html"),
            styles: [__webpack_require__("./src/app/views/users/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top cl-blue-navbar\">\n  <div class=\"row\">\n    <div class=\"col-xs-4 hidden-xs\">\n      <div class=\"container-fluid\">\n        <p class=\"navbar-text pull-left\">\n          <a routerLink=\"..\" class=\"navbar-link cl-text-white\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n        <a class=\"cl-text-white navbar-brand cl-text-bold\">\n          Websites\n        </a>\n        <a routerLink=\"../new\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-xs-8\">\n      <div class=\"container-fluid\">\n        <a class=\"cl-text-white navbar-brand cl-text-bold\">\n          Edit Websites\n        </a>\n        <a class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-ok\" (click)=\"updateWebsite()\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"contain-fluid\">\n  <div class=\"col-xs-4 hidden-xs\" *ngIf=\"websites\">\n    <ul class=\"list-group cl-list-group-borderless\">\n      <li *ngFor = \"let website of websites\" class=\"list-group-item cl-list-item-borderless\">\n        <a routerLink=\"../{{website._id}}\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n        <a routerLink=\"../{{website._id}}/page\">{{website.name}}</a>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"col-xs-8\" *ngIf=\"curWebsite\">\n    <div class=\"form-group\">\n      <label for=\"website-name\">Website Name</label>\n      <input [(ngModel)]=\"curWebsite.name\" type=\"text\" class=\"form-control\" id=\"website-name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"website-description\">Website Description</label>\n      <textarea [(ngModel)]=\"curWebsite.description\" id=\"website-description\" class=\"form-control\" rows=\"5\"></textarea>\n    </div>\n    <button class=\"btn btn-danger btn-block\" (click)=\"deleteWebsite()\">Delete</button>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"/user/{{userId}}\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, activateRoute, router) {
        this.websiteService = websiteService;
        this.activateRoute = activateRoute;
        this.router = router;
    }
    WebsiteEditComponent.prototype.updateWebsite = function () {
        var _this = this;
        this.websiteService.updateWebsite(this.curWebsite).subscribe(function (data) { return _this.router.navigate(['user/', _this.userId, 'website']); });
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.websiteId).subscribe(function (data) { return _this.router.navigate(['user/', _this.userId, 'website']); });
    };
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.websiteService.findWebsiteById(_this.websiteId).subscribe(function (website) {
                //console.log(website);
                _this.curWebsite = website;
            });
            _this.websiteService.findWebsitesByUser(_this.userId).subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    WebsiteEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-edit',
            template: __webpack_require__("./src/app/views/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__("./src/app/views/website/website-edit/website-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top cl-blue-navbar\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"..\"  class=\"navbar-link cl-text-white\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n    <a class=\"cl-text-white navbar-brand cl-text-bold\">\n      Websites\n    </a>\n    <a routerLink=\"new\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-plus\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\" *ngIf=\"websites\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li *ngFor = \"let website of websites\" class=\"list-group-item cl-list-item-borderless\">\n      <!--{{website.name}}-->\n      <a routerLink=\"{{website._id}}\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n      <a routerLink=\"{{website._id}}/page\">{{website.name}}</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"/user/{{userId}}\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activateRoute) {
        this.websiteService = websiteService;
        this.activateRoute = activateRoute;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.websiteService.findWebsitesByUser(params['uid']).subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    WebsiteListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-list',
            template: __webpack_require__("./src/app/views/website/website-list/website-list.component.html"),
            styles: [__webpack_require__("./src/app/views/website/website-list/website-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top cl-blue-navbar\">\n  <div class=\"row\">\n    <div class=\"col-xs-4 hidden-xs\">\n      <div class=\"container-fluid\">\n        <p class=\"navbar-text pull-left\">\n          <a routerLink=\"/user/{{userId}}/website\" class=\"navbar-link cl-text-white\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          </a>\n        </p>\n        <a class=\"cl-text-white navbar-brand cl-text-bold\">\n          Websites\n        </a>\n        <a routerLink=\"/user/{{userId}}/website/new\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-xs-8\">\n      <div class=\"container-fluid\">\n        <a class=\"cl-text-white navbar-brand cl-text-bold\">\n          New Websites\n        </a>\n        <a class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-ok\" (click)=\"createWebsite()\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"contain-fluid\">\n  <div class=\"col-xs-4 hidden-xs\">\n    <ul class=\"list-group cl-list-group-borderless\">\n      <li *ngFor = \"let website of websites\" class=\"list-group-item cl-list-item-borderless\">\n        <a routerLink=\"/user/{{userId}}/website/{{website._id}}\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n        <a routerLink=\"/user/{{userId}}/website/{{website._id}}/page\">{{website.name}}</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-xs-8\">\n    <div class=\"form-group\">\n      <label for=\"website-name\">Name</label>\n      <input [(ngModel)] =\"webName\" type=\"text\" class=\"form-control\" id=\"website-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"website-description\">Description</label>\n      <textarea [(ngModel)]=\"webDes\" id=\"website-description\" class=\"form-control\" rows=\"5\" placeholder=\"Description\"></textarea>\n    </div>\n    <button routerLink=\"/user/{{userId}}/website\" class=\"btn btn-danger btn-block\">Cancel</button>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"/user/{{userId}}\" class=\"navbar-link navbar-text pull-right cl-text-white cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_website_model_client__ = __webpack_require__("./src/app/models/website.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, activateRoute, router) {
        this.websiteService = websiteService;
        this.activateRoute = activateRoute;
        this.router = router;
    }
    WebsiteNewComponent.prototype.createWebsite = function () {
        var _this = this;
        var newWebsite = new __WEBPACK_IMPORTED_MODULE_1__models_website_model_client__["a" /* Website */](this.webName, this.userId, this.webDes);
        this.websiteService.createWebsite(this.userId, newWebsite).subscribe(function (data) { return _this.router.navigate(['user/', _this.userId, 'website']); });
    };
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteService.findWebsitesByUser(_this.userId).subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    WebsiteNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-new',
            template: __webpack_require__("./src/app/views/website/website-new/website-new.component.html"),
            styles: [__webpack_require__("./src/app/views/website/website-new/website-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"..\"\n         class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n      </a>\n    </div>\n\n    <a class=\"navbar-brand cl-text-white cl-text-bold\">\n      Choose Widget\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"./header\">Header</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"./image\">Image</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"./youtube\">Youtube</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"./html\">HTML</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"./text\">Text</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n\n      <a routerLink=\"/user/{{userId}}\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(activateRoute) {
        this.activateRoute = activateRoute;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
        });
    };
    WidgetChooserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-chooser',
            template: __webpack_require__("./src/app/views/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-chooser/widget-chooser.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"widget\" [ngSwitch]=\"widget.type\">\n\n  <div *ngSwitchCase=\"'HEADING'\" >\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n\n  <div *ngSwitchCase=\"'TEXT'\">\n    <app-widget-text></app-widget-text>\n  </div>\n\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"/user/{{userId}}\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(widgetService, activateRoute) {
        this.widgetService = widgetService;
        this.activateRoute = activateRoute;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.widgetService.findWidgetById(params['wgid']).subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    WidgetEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-edit',
            template: __webpack_require__("./src/app/views/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-edit/widget-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"..\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\" (click)=\"back()\">\n          </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a class=\"cl-icon-padding cl-text-black\">\n          <span class=\"glyphicon glyphicon-ok\" (click)=\"updateWidget()\">\n          </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\">\n      Widgets Edit\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\" *ngIf=\"curWidget\">\n  <div class=\"form-group\">\n    <label for=\"heading-name\">Name</label>\n    <input [(ngModel)]=\"curWidget.name\" class=\"form-control\" id=\"heading-name\" placeholder=\"Name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"heading-text\">Text</label>\n    <input [(ngModel)]=\"curWidget.text\" type=\"text\" class=\"form-control\" id=\"heading-text\" placeholder=\"Text\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"heading-size\">Size</label>\n    <input [(ngModel)]=\"curWidget.size\" type=\"number\" class=\"form-control\" id=\"heading-size\" placeholder=\"Size\"\n           step=\"1\" min=\"1\" max=\"6\">\n  </div>\n  <button class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">Delete</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__ = __webpack_require__("./src/app/models/widget.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetService, activateRoute, router) {
        this.widgetService = widgetService;
        this.activateRoute = activateRoute;
        this.router = router;
    }
    WidgetHeaderComponent.prototype.updateWidget = function () {
        var _this = this;
        this.widgetService.updateWidget(this.widgetId, this.curWidget)
            .subscribe(function (data) { return _this.router
            .navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']); }, function (error) { return console.log(error); });
    };
    WidgetHeaderComponent.prototype.back = function () {
        if (this.isNew) {
            this.deleteWidget();
        }
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) { return _this.router
            .navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']); }, function (error) { return console.log(error); });
    };
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.isNew = false;
            if (params['wgid'] === undefined) {
                _this.isNew = true;
                var widgetNew = new __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__["a" /* Widget */]('HEADING', _this.pageId, '', 2, '', '', '');
                _this.widgetService.createWidget(_this.pageId, widgetNew).subscribe(function (widget) {
                    _this.widgetId = widget._id;
                    //console.log(this.widgetId);
                    _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (widget) {
                        _this.curWidget = widget;
                    });
                });
            }
            else {
                _this.widgetId = params['wgid'];
                _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (widget) {
                    _this.curWidget = widget;
                });
            }
        });
    };
    WidgetHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-header',
            template: __webpack_require__("./src/app/views/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"..\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\" (click)=\"back()\">\n          </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a class=\"cl-icon-padding cl-text-black\">\n          <span class=\"glyphicon glyphicon-ok\" (click)=\"updateWidget()\">\n          </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\">\n      Widgets Edit\n    </a>\n  </div>\n</nav>\n\n\n<div class=\"container\" *ngIf=\"curWidget\">\n  <div *ngIf=\"flag\"\n       class=\"alert alert-danger\">\n    {{error}}\n  </div>\n  <form novalidate name=\"model.myform\">\n    <div class=\"form-group\">\n      <label for=\"Name\">Name</label>\n      <input [(ngModel)]=\"curWidget.name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"Name\"\n             name=\"widname\"\n             placeholder=\"Name\"\n             required>\n      <span class=\"alert-class\"\n            *ngIf=\"flag\">{{alert}}</span>\n    </div>\n    <quill-editor [(ngModel)]=\"curWidget.text\" name=\"text\"></quill-editor>\n  </form>\n  <p></p>\n\n  <a class=\"btn btn-danger btn-block \"\n     (click)=\"deleteWidget()\">Delete</a>\n\n</div>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__ = __webpack_require__("./src/app/models/widget.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHtmlComponent = /** @class */ (function () {
    function WidgetHtmlComponent(widgetService, activateRoute, router) {
        this.widgetService = widgetService;
        this.activateRoute = activateRoute;
        this.router = router;
    }
    WidgetHtmlComponent.prototype.updateWidget = function () {
        var _this = this;
        this.widgetService.updateWidget(this.widgetId, this.curWidget)
            .subscribe(function (data) { return _this.router
            .navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']); }, function (error) { return console.log(error); });
    };
    WidgetHtmlComponent.prototype.back = function () {
        if (this.isNew) {
            console.log(this.widgetId);
            this.deleteWidget();
        }
    };
    WidgetHtmlComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) { return _this.router
            .navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']); }, function (error) { return console.log(error); });
    };
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.isNew = false;
            if (params['wgid'] === undefined) {
                _this.isNew = true;
                var widgetNew = new __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__["a" /* Widget */]('HTML', _this.pageId, '', 2, '', '', '');
                _this.widgetService.createWidget(_this.pageId, widgetNew).subscribe(function (widget) {
                    _this.widgetId = widget._id;
                    _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (widget) {
                        _this.curWidget = widget;
                    });
                });
            }
            else {
                _this.widgetId = params['wgid'];
                _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (widget) {
                    _this.curWidget = widget;
                });
            }
        });
    };
    WidgetHtmlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-html',
            template: __webpack_require__("./src/app/views/widget/widget-edit/widget-html/widget-html.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-edit/widget-html/widget-html.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetHtmlComponent);
    return WidgetHtmlComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--Header-->\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!--Left arrow-->\n    <p class=\"navbar-text pull-left\">\n      <a [routerLink]=\"['/user', 'website', websiteId, 'page', pageId, 'widget', widgetId]\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n    <span>\n        <!--heading on the nav bar-->\n        <p class=\"navbar-header pull-left\">\n            <a class=\"navbar-brand thick\">\n                <b>Search Flickr</b>\n            </a>\n        </p>\n        </span>\n  </div>\n</nav>\n\n<!--!!Material on the page!!-->\n<div class = \"container\">\n  <div class=\"input-group\">\n    <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\n    <span class=\"input-group-btn\">\n            <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n                <span class=\"glyphicon glyphicon-search\"></span>\n            </a>\n        </span>\n  </div>\n\n  <div class=\"row\" *ngIf=\"photos\">\n    <div *ngFor = \"let pic of photos['photo']\"\n         class=\"col-xs-4\">\n      <img    (click)=\"selectPhoto(pic)\"\n              width=\"100%\"\n              [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_s.jpg']\"/>\n\n      <!--[src] = \"https://farm\" + photo.farm + \".staticflickr.com/\" + photo.server + \"/\" + photo.id + \"_\" + photo.secret + \"_\" + \"s.jpg\"/>-->\n      <p></p>\n    </div>\n  </div>\n\n</div>\n<!-- Footer -->\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <!--Play Symbol-->\n    <!--User Symbol-->\n    <p class=\"navbar-text pull-right\">\n      <a [routerLink]=\"['/profile']\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrImageSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__ = __webpack_require__("./src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FlickrImageSearchComponent = /** @class */ (function () {
    function FlickrImageSearchComponent(flickrService, widgetService, router, activatedRoute, sharedService) {
        this.flickrService = flickrService;
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // fetch userId from shared service
        this.userId = this.sharedService.user['_id'];
        // fetch userId, pageId and websiteId from url
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
            _this.widgetId = params['widgetId'];
        });
    };
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            _this.photos = val.photos;
        });
        // .then(function (response) {
        //   let dat = response.data.replace('jsonFlickrApi(', '');
        //   dat = dat.substring(0, dat.length - 1);
        //   dat = JSON.parse(dat);
        //   this.photos = dat.photos;
        // });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        var widget = {
            websiteId: this.websiteId,
            pageId: this.pageId,
            url: url
        };
        this.widgetService
            .updateWidget(this.widgetId, widget)
            .subscribe(function (data) {
            var result = data;
            if (result) {
                _this.router.navigate(['/user/' + _this.userId + '/website/' + _this.websiteId + '/page/' + _this.pageId + '/widget/' + _this.widgetId]);
            }
            else {
                _this.error = 'failed!';
            }
        });
        // .then(function (response) {
        //   const result = response.data;
        //   if(result){
        //     this.router.url('/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget/' + this.widgetId);
        //   }else{
        //     const error = 'failed!';
        //   }
        // });
    };
    FlickrImageSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-flickr-image-search',
            template: __webpack_require__("./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__["a" /* FlickrService */], __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]])
    ], FlickrImageSearchComponent);
    return FlickrImageSearchComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"..\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\" (click)=\"back()\">\n          </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\"\n         class=\"cl-icon-padding cl-text-black\">\n          <span class=\"glyphicon glyphicon-ok\" (click)=\"updateWidget()\">\n          </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n      Widgets Edit\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\" *ngIf=\"curWidget\">\n  <div class=\"form-group\">\n    <label for=\"image-name\">Name</label>\n    <input [(ngModel)]=\"curWidget.name\" type=\"text\" class=\"form-control\" id=\"image-name\" placeholder=\"Name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"image-text\">Text</label>\n    <input [(ngModel)]=\"curWidget.text\" type=\"text\" class=\"form-control\" id=\"image-text\" placeholder={{curWidget.text}}>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"image-URL\">URL</label>\n    <input [(ngModel)]=\"curWidget.url\" type=\"text\" class=\"form-control\" id=\"image-URL\" placeholder={{curWidget.url}}>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"image-width\">Width</label>\n    <input [(ngModel)]=\"curWidget.width\" type=\"text\" class=\"form-control\" id=\"image-width\" placeholder={{curWidget.width}}>\n  </div>\n\n  <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n    <input  name=\"myFile\"   type=\"file\" class=\"form-control\"/>\n    <input  name=\"widgetId\" value=\"{{curWidget._id}}\"   style=\"display: none\"/>\n    <input  name=\"websiteId\" value=\"{{websiteId}}\"   style=\"display: none\"/>\n    <input  name=\"pageId\" value=\"{{pageId}}\"   style=\"display: none\"/>\n    <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\n    <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n    <br/>\n  </form>\n\n  <a class=\"btn btn-primary btn-block \"\n     [routerLink]=\"['/user'+'/website/'+websiteId+'/page/'+pageId+'/widget/'+widgetId+'/flickr']\" >Choose From Flickr</a>\n\n\n  <button class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">Delete</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__ = __webpack_require__("./src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(widgetService, activateRoute, router) {
        this.widgetService = widgetService;
        this.activateRoute = activateRoute;
        this.router = router;
    }
    WidgetImageComponent.prototype.updateWidget = function () {
        var _this = this;
        this.widgetService.updateWidget(this.widgetId, this.curWidget)
            .subscribe(function (data) { return _this.router
            .navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']); }, function (error) { return console.log(error); });
    };
    WidgetImageComponent.prototype.back = function () {
        if (this.isNew) {
            this.deleteWidget();
        }
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) { return _this.router
            .navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']); }, function (error) { return console.log(error); });
    };
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.isNew = false;
            if (params['wgid'] === undefined) {
                _this.isNew = true;
                var widgetNew = new __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__["a" /* Widget */]('IMAGE', _this.pageId, '', undefined, '', '', '');
                _this.widgetService.createWidget(_this.pageId, widgetNew).subscribe(function (widget) {
                    _this.widgetId = widget._id;
                    //console.log(this.widgetId);
                    _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (widget) {
                        _this.curWidget = widget;
                    });
                });
            }
            else {
                _this.widgetId = params['wgid'];
                _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (widget) {
                    _this.curWidget = widget;
                });
            }
        });
    };
    WidgetImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-image',
            template: __webpack_require__("./src/app/views/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"..\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\" (click)=\"back()\">\n          </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a class=\"cl-icon-padding cl-text-black\">\n          <span class=\"glyphicon glyphicon-ok\" (click)=\"updateWidget()\">\n          </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\">\n      Widgets Edit\n    </a>\n  </div>\n</nav>\n\n<!--Body of the page -->\n<div class=\"container\" *ngIf=\"curWidget\">\n  <div *ngIf=flag\n       class=\"alert alert-danger\">\n    {{error}}\n  </div>\n  <label for=\"Name\">Name</label>\n  <div>\n    <input [(ngModel)]=\"curWidget.name\"\n           type=\"text\"\n           class=\"form-control\"\n           id=\"Name\"\n           name=\"name\"\n           placeholder=\"Name\">\n    <span class=\"alert-class\"\n          *ngIf=flag>{{alert}}</span>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"text\">Text</label>\n    <input [(ngModel)]=\"curWidget.text\" type=\"text\" class=\"form-control\" id=\"text\" placeholder=\"Text\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"rows\">Rows</label>\n    <input [(ngModel)]=\"curWidget.rows\" type=\"text\" class=\"form-control\" id=\"rows\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"placeholder\">Placeholder</label>\n    <input [(ngModel)]=\"curWidget.placeholder\" id=\"placeholder\" class=\"form-control\" required>\n  </div>\n  <p></p>\n  <div class=\"input-group\">\n    <input type=\"text\"\n           readonly\n           value=\"Formatted\"\n           class=\"form-control\"/>\n    <span class=\"input-group-addon\">\n        <input [(ngModel)]=\"curWidget.formatted\"\n               type=\"checkbox\"/>\n    </span>\n  </div>\n  <p></p>\n  <a class=\"btn btn-danger btn-block \"\n     (click)=\"deleteWidget()\">Delete</a>\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_widgetText_model_client__ = __webpack_require__("./src/app/models/widgetText.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetTextComponent = /** @class */ (function () {
    function WidgetTextComponent(widgetService, activateRoute, router) {
        this.widgetService = widgetService;
        this.activateRoute = activateRoute;
        this.router = router;
    }
    WidgetTextComponent.prototype.updateWidget = function () {
        var _this = this;
        this.widgetService.updateWidget(this.widgetId, this.curWidget)
            .subscribe(function (data) { return _this.router
            .navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']); }, function (error) { return console.log(error); });
    };
    WidgetTextComponent.prototype.back = function () {
        if (this.isNew) {
            this.deleteWidget();
        }
    };
    WidgetTextComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) { return _this.router
            .navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']); }, function (error) { return console.log(error); });
    };
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.isNew = false;
            if (params['wgid'] === undefined) {
                _this.isNew = true;
                var widgetNew = new __WEBPACK_IMPORTED_MODULE_3__models_widgetText_model_client__["a" /* WidgetText */]('TEXT', _this.pageId, '', '', 1, '', false);
                _this.widgetService.createWidget(_this.pageId, widgetNew).subscribe(function (widget) {
                    _this.widgetId = widget._id;
                    _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (widget) {
                        _this.curWidget = widget;
                    });
                });
            }
            else {
                _this.widgetId = params['wgid'];
                _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (widget) {
                    _this.curWidget = widget;
                });
            }
        });
    };
    WidgetTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-text',
            template: __webpack_require__("./src/app/views/widget/widget-edit/widget-text/widget-text.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-edit/widget-text/widget-text.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], WidgetTextComponent);
    return WidgetTextComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"..\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\" (click)=\"back()\">\n          </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"/user/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\"\n         class=\"cl-icon-padding cl-text-black\">\n          <span class=\"glyphicon glyphicon-ok\" (click)=\"updateWidget()\">\n          </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\" href=\"#\">\n      Widgets Edit\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\" *ngIf=\"curWidget\">\n  <div class=\"form-group\">\n    <label for=\"youtube-name\">Name</label>\n    <input [(ngModel)]=\"curWidget.name\" type=\"text\" class=\"form-control\" id=\"youtube-name\" placeholder=\"Name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"youtube-text\">Text</label>\n    <input [(ngModel)]=\"curWidget.text\" type=\"text\" class=\"form-control\" id=\"youtube-text\" placeholder={{curWidget.text}}>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"youtube-URL\">URL</label>\n    <input [(ngModel)]=\"curWidget.url\" type=\"text\" class=\"form-control\" id=\"youtube-URL\" placeholder={{curWidget.url}}>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"youtube-width\">Width</label>\n    <input [(ngModel)]=\"curWidget.width\" type=\"text\" class=\"form-control\" id=\"youtube-width\" placeholder={{curWidget.width}}>\n  </div>\n  <button class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">Delete</button>\n</div>\n\n<!--<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid rows\">\n    <div class=\"pull-right navbar-text\">\n\n      <a routerLink=\"/user/{{userId}}\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n\n    </div>\n  </div>\n</nav>-->\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__ = __webpack_require__("./src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetService, activateRoute, router) {
        this.widgetService = widgetService;
        this.activateRoute = activateRoute;
        this.router = router;
    }
    WidgetYoutubeComponent.prototype.updateWidget = function () {
        var _this = this;
        this.widgetService.updateWidget(this.widgetId, this.curWidget)
            .subscribe(function (data) { return _this.router
            .navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']); }, function (error) { return console.log(error); });
    };
    WidgetYoutubeComponent.prototype.back = function () {
        if (this.isNew) {
            this.deleteWidget();
        }
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) { return _this.router
            .navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']); }, function (error) { return console.log(error); });
    };
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.isNew = false;
            if (params['wgid'] === undefined) {
                _this.isNew = true;
                var widgetNew = new __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__["a" /* Widget */]('YOUTUBE', _this.pageId, '', undefined, '', '', '');
                _this.widgetService.createWidget(_this.pageId, widgetNew).subscribe(function (widget) {
                    _this.widgetId = widget._id;
                    //console.log(this.widgetId);
                    _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (widget) {
                        _this.curWidget = widget;
                    });
                });
            }
            else {
                _this.widgetId = params['wgid'];
                _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (widget) {
                    _this.curWidget = widget;
                });
            }
        });
    };
    WidgetYoutubeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-youtube',
            template: __webpack_require__("./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/order-by-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by mayankrd on 8/15/17.
 */

var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, args) {
        array.sort(function (a, b) {
            if (a.position < b.position) {
                return -1;
            }
            else if (a.position > b.position) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    OrderByPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'orderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports) {

module.exports = ".youtube-widget {\r\n  position: relative;\r\n  padding-bottom: 56.25%; /* 16:9 */\r\n  height: 0;\r\n}\r\n.youtube-widget iframe {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"../..\" class=\"cl-text-black cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"new\" class=\"cl-icon-padding cl-text-black\">\n          <span class=\"glyphicon glyphicon-plus\">\n          </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand cl-text-white cl-text-bold\">\n      Widgets\n    </a>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding\" appWbdvSortable (newIndexes)=\"reorderWidgets($event)\" *ngIf=\"widgets\">\n  <div *ngFor=\"let widget of widgets | orderBy\" [ngSwitch]=\"widget.type\">\n    <div *ngSwitchCase=\"'HEADING'\">\n      <div class=\"pull-right\">\n        <a class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n        </a>\n        <a routerLink=\"{{widget._id}}\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </div>\n      <div [ngSwitch]=\"widget.size\">\n        <h1 *ngSwitchCase=\"1\">{{widget.text}}</h1>\n        <h2 *ngSwitchCase=\"2\">{{widget.text}}</h2>\n        <h3 *ngSwitchCase=\"3\">{{widget.text}}</h3>\n        <h4 *ngSwitchCase=\"4\">{{widget.text}}</h4>\n        <h5 *ngSwitchCase=\"5\">{{widget.text}}</h5>\n        <h6 *ngSwitchCase=\"6\">{{widget.text}}</h6>\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"'IMAGE'\">\n      <a class=\"pull-right\">\n        <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n      </a>\n      <a routerLink=\"{{widget._id}}\" class=\"pull-right\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <img class=\"img-responsive img-rounded cl-widget-images\"\n           src={{widget.url}} width= \"widget.width\">\n    </div>\n\n    <div *ngSwitchCase=\"'TEXT'\">\n      <a class=\"pull-right\">\n        <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n      </a>\n      <a routerLink=\"{{widget._id}}\" class=\"pull-right\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <div *ngIf=\"widget.formatted\">\n        <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n      </div>\n\n      <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n             placeholder=\"{{widget.placeholder}}\" [(ngModel)] = \"widget.text\"  class=\"form-control\"/>\n\n      <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                class=\"form-control\" [(ngModel)] = \"widget.text\"></textarea>\n    </div>\n\n    <div *ngSwitchCase=\"'HTML'\">\n      <a class=\"pull-right\">\n        <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n      </a>\n      <a routerLink=\"{{widget._id}}\" class=\"pull-right\">\n        <span class=\"glyphicon glyphicon-cog\"></span>\n      </a>\n      <div [innerHTML]=\"widget.text\"></div>\n    </div>\n\n\n    <div *ngSwitchCase=\"'YOUTUBE'\" class=\"youtube-widget\">\n      <div class=\"embed-responsive embed-responsive-16by9\">\n        <iframe width=\"420\" height=\"315\" [src]= getUrl(widget.url) frameborder=\"0\" allowfullscreen></iframe>\n        <a class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-menu-hamburger cl-background-white\"></span>\n        </a>\n        <a routerLink=\"{{widget._id}}\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog cl-background-white\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n\n      <a routerLink=\"/user/{{userId}}\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n\n    </div>\n\n    <div class=\"pull-left navbar-text\">\n      <a class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-play\"></span>\n      </a>\n      <a class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-eye-open\"></span>\n      </a>\n\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetService, activateRoute, sanitizer) {
        this.widgetService = widgetService;
        this.activateRoute = activateRoute;
        this.sanitizer = sanitizer;
    }
    WidgetListComponent.prototype.getUrl = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url.toString().replace('watch?v=', 'embed/'));
    };
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.webId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetService.findWidgetsByPageId(_this.pageId).subscribe(function (widgets) {
                _this.widgets = widgets;
                //console.log(this.widgets);
            });
        });
    };
    WidgetListComponent.prototype.reorderWidgets = function (indexes) {
        // call widget service function to update widget as per index
        //console.log(indexes);
        this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
            .subscribe();
    };
    WidgetListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-list',
            template: __webpack_require__("./src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__("./src/app/views/widget/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/app/wbdv-sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WbdvSortableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WbdvSortableDirective = /** @class */ (function () {
    function WbdvSortableDirective(el) {
        this.el = el;
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](); // this will emit an event for the parent component or the directive calling component
    }
    // Lifecycle hook that is called after a component's view has been fully initialized
    WbdvSortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    WbdvSortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                refe.initialIndex = ui.item.index();
                //console.log("start at: " + refe.initialIndex);
            },
            stop: function (event, ui) {
                //console.log("stop at: " + ui.item.index());
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], WbdvSortableDirective.prototype, "newIndexes", void 0);
    WbdvSortableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appWbdvSortable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], WbdvSortableDirective);
    return WbdvSortableDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:5000'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map