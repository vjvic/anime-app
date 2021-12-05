import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { ResultsComponent } from './pages/results/results.component';
import { AnimeDetailsComponent } from './pages/anime-details/anime-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchFormComponent,
    AnimeListComponent,
    ResultsComponent,
    AnimeDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
