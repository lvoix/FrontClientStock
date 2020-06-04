import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { ProductResolverService } from './produit/service/product-resolver.service';


const routes: Routes = [ 
   {  path: '',  redirectTo: '/home',  pathMatch: 'full' },
   {  path: 'login',  component: LoginComponent },
   {  path: 'home',  component: HomeComponent,
      children: [
    {  
      path: 'produit',  
      component: ProduitComponent ,
      outlet: 'homeOutlet',
       resolve: {
           produits: ProductResolverService
          }
      },
      { 
         path: 'dashboard',  
         component: DashboardComponent,
         outlet: 'homeOutlet',
         }
             ]
  
  },

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: true}
  )],
  exports: [RouterModule],
  providers : [ProductResolverService]
})
export class AppRoutingModule { }
