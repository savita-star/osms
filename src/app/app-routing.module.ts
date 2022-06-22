import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MarksComponent } from './marks/marks.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AttendenceComponent } from './attendence/attendence.component';

const routes: Routes = [
  //{ path: 'app-component', component: AppComponent },
  {path:'', component:NavBarComponent},
  { path: 'marks-component', component: MarksComponent },
  { path: 'attendence-component', component: AttendenceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
