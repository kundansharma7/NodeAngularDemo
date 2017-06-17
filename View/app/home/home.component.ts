import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'kd-home',
    template: `
        <kd-header></kd-header>
        <router-outlet></router-outlet>
    `
})

export class HomeComponent {

}