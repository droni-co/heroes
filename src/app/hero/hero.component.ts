import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Hero } from '../interfaces/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  hero?: Hero;

  constructor(private route: ActivatedRoute, private router: Router, private service: HeroService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getHero(id);
  }
  getHero(id:any) {
    this.service.getHero(id).subscribe(res => {
      this.hero = res
    });
  }

}
