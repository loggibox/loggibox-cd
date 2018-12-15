import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '../pages/home/home.component';
import { HistoryComponent } from '../pages/history/history.component';

import { NgbModalModule, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NgbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
