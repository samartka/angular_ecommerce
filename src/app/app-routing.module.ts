import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProductlistComponent } from "./catalog/productlist/productlist.component";
import { ProductitemComponent } from "./catalog/productitem/productitem.component";
import { ProductDetailComponent } from "./catalog/product-detail/product-detail.component";



const routes: Routes = [
  // {
  // path: 'home',
  // component: HomeComponent
  // },
  // {
  // path: '',
  // pathMatch: 'full',
  // redirectTo: 'home'
  // },
  // {
  // path: 'login',
  // component: LoginComponent
  // },
  {
  path: 'products',
  component: ProductlistComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  // {
  // path: 'products/:id',
  // component: ProductDetailComponent
  // },
  {
  path: '**',
  component: DashboardComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
