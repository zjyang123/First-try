import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userNameString = '';
  resetButtonDisabled = true;

  constructor() { }

  onUpdate() {
    if (this.userNameString != '') {
      this.resetButtonDisabled = false;
    }else {
      this.resetButtonDisabled = true;
    }
  }

  onResetClick() {
    this.userNameString = '';
    this.resetButtonDisabled = true;
  }

  ngOnInit() {
  }

}
