import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';

@Injectable()
export class HttpCallerService {
    private _url = 'http://localhost:3000/';
    headers: Headers;
    options: RequestOptions;
    constructor(private _http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }
    getData(localUrl: string, headerData: any): Observable<any[]> {
        return this._http.get(this._url + localUrl, headerData)
            .map((response: Response) => <any[]>response.json())
            .do(data => JSON.stringify(data))
            .catch(this.handleError);
    }


    private handleError(error: Response) {
        console.log('Error: ' + error)
        return Observable.throw(error.json().error || "Server error!");
    }
    private getHeaders() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'application/json');
        // headers.append('Authorization', 'Basic YW5ndWxhci13YXJlaG91c2Utc2VydmljZXM6MTIzNDU2aaasswdwdwfwefefefefe');
        return headers;
    }
    postData(localUrl: string, data: any): Observable<any[]> {
        console.log('Inside api post', this._url + localUrl);

        return this._http.post(this._url + localUrl, data, this.getHeaders())
            .map((response: Response) => <any[]>response.json())
            .do(data => {
                console.log(JSON.stringify(data));
                return JSON.stringify(data)
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
    }

    putData(localUrl: string, data: any): Observable<any[]> {
        console.log('Inside api post', this._url + localUrl);

        return this._http.put(this._url + localUrl, data, this.getHeaders())
            .map((response: Response) => <any[]>response.json())
            .do(data => {
                console.log(JSON.stringify(data));
                return JSON.stringify(data)
            })
            .catch(this.handleError);
    }

    deleteData(localUrl: string, key: string, val: number): Observable<any[]> {
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
            .map((response: Response) => <any[]>response.json())
            .do(data => {
                console.log(JSON.stringify(data));
                return JSON.stringify(data)
            })
            .catch(this.handleError);
    }



    postDataWithoutBody(): Observable<any[]> {

        let headers = new Headers({

        });
        let options = new RequestOptions({ headers: headers });

        return this._http.post('/api', options)
            .map((response: Response) => <any[]>response.json())
            .do(data => JSON.stringify(data))
            .catch(this.handleError);
    }
}
