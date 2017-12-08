import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyan4',
  templateUrl: './supersaiyan4.component.html',
  styleUrls: ['./supersaiyan4.component.css']
})
export class Supersaiyan4Component implements OnInit, OnChanges {

  @Input() power;
  
    constructor() { }
  
    ngOnInit() {
      this.power = 0;
    }
  
    ngOnChanges(){
      this.power *=500;
    }
  
  }
