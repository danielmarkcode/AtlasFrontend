import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { GateComponent } from './gate/gate.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SkillsService } from './services/skills.service';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GateComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    MatProgressBarModule,
    NgxYoutubePlayerModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
  ],
  providers: [SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
