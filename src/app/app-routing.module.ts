import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProduitComponent } from './produit/produit.component';
import { ProductResolverService } from './produit/service/product-resolver.service';


const routes: Routes = [ 
   {  path: '',  redirectTo: '/dashboard',  pathMatch: 'full' },
{  path: 'produit',  component: ProduitComponent ,
        resolve: {
            produits: ProductResolverService
           }},
{  path: 'dashboard',  component: DashboardComponent }
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
