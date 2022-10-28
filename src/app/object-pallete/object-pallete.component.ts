import { Component, OnInit } from '@angular/core';
import { CanvasServiceService } from '../services/canvas-service.service';

@Component({
  selector: 'app-object-pallete',
  templateUrl: './object-pallete.component.html',
  styleUrls: ['./object-pallete.component.css']
})
export class ObjectPalleteComponent implements OnInit {

  constructor(private canvas:CanvasServiceService) { }

  ngOnInit(): void {
  }
  addShape(shape:string){
    if(shape == 'rectangle'){
      this.canvas.addRectangleToCanvas();
    } 
    else if(shape == 'triangle'){
      this.canvas.addTriangleToCanvas();
    }
    else if(shape == 'circle'){
      this.canvas.addCircleToCanvas();
    }
    else{
      console.log("Error in shape");
    }
  }
}
