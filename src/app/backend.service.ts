import { Injectable } from '@angular/core';
import { News } from "./news/news";
import { Product } from "./product";
import { Stat } from "./stat";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }
  getNews():News[]{
    return [
      {head:"News header 1 หนึ่ง ", detail:"This is a detail of News # 1 Lorem Ipsum is simply dummy text of the printing and  versions of Lorem Ipsum." },
      {head:"News header 2 สอง ", detail:"This is a detail of News # 2 Lorem Ipsum is simply dummy text of the printing and  versions of Lorem Ipsum." },
      {head:"News header 3 สาม ", detail:"This is a detail of News # 3 Lorem Ipsum is simply dummy text of the printing and  versions of Lorem Ipsum." },

    ]
  };
  getStats():Stat[]{
    return [
      {name:"Orders",value :20000 },
      {name:"Pending return requests",value :120 },
      {name:"Registered customers",value :20000 },
      {name:"Low stock products",value :5 },
    ]
  };

  getProducts():Product[]{
    return[
      {name: "Micro SD card 16 GB",pic_link:"microsd16gb",sku:"MCSD_16",price:100,stock:50,type:"computer",publish:true,full_desc:"High speed micro SD memory card for camera size 16 GB",short_desc:"micro SD 16 GB",category:"Memory"},
      {name: "Micro SD card 32 GB",pic_link:"microsd32gb",sku:"MCSD_32",price:150,stock:89,type:"computer",publish:true,full_desc:"High speed micro SD memory card for camera size 32 GB",short_desc:"micro SD 32 GB",category:"Memory"},
      {name: "Micro SD card 64 GB",pic_link:"microsd64gb",sku:"MCSD_64",price:320,stock:1250,type:"computer",publish:false,full_desc:"High speed micro SD memory card for camera size 64 GB",short_desc:"micro SD 64 GB",category:"Memory"},
      {name: "Micro SD card 128 GB",pic_link:"microsd128gb",sku:"MCSD_128",price:550,stock:2500,type:"computer",publish:true,full_desc:"High speed micro SD memory card for camera size 128 GB",short_desc:"micro SD 128 GB",category:"Memory"},
      {name: "Micro SD card 256 GB",pic_link:"microsd256gb",sku:"MCSD_256",price:1025,stock:985,type:"computer",publish:false,full_desc:"High speed micro SD memory card for camera size 256 GB",short_desc:"micro SD 256 GB",category:"Memory"},
      {name: "SSD 250 GB",pic_link:"ssd250gb",sku:"SSD_250GB",price:800,stock:52,type:"computer",publish:true,full_desc:"SSD for laptop size 250 GB",short_desc:"SSD 250 GB",category:"Memory"},
      {name: "SSD 500 GB",pic_link:"ssd500gb",sku:"SSD_500GB",price:1200,stock:109,type:"computer",publish:false,full_desc:"SSD for laptop size 500 GB",short_desc:"SSD 500 GB",category:"Memory"},
      {name: "SSD 1 TB",pic_link:"ssd1tb",sku:"SSD_1TB",price:2500,stock:250,type:"computer",publish:false,full_desc:"SSD for laptop size 1 TB",short_desc:"SSD 1 TB",category:"Memory"},
      {name: "SSD 2 TB",pic_link:"ssd2tb",sku:"SSD_2TB",price:4500,stock:500,type:"computer",publish:true,full_desc:"SSD for laptop size 2 TB",short_desc:"SSD 2 TB",category:"Memory"},
      {name: "SSD 4 TB",pic_link:"ssd4tb",sku:"MCSD_4TB",price:8000,stock:85,type:"computer",publish:true,full_desc:"SSD for laptop size 4 TB",short_desc:"SSD 4 TB",category:"Memory"},
    ]
  };




}
