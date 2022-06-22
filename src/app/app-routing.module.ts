import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MarksComponent } from './marks/marks.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


const routes: Routes = [
  //{ path: 'app-component', component: AppComponent },
  {path:'', component:NavBarComponent},
  { path: 'marks-component', component: MarksComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
