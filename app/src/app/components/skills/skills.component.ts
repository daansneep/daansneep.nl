import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {
  router: Router | undefined;

  constructor(router: Router) {
    this.router = router
  }

  ngOnInit(): void {
  }
}
