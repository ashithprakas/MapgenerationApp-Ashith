import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties-panel',
  templateUrl: './properties-panel.component.html',
  styleUrls: ['./properties-panel.component.css'],
})
export class PropertiesPanelComponent implements OnInit {
  constructor() {}
  strokecolor: string = '#9a3c3c';
  fillcolor: string = '#9a3c3c';
  strokeWidth: string = '5';
  objectAngle: string = '0';
  ngOnInit(): void {}
  onStrokeColorChange(value: string) {
    console.log(value);
  }
  onStrokeWidthChange(value: string) {
    console.log(value);
  }
  onFillColorChange(value: string) {
    console.log(value);
  }
  onAngleChange(value: string) {
    console.log(value);
  }
}
