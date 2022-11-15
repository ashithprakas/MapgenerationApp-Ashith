import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { HeaderComponent } from './header/header.component';
import { ObjectPalleteComponent } from './object-pallete/object-pallete.component';
import { PropertiesPanelComponent } from './properties-panel/properties-panel.component';
import { AppCanvasComponent } from './app-canvas/app-canvas.component';
import { EventInspectorPanelComponent } from './event-inspector-panel/event-inspector-panel.component';
import { CanvasServiceService } from './services/canvas-service.service';
import { canvasReducer } from './store/canvas.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ObjectPalleteComponent,
    PropertiesPanelComponent,
    AppCanvasComponent,
    EventInspectorPanelComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    StoreModule.forRoot({ canvasReducer: canvasReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
  ],
  providers: [CanvasServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
