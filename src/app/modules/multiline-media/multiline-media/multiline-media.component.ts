import { Component, OnInit, Input } from '@angular/core';

export interface Icon {
  name: string;
  colorClass: string;
}

export interface Mediacard {
  icon: Icon;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-multiline-media',
  templateUrl: './multiline-media.component.html',
  styleUrls: ['./multiline-media.component.css']
})
export class MultilineMediaComponent implements OnInit {

  @Input() mediacard: Mediacard;

  constructor() { }

  ngOnInit() {
  }

}
