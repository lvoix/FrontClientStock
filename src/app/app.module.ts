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
import { HttpClientModule } from '@angular/common/http';
import { ProductResolverService } from './produit/service/product-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    SidebarComponent,
    ContentComponent,
    NavbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProduitServiceService, ProductResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
