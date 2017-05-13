import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AppHeader } from './components/header.component';
import { Plate } from './components/plate.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AppHeader, Plate],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
