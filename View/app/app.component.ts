import { Component } from '@angular/core';
// import { ProductService } from './products/product.service';
// import { WelcomeComponent } from './home/welcome.component';
// import { HeaderComponent } from './header/header.component';

import { HttpCallerService } from './service/apiCaller';

@Component({
    selector: 'pm-app',
    template: `
        <!--<h1>Angular2: Getting Started</h1>
        <a routerLink="/product">Heroes</a> -->
        <router-outlet></router-outlet>
    `,
    providers: [ HttpCallerService]
})
export class AppComponent { }
