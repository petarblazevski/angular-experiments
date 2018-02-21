import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import * as fromComponents from './components';

@NgModule({
  declarations: [AppComponent, ...fromComponents.components],
  imports: [BrowserModule, DragulaModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
