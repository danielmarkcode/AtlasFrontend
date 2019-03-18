import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { GateComponent } from './gate/gate.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gate', component: GateComponent },
  { path: '', redirectTo: '/gate', pathMatch: 'full' },
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
