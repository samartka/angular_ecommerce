import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../backend.service";
import { Product } from "../../product";


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})

export class ProductlistComponent implements OnInit {
 products : Product[];

  constructor(private backendService:BackendService) { }

  ngOnInit(): void {
    this.products = this.backendService.getProducts();
  }

}
