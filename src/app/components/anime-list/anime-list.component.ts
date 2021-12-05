import { Component, OnInit, Input } from '@angular/core';
import { Anime } from 'src/app/models';
import { AnimeService } from 'src/app/services/anime.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css'],
})
export class AnimeListComponent implements OnInit {
  @Input() anime!: Anime;

  constructor(private animeService: AnimeService, private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    console.log(this.anime);
    this.router.navigate(['anime-details', this.anime.mal_id]);
  }
}
