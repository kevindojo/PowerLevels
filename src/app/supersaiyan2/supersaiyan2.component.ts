import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyan2',
  templateUrl: './supersaiyan2.component.html',
  styleUrls: ['./supersaiyan2.component.css']
})
export class Supersaiyan2Component implements OnInit, OnChanges {

  @Input() power;
  
    constructor() { }
  
    ngOnInit() {
      this.power = 0;
    }
  
    ngOnChanges(){
      this.power *=150;
    }
  
  }
