import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatTreeModule} from '@angular/material/tree';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { BackendService } from "./backend.service";
import { NewsModule } from './news/news.module';
import { CatalogModule } from './catalog/catalog.module';


import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StatListComponent } from './stat/stat-list/stat-list.component';
import { StatItemComponent } from './stat/stat-item/stat-item.component';




@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    DashboardComponent,
    StatListComponent,
    StatItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTreeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    NewsModule,
    CatalogModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
