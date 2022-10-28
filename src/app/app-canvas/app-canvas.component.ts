
import { Component, OnInit ,AfterViewInit,ViewChild,ElementRef} from '@angular/core';
import { CanvasServiceService } from '../services/canvas-service.service';

@Component({
  selector: 'app-app-canvas',
  templateUrl: './app-canvas.component.html',
  styleUrls: ['./app-canvas.component.css']
})
export class AppCanvasComponent implements OnInit,AfterViewInit{
  @ViewChild('canvasid') _canvasElement? : ElementRef<HTMLCanvasElement>;

  constructor(private canvas:CanvasServiceService) { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    if(this._canvasElement!=undefined){
      this.canvas.canvasInitialize(this._canvasElement.nativeElement); 
    }
    else{
      console.log("CanvasInitialization Error");
    }
  }


}
