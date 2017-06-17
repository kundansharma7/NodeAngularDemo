"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
// import { ProductListComponent } from './products/product-list.component';
// import { ProductFilterPipe } from './shared/Filter/product-filter.pipe';
// import { StarComponent } from './shared/star.component';
var welcome_component_1 = require("./welcome/welcome.component");
var header_component_1 = require("./header/header.component");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./home/home.component");
var emplist_component_1 = require("./emplist/emplist.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                {
                    path: '', component: login_component_1.LoginComponent
                },
                {
                    path: 'home', component: home_component_1.HomeComponent, children: [
                        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                        { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                        { path: 'empList', component: emplist_component_1.EmplistComponent }
                    ]
                }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            // ProductListComponent,
            // ProductFilterPipe,
            // StarComponent,
            welcome_component_1.WelcomeComponent,
            header_component_1.HeaderComponent,
            login_component_1.LoginComponent,
            home_component_1.HomeComponent,
            emplist_component_1.EmplistComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map