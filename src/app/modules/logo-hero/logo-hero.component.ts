import { Component, OnInit, Input } from '@angular/core';

export interface Logo {
  imgPath: string;
  colorClass: string;
  alignment: string;
  colorString: string;
}

@Component({
  selector: 'app-logo-hero',
  templateUrl: './logo-hero.component.html',
  styleUrls: ['./logo-hero.component.css']
})
export class LogoHeroComponent implements OnInit {

  logo: Logo = {
    imgPath: 'https://bulma.io/images/bulma-logo.png', // e.g. https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F22%2F04%2F07%2F21%2F9757e437-5ec1-4378-804f-ca0f9567c110%2F380048_Widakk.png?auto=format&ch=Width%2CDPR&w=250&h=250'
    colorClass: '',
    alignment: 'center', // is-pulled-left or right is also possible
    colorString: '', // e.g. #cdcdcd
  }

  constructor() {
  }

  ngOnInit() {
  }

}
