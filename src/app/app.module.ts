import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { ProduitServiceService } from './produit/service/produit-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductResolverService } from './produit/service/product-resolver.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthenService } from '../app/login/service/authen.service';
import { XhrInterceptorService } from './xhr-interceptor.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    SidebarComponent,
    ContentComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProduitServiceService, ProductResolverService, AuthenService,
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptorService, multi: true},
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
