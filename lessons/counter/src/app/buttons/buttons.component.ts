import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Output() myTimer = new EventEmitter<number>();
  intervalCounter;
  lastNumber = 0;
  constructor() { }

  ngOnInit() {
  }

  startCounter() {

    this.intervalCounter = setInterval(() => {
      this.myTimer.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000)
  }

  pauseCounter() {
    clearInterval(this.intervalCounter);
  }
}
