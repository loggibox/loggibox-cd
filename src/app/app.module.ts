import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '../pages/home/home.component';
import { HistoryComponent } from '../pages/history/history.component';

import { NgbModalModule, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FormsModule } from '../../node_modules/@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModalModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
