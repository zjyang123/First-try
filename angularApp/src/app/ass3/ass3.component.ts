import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass3',
  templateUrl: './ass3.component.html',
  styleUrls: ['./ass3.component.css']
})
export class Ass3Component implements OnInit {

  secretPassword = 'david';
  toggleOn = false;
  numberLog = [];

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.numberLog.push(new Date());
    if (this.toggleOn == true) {
      this.toggleOn = false;
    }else {
      this.toggleOn = true;
    }

  }

  getColor() {
    return this.numberLog.length >= 5 ? 'blue' : 'transparent';
  }

}
