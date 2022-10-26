import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { HeaderComponent } from './header/header.component';
import { ObjectPalleteComponent } from './object-pallete/object-pallete.component';
import { PropertiesPanelComponent } from './properties-panel/properties-panel.component';
import { AppCanvasComponent } from './app-canvas/app-canvas.component';
import { EventInspectorPanelComponent } from './event-inspector-panel/event-inspector-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ObjectPalleteComponent,
    PropertiesPanelComponent,
    AppCanvasComponent,
    EventInspectorPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
