import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Hero } from '../interfaces/hero';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  heroes: Hero[] = [];
  search: string = '';

  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe((data) => {
      this.heroes = data.sort((a, b) => 0.5 - Math.random()).slice(0, 20);
      console.log(this.heroes);
    });
  }
  searchHeroes() {
    this.heroService.getHeroes().subscribe((data) => {
      this.heroes = data.filter((hero) => hero.name.toLowerCase().includes(this.search.toLowerCase())).slice(0, 20);
    });
  }

}
