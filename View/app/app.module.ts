import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
// import { ProductListComponent } from './products/product-list.component';
// import { ProductFilterPipe } from './shared/Filter/product-filter.pipe';
// import { StarComponent } from './shared/star.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmplistComponent } from './emplist/emplist.component';

//sevices
import { HttpCallerService } from './service/apiCaller';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    HttpModule,
    RouterModule.forRoot([
      {
        path: '', component: LoginComponent
      },
      {
        path: 'home', component: HomeComponent, children: [
          { path: '', redirectTo: 'welcome', pathMatch: 'full' },
          { path: 'welcome', component: WelcomeComponent },
          { path: 'empList', component: EmplistComponent }
        ]
      }
    ])
  ],
  declarations: [ 
    AppComponent,
    // ProductListComponent,
    // ProductFilterPipe,
    // StarComponent,
    WelcomeComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    EmplistComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
