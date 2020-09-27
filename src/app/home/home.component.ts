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
  opacity = 1
  changing = false

  constructor(private _homeDataService: HomeDataService) {  }

  ngAfterContentInit(): void {
    this.detail = document.getElementById("home-detail-data")
    setInterval(() => {
      this.changing = true
      this.changeOpa()
      setTimeout(() => {
        this._homeDataService.changePosition(1); 
      }, 600);
      setTimeout(() => {
        this.changeOpa()
        this.changing = false
      }, 800);
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
      this.changeOpa()
      setTimeout(() => {
        this._homeDataService.changePosition(num); 
      }, 600);
      setTimeout(() => {
        this.changeOpa()
      }, 800);
    }
  }
}
