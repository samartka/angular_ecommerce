import { Component, OnInit } from '@angular/core';
import { NewsModule } from "../news/news.module";
import { NewslistComponent } from "../news/newslist/newslist.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
