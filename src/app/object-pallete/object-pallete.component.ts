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
  addShape(shape:string){
    if(shape == 'rectangle'){
      this.canvasServiceHandler.onObjectPanelButtonClick('rectangle');
    } 
    else if(shape == 'triangle'){
      this.canvasServiceHandler.onObjectPanelButtonClick('triangle');
    }
    else if(shape == 'circle'){
      this.canvasServiceHandler.onObjectPanelButtonClick('circle');
    }
    else{
      console.log("Error in shape");
    }
  }
}
