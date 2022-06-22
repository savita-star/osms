import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarksComponent } from './marks/marks.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AttendenceComponent } from './attendence/attendence.component';
@NgModule({
  declarations: [AppComponent, MarksComponent, NavBarComponent, AttendenceComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
