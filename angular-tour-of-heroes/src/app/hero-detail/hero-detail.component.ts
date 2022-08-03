import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'; //Heroシンボルのインポート


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero; //heroes.component.htmlのselectedHero受取先をココで指定...
  constructor() { }

  ngOnInit(): void {
  }

}
