import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {

  data = [{
      "title": "Discover innovative ways to decorate",
      "desc": "We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form andnfunction in bringing your vision to life.Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
      "title": "We are available all across the globe",
      "desc": "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’ re in most major cities throughout the country.Find the branch nearest you using our store locator.Any questions ? Don 't hesitate to contact us today."
    },
    {
      "title": "Manufactured with the best materials",
      "desc": "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible.With three decades of experience in this industry, we understand what customers want for their home and office."
    }
  ];

  detail: any;

  pos = 0;
  title = this.data[this.pos].title;
  desc = this.data[this.pos].desc;


  constructor() { 
  }

  changePosition(num){
    this.pos+=num;
    if (this.pos > 2) {
      this.pos = 0
    }
    if (this.pos < 0) {
      this.pos = 2
    }
    this.title = this.data[this.pos].title;
    this.desc = this.data[this.pos].desc;
  } 
}
