import { Component} from '@angular/core';
import { CanvasServiceService } from '../services/canvas-service.service';

@Component({
  selector: 'app-object-pallete',
  templateUrl: './object-pallete.component.html',
  styleUrls: ['./object-pallete.component.css']
})
export class ObjectPalleteComponent {

  constructor(private canvasServiceHandler:CanvasServiceService) { }

  
  addShape(shapeName:string){
      this.canvasServiceHandler.onObjectPanelButtonClick(shapeName);
  }
  
}
