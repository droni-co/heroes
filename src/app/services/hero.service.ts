import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/hero';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  getHeroes() {
    return this.http.get<Hero[]>('https://akabab.github.io/superhero-api/api/all.json?take=5');
  }
  getHero(id: number) {
    return this.http.get<Hero>('https://akabab.github.io/superhero-api/api/id/' + id + '.json');
  }
}
