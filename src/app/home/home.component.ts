import { style } from '@angular/animations';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { HomeDataService } from '../home-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit{

  detail: any;
  image: any;
  opacity = 1
  imagePos = 1;
  changing = false

  constructor(public _homeDataService: HomeDataService) {  }

  ngAfterContentInit(): void {
    this.detail = document.getElementById("home-detail-data")
    this.image = document.getElementById("home-image-slider");
    setInterval(() => {
      if(this.changing == false){
        this.changing = true
        this.changeOpa()
        this.changeImage(1)
        setTimeout(() => {
          this._homeDataService.changePosition(1); 
        }, 600);
        setTimeout(() => {
          this.changeOpa()
          this.changing = false
        }, 800);
      }
    }, 4500);
  }

  ngOnInit(): void {
  }

  changeOpa(){
    if(this.opacity == 0){
      this.opacity = 1
    }
    else{
      this.opacity = 0
    }
    this.detail.style.opacity = this.opacity
  }

  changeData(num){
    if(this.changing == false){
      this.changing = true
      this.changeOpa()
      this.changeImage(num)
      setTimeout(() => {
        this._homeDataService.changePosition(num); 
      }, 600);
      setTimeout(() => {
        this.changeOpa()
        this.changing=false
      }, 800);
    }
  }

  changeImage(num){
    let offsite = window.innerWidth <= 768 ? -50 : -65;
    if(num == 1){
      this.imagePos++
    }
    else{
      this.imagePos--
    }

    let pos = (this.imagePos * offsite)
    this.image.style.transform = "translateY(" + pos+ "vh)";
    
    setTimeout(() => {
      if(this.imagePos == 0){
        this.imagePos = 3
        pos = (this.imagePos * offsite)
        this.image.style.transition = 'none';
        this.image.style.transform = "translateY(" + pos+ "vh)";
        setTimeout(() => {
          this.image.style.transition = ".3s linear";
        }, 200);
      }
      else if(this.imagePos == 4){
        this.imagePos = 1
        pos = (this.imagePos * offsite)
        this.image.style.transition = 'none';
        this.image.style.transform = "translateY(" + pos+ "vh)";
        setTimeout(() => {
          this.image.style.transition = ".3s linear";
        }, 200);
      }    
    }, 350);
  }


  getImage1(){
    if(window.innerWidth <= 768){
      return '/assets/images/mobile-image-hero-1.jpg'
    }
    else{
      return '/assets/images/desktop-image-hero-1.jpg';
    }
  }

  getImage2(){
    if(window.innerWidth <= 768){
      return '/assets/images/mobile-image-hero-2.jpg'
    }
    else{
      return '/assets/images/desktop-image-hero-2.jpg';
    }
  }

  getImage3(){
    if(window.innerWidth <= 768){
      return '/assets/images/mobile-image-hero-3.jpg'
    }
    else{
      return '/assets/images/desktop-image-hero-3.jpg';
    }
  }
}
