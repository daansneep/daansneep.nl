import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('loadAppear', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('750ms', style({ opacity: 1 }))
      ])
    ]),
    trigger('floatInTop', [
      transition(':enter', [
        style({ transform: 'translateY(-750px)' }),
        animate('1000ms ease-in-out', style({ transform: 'translateX(0)' }))
      ])
    ]),
    trigger('floatInRight', [
      transition(':enter', [
        style({ transform: 'translateX(750px)' }),
        animate('750ms ease-out', style({ transform: 'translateX(0)' }))
      ])
    ]),
  ]
})
export class HomeComponent implements OnInit {
  hasLoaded = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
  }

  scrollDown(): void {
    window.scrollTo(0, window.innerHeight);
  }
}
