import { Component, OnInit, Input } from '@angular/core';
import { Anime } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css'],
})
export class AnimeListComponent implements OnInit {
  @Input() anime!: Anime;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    this.router.navigate(['anime-details', this.anime.mal_id]);
  }
}
