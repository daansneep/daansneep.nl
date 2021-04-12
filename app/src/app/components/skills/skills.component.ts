import {Component, OnInit} from '@angular/core';
import {SkillType} from "../../enums/skilltype";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {
  skillType = SkillType;
  selectedSkill = SkillType.Frontend;

  constructor() { }

  ngOnInit(): void {
  }


  skillEvent(target: EventTarget): void {
    // @ts-ignore
    const skill: string = target.dataset.skill;

    // @ts-ignore
    const activeButtons = target.parentElement.querySelectorAll(".active");

    activeButtons.forEach((button: HTMLButtonElement) => {
      button.classList.remove("active");
    });

    switch (skill) {
      case "frontend":
        this.selectedSkill = SkillType.Frontend
        break;

      case "backend":
        this.selectedSkill = SkillType.Backend
        break;

      case "data-management":
        this.selectedSkill = SkillType.Data_Management
        break;

      case "others":
        this.selectedSkill = SkillType.Others
        break;
    }

    // @ts-ignore
    target.classList.add("active");
  }

}
