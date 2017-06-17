import { Component } from '@angular/core';
import { HttpCallerService } from '../service/apiCaller';
import { Router } from "@angular/router";

@Component({
    selector: 'ap',
    templateUrl: 'app/login/login.component.html',
    styleUrls: ['app/login/login.component.css']
})

export class LoginComponent {
    usrName: string = "";
    usrPass: string = "";
    result: any;
    data: any;

    constructor(private _httpCallerService: HttpCallerService, private router: Router) { }

    login(): void {
        this.data = {
            userName: this.usrName,
            password: this.usrPass
        }
        this._httpCallerService.postData('login', this.data).subscribe(data => {
            this.result = data;
            if(this.result.statusCode === 200) {
                localStorage.setItem('usrData', JSON.stringify(this.result.data[0]));
                console.log(this.result.data[0])
                // this.location.replaceState('/'); // clears browser history so they can't navigate with back button
                this.router.navigate(['home']);
            }
        });
    }
}