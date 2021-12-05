import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeDetailsComponent } from './pages/anime-details/anime-details.component';
import { HomeComponent } from './pages/home/home.component';
import { ResultsComponent } from './pages/results/results.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search/:anime-search',
    component: ResultsComponent,
  },
  {
    path: 'anime-details/:id',
    component: AnimeDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
