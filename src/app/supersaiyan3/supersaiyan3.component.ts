import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyan3',
  templateUrl: './supersaiyan3.component.html',
  styleUrls: ['./supersaiyan3.component.css']
})
export class Supersaiyan3Component implements OnInit, OnChanges {

  @Input() power;
  
    constructor() { }
  
    ngOnInit() {
      this.power = 0;
    }
  
    ngOnChanges(){
      this.power *=250;
    }
  
  }
