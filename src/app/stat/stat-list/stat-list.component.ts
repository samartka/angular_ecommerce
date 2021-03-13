import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../backend.service";
import { Stat } from "../../stat";
@Component({
  selector: 'app-stat-list',
  templateUrl: './stat-list.component.html',
  styleUrls: ['./stat-list.component.css']
})
export class StatListComponent implements OnInit {
  stats:Stat[]
  isOpen = true;

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.stats = this.backendService.getStats();
  }
  toggleDetail(){
    this.isOpen = !this.isOpen
  }
}
