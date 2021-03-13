import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../backend.service";
import { News } from "../news";


@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})

export class NewslistComponent implements OnInit {
  isOpen = true;
  newsl:News[];
  
  constructor(private backendService: BackendService) {
   }

  ngOnInit(): void {
    this.newsl = this.backendService.getNews();

  }
  toggleDetail(){
    this.isOpen = !this.isOpen
  }
}
