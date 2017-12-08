import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit, OnChanges {

  @Input() power;

  constructor() { }

  ngOnInit() {
    this.power = 0;
  };

  ngOnChanges() {
    this.power *= 1
  }

}
