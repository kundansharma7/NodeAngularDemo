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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/Rx");
var HttpCallerService = (function () {
    function HttpCallerService(_http) {
        this._http = _http;
        this._url = 'http://localhost:3000/';
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    HttpCallerService.prototype.getData = function (localUrl, headerData) {
        return this._http.get(this._url + localUrl, headerData)
            .map(function (response) { return response.json(); })
            .do(function (data) { return JSON.stringify(data); })
            .catch(this.handleError);
    };
    HttpCallerService.prototype.handleError = function (error) {
        console.log('Error: ' + error);
        return Observable_1.Observable.throw(error.json().error || "Server error!");
    };
    HttpCallerService.prototype.getHeaders = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'application/json');
        // headers.append('Authorization', 'Basic YW5ndWxhci13YXJlaG91c2Utc2VydmljZXM6MTIzNDU2aaasswdwdwfwefefefefe');
        return headers;
    };
    HttpCallerService.prototype.postData = function (localUrl, data) {
        console.log('Inside api post', this._url + localUrl);
        return this._http.post(this._url + localUrl, data, this.getHeaders())
            .map(function (response) { return response.json(); })
            .do(function (data) {
            console.log(JSON.stringify(data));
            return JSON.stringify(data);
        })
            .catch(this.handleError);
        /*let bodyString = JSON.stringify({"data":"SOLOLink"}); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' });// ... Set content type to JSON
        headers.append("Accept", 'application/json');

        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post('http://10.0.0.46/BeEasyWeb/BeEasyWeb/Services/Assessment.svc/DataLists', bodyString,  options)
            .map((response: Response) => <any[]>response.json())
            .do(data => JSON.stringify(data ))
            .catch(this.handleError) ;
        */
    };
    HttpCallerService.prototype.putData = function (localUrl, data) {
        console.log('Inside api post', this._url + localUrl);
        return this._http.put(this._url + localUrl, data, this.getHeaders())
            .map(function (response) { return response.json(); })
            .do(function (data) {
            console.log(JSON.stringify(data));
            return JSON.stringify(data);
        })
            .catch(this.handleError);
    };
    HttpCallerService.prototype.deleteData = function (localUrl, key, val) {
        console.log('Inside api post', this._url + localUrl);
        // return this._http.post(this._url + localUrl, data, this.getHeaders())
        //     .map((response: Response) => <any[]>response.json())
        //     .do(data => {
        //         console.log(JSON.stringify(data));
        //         return JSON.stringify(data)
        //     })
        //     .catch(this.handleError);
        return this._http
            .delete(this._url + localUrl + "/?" + key + "=" + val, this.options)
            .map(function (response) { return response.json(); })
            .do(function (data) {
            console.log(JSON.stringify(data));
            return JSON.stringify(data);
        })
            .catch(this.handleError);
    };
    HttpCallerService.prototype.postDataWithoutBody = function () {
        var headers = new http_1.Headers({});
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post('/api', options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return JSON.stringify(data); })
            .catch(this.handleError);
    };
    return HttpCallerService;
}());
HttpCallerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HttpCallerService);
exports.HttpCallerService = HttpCallerService;
//# sourceMappingURL=apiCaller.js.map