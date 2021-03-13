import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewslistComponent } from './newslist/newslist.component';
import { NewsitemComponent } from './newsitem/newsitem.component';
import { BackendService } from "../backend.service";



@NgModule({
  declarations: [NewslistComponent, NewsitemComponent],
  providers: [BackendService],

  imports: [
    CommonModule
  ],
  exports: [NewslistComponent, NewsitemComponent]
})
export class NewsModule { }
