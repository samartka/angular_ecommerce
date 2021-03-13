import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductitemComponent } from './productitem/productitem.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';



@NgModule({
  declarations: [ProductlistComponent, ProductitemComponent, ProductDetailComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ProductlistComponent
  ]
})
export class CatalogModule { }
