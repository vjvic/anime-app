import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css'],
})
export class AnimeDetailsComponent implements OnInit {
  anime: any;
  isLoading: boolean = true;

  constructor(
    private activedRoute: ActivatedRoute,
    private animeService: AnimeService
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params: Params) =>
      this.animeService
        .getAnimeDetails(params['id'])
        .subscribe((anime) => ((this.anime = anime), (this.isLoading = false)))
    );
  }
}
