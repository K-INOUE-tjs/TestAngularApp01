import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //heroプロパティとして追加...
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes = HEROES;
  constructor() { }

  ngOnInit(): void {
  }
  selectedHero?: Hero;
  onSelect(hero: Hero): void { //クリックしたHeroを選択する
  this.selectedHero = hero;
}
}