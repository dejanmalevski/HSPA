import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponent } from './property/propery-card/property-card.component';
import { PropertyListComponent } from './property/propery-list/property-list.component';

@NgModule({
  declarations: [	
    AppComponent,
      NavBarComponent,
      PropertyCardComponent,
      PropertyListComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
