import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProduitComponent } from './produit/produit.component';


const routes: Routes = [ 
   {  path: '',  redirectTo: '/dashboard',  pathMatch: 'full' },
{  path: 'produit',  component: ProduitComponent},
{  path: 'dashboard',  component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: true}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
