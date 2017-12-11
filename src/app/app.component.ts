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
  message;

  calcPower(){
    this.power = this.powerLevel;
    console.log(this.powerLevel);
  }

  Powermessage(power){
    if(power > '9000' && power <= 20001){
      this.message = "It's over 9000!!!"
    }
    else if (power > '20000' && power <= 500001) {
      this.message = "Superlative power!"
    }
    else if (power === '500000'){
      this.message = "The Chosen One"
    }
    else{
      this.message = "weak sauce";
    }
  }









}// end of AppComponent

