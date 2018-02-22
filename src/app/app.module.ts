import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';
import { AngularDraggableModule } from 'angular2-draggable';

import { AppComponent } from './app.component';
import * as fromComponents from './components';

@NgModule({
  declarations: [AppComponent, ...fromComponents.components],
  imports: [BrowserModule, DragulaModule, AngularDraggableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
