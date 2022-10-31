import { Component, OnInit } from '@angular/core';
import { CanvasServiceService } from '../services/canvas-service.service';

@Component({
  selector: 'app-object-pallete',
  templateUrl: './object-pallete.component.html',
  styleUrls: ['./object-pallete.component.css']
})
export class ObjectPalleteComponent implements OnInit {

  constructor(private canvasServiceHandler:CanvasServiceService) { }

  ngOnInit(): void {
  }
  
  addShape(shapeName:string){
      this.canvasServiceHandler.onObjectPanelButtonClick(shapeName);
  }
  
}
