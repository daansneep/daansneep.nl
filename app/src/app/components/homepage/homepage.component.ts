import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {
  age: number = new Date(Date.now()).getMonth() > 8 && new Date(Date.now()).getDay() !== 31
    ? new Date(Date.now()).getFullYear() - new Date(2000, 8, 31).getFullYear()
    : new Date(Date.now()).getFullYear() - new Date(2000, 8, 31).getFullYear() - 1

  constructor() { }

  ngOnInit(): void {
  }

}
