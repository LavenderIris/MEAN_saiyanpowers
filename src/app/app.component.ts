import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  powerlevel: Number = 0;

  setPower() {
    this.powerlevel = this.powerlevel;
    console.log(this.powerlevel);
  }
}
