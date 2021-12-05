import { Component, OnInit, Input } from '@angular/core';
import { Anime } from 'src/app/models';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css'],
})
export class AnimeListComponent implements OnInit {
  @Input() anime!: Anime;

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {}

  onTestClick() {
    console.log(this.anime);
  }
}
