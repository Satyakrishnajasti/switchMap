import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwitchMapMapComponent } from './switch-map-map/switch-map-map.component';
import { HttpClientModule } from '@angular/common/http';
import { SwitchMapFilterComponent } from './switch-map-filter/switch-map-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchMapMapComponent,
    SwitchMapFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
