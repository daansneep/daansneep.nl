import { Component, OnInit } from '@angular/core';
import {SkillExperience} from '../../../shared/models/skill-experience.model';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  defaultSelectedSkill: SkillExperience =  new SkillExperience('default', '',
    ['I have many skills and very diverse experiences which all contribute to making me a better engineer. ' +
    'You can read about them here.', 'Click or tap on any of the images to view further information.']
  );

  selected: SkillExperience = this.defaultSelectedSkill;

  experiences: SkillExperience[] = [
    new SkillExperience('politie', '/assets/img/politie-6.svg', [
      'I started as an intern at the Dutch National Police Force at the start of Febuary 2022, ' +
      'where I took my role in improving software in the team Voertuig-ICT, a team that focusses on innovation and ' +
      'upkeep of all IT related systems on board Police vehicles. Since this was my first internship, this was also ' +
      'the first moment where I really saw Software Engineering in its practical form. I learned a lot about the ' +
      'complexity of large organisation\'s such as the Police as well as about what it means to participate in ' +
      'a DevOps Engineering team in a working environment which is closely related to the end users. After my ' +
      'internship I got offered the oppertunity to continue working at Voertuig-ICT, which I gladly accepted.',
      'Right now, I am a part-time DevOps Engineer in the team. I mostly work on innovation projects to further ' +
      'assist police officers with smart devices in the police vehicles. I am in close contact with the end users, ' +
      'which is a part of my work that I enjoy the most. I have been focussing on translating enduser wishes to ' +
      'meaningful changes in the software. I wish to further expand my knowledge of the domain of the police and ' +
      'envision myself working as a voluntary police officer to optimise the translation step between enduser and ' +
      'developer, as well as satisfy my desire to help people and fight crime directly.']
    ),
    new SkillExperience('hsleiden', '/assets/img/hogeschool-leiden.webp',
      []
    ),
    new SkillExperience('gcs', '/assets/img/gcs.png',
      []
    ),
  ];

  skills: SkillExperience[] = [
    new SkillExperience('frontend', '/assets/img/frontend.svg',
      []
    ),
    new SkillExperience('backend', '/assets/img/backend.svg',
      []
    ),
    new SkillExperience('db', '/assets/img/db.svg',
      []
    ),
    new SkillExperience('oop', '/assets/img/oop.svg',
      []
    ),
    new SkillExperience('script', '/assets/img/script.svg',
      []
    ),
    new SkillExperience('projectmanagement', '/assets/img/projectmanagement.svg',
      []
    ),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  setSelected(experience: SkillExperience): void {
    this.selected = experience;
  }
}
