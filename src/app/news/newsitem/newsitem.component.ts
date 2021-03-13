import { Component, OnInit,Input } from '@angular/core';
import { News } from "../news";

@Component({
  selector: 'app-newsitem',
  templateUrl: './newsitem.component.html',
  styleUrls: ['./newsitem.component.css']
})
export class NewsitemComponent implements OnInit {
  @Input() newsItem:News

  constructor() { }

  ngOnInit(): void {
  }

}
