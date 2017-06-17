"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var apiCaller_1 = require("../service/apiCaller");
var EmplistComponent = (function () {
    function EmplistComponent(_httpCallerService, router) {
        this._httpCallerService = _httpCallerService;
        this.router = router;
        this.hiddenElement = false;
        this.editedEmpRecord = {};
    }
    EmplistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpCallerService.getData('allEmpList', {}).subscribe(function (data) {
            _this.result = data;
            if (_this.result.statusCode === 200) {
                //localStorage.setItem('usrData', JSON.stringify(this.result.data[0]));
                console.log(_this.result);
                _this.result = _this.result.data;
                // this.location.replaceState('/'); // clears browser history so they can't navigate with back button
                //this.router.navigate(['home']);
            }
        });
    };
    EmplistComponent.prototype.editRecord = function (emp) {
        this.hiddenElement = true;
        this.editedEmpRecord = emp;
    };
    EmplistComponent.prototype.deleteRecord = function (id) {
        var _this = this;
        this._httpCallerService.deleteData('empList', 'id', id).subscribe(function (data) {
            //this.result = data;
            if (_this.result.statusCode === 200) {
                console.log(_this.result);
                //this.result = this.result.data;
            }
        });
    };
    EmplistComponent.prototype.cancel = function () {
        this.hiddenElement = false;
    };
    EmplistComponent.prototype.saveEditedRecord = function () {
    };
    return EmplistComponent;
}());
EmplistComponent = __decorate([
    core_1.Component({
        selector: 'kd-empList',
        templateUrl: 'app/emplist/emplist.component.html'
    }),
    __metadata("design:paramtypes", [apiCaller_1.HttpCallerService, router_1.Router])
], EmplistComponent);
exports.EmplistComponent = EmplistComponent;
//# sourceMappingURL=emplist.component.js.map