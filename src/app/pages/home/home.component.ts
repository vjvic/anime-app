import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/models';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  animeList!: Anime[];
  isLoading: boolean = true;

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animeService
      .getTopAnime()
      .subscribe(
        (animeList) => (
          (this.animeList = animeList.top), (this.isLoading = false)
        )
      );
  }
}
