import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router' ;
import { BackendService } from "../../backend.service";
import { Product } from "../../product";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  productlist: Product[];
//  backendService:BackendService;

  pid : string
  @Input() productItemDetail:Product

  constructor (private route: ActivatedRoute, private backendService: BackendService) {}

  ngOnInit()  {
    this.productlist = this.backendService.getProducts();
    this.route.params.subscribe(p => {
      this.pid = p.id;
  })
  }

}
