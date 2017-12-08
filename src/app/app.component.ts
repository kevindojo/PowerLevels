import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Power Component';

  powerLevel: number;
  power;

  calcPower(){
    this.power = this.powerLevel;
    console.log(this.powerLevel);
  }









}// end of AppComponent

