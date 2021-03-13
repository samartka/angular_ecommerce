import { Component, OnInit,Input } from '@angular/core';
import { Stat } from "../../stat";

@Component({
  selector: 'app-stat-item',
  templateUrl: './stat-item.component.html',
  styleUrls: ['./stat-item.component.css']
})
export class StatItemComponent implements OnInit {
    @Input() stat : Stat

constructor() { }

  ngOnInit(): void {
  }

}
