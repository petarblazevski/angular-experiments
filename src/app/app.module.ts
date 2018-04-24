import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DragulaModule} from 'ng2-dragula';
import {AngularDraggableModule} from 'angular2-draggable';

import {AppComponent} from './app.component';
import * as fromComponents from './components';
import * as fromContainers from './containers';


const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.HomeComponent
  },
  {
    path: 'drag-n-drop',
    component: fromContainers.DragNdropComponent
  },
  {
    path: 'ck-editor',
    component: fromContainers.CkEditorComponent
  }
];

@NgModule({
  declarations: [AppComponent, ...fromComponents.components, ...fromContainers.containers],
  imports: [BrowserModule, DragulaModule, AngularDraggableModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
