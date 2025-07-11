import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackListComponent } from './components/track-list/track-list.component';
import { TrackSearchComponent } from './components/track-search/track-search.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'tracks', pathMatch: 'full' },
  { path: 'tracks', component: TrackListComponent },
  { path: 'search', component: TrackSearchComponent },
];

@NgModule({
  exports: [RouterModule],
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    // outros...
  ],
  bootstrap: [AppComponent],
})
export class AppRoutingModule {}
