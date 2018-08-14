import { Component, OnInit, Input } from '@angular/core';

export interface Logo {
  imgPath: string;
}

@Component({
  selector: 'app-logo-hero',
  templateUrl: './logo-hero.component.html',
  styleUrls: ['./logo-hero.component.css']
})
export class LogoHeroComponent implements OnInit {

  logo: Logo = {
    imgPath: 'https://bulma.io/images/bulma-logo.png'
  }

  constructor() {
  }

  ngOnInit() {
  }

}
