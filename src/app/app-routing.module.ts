import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { HistoryComponent } from '../pages/history/history.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  exports: [RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
