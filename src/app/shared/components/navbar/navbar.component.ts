import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  scrollToMidway(): void {
    window.scrollTo(0, window.innerHeight);
  }

  scrollToBottom(): void {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
