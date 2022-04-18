import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Hero } from '../interfaces/hero';
import { makeStateKey, TransferState } from '@angular/platform-browser';

const heroes_key = makeStateKey('heroes');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  heroes: Hero[] = [];
  search: string = '';

  

  constructor(
    private heroService:HeroService, 
    private state: TransferState
  ) { }

  ngOnInit(): void {
    this.heroes = this.state.get<Hero[]>(heroes_key, []);
    if(this.heroes.length == 0){
      this.getHeroes();
    }
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe((data) => {
      this.heroes = data.sort((a, b) => 0.5 - Math.random()).slice(0, 20);
      this.state.set<Hero[]>(heroes_key, this.heroes);
    });
  }
  searchHeroes() {
    this.heroService.getHeroes().subscribe((data) => {
      this.heroes = data.filter((hero) => hero.name.toLowerCase().includes(this.search.toLowerCase())).slice(0, 20);
    });
  }

}
