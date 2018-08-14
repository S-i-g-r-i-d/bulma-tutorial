import { Component, OnInit } from '@angular/core';
import { Mediacard} from '../multiline-media/multiline-media.component';

@Component({
  selector: 'app-multiline-medias',
  templateUrl: './multiline-medias.component.html',
  styleUrls: ['./multiline-medias.component.css']
})
export class MultilineMediasComponent implements OnInit {
  mediacards: Mediacard[] = [
    {
      icon: {
        name: 'fas fa-lg',
        colorClass: 'has-text-warning',
      },
      title: 'Columns',
      subtitle: 'The power of Flexbox in a simple interface'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
