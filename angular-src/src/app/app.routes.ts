import { Routes } from '@angular/router';
import { TrackListComponent } from './components/track-list/track-list.component';
import { TrackSearchComponent } from './components/track-search/track-search.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tracks', pathMatch: 'full' },
  { path: 'tracks', component: TrackListComponent },
  { path: 'search', component: TrackSearchComponent },
];
