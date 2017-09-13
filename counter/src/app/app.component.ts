import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers: number[] =[];
  evenNumbers: number[] =[];


  countedNumbers (tempNumber: number) {
    if (tempNumber % 2 === 0) {
      this.evenNumbers.push(tempNumber);
    }else {
      this.oddNumbers.push(tempNumber);
    }
  }
}
