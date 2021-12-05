import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  search!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.search) {
      this.router.navigate(['search', this.search]);
    }

    this.search = '';
  }
}
