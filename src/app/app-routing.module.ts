import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { GateComponent } from './gate/gate.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gate', component: GateComponent },
  { path: 'calendar', component: CalendarComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
