import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Anime } from 'src/app/models';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  animeList!: Anime[];
  params!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private animeService: AnimeService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.params = params['anime-search'];

      this.animeService
        .searchAnime(params['anime-search'])
        .subscribe((anime) => (this.animeList = anime.results));
    });
  }
}
