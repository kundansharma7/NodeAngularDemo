import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'kd-header',
    templateUrl: 'app/header/header.component.html'
})

export class HeaderComponent implements OnInit{
    userData: any = {};
    ngOnInit() {
        this.userData = JSON.parse(localStorage.getItem('usrData'));
        console.log(this.userData);
    }
 }