import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContentComponent } from './content/content.component';
import { StickyBelowViewDirective } from './sticky-below-view.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContentComponent,
    StickyBelowViewDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
