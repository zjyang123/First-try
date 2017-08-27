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
      this.toggleOn = !this.toggleOn;

  }

  getColor() {
    return this.numberLog.length >= 5 ? 'blue' : 'transparent';
  }

}
