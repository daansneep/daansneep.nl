import { Component, OnInit } from '@angular/core';
import {SkillExperience} from '../../../shared/models/skill-experience.model';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [
    trigger('loadAppear', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(25px)' }),
        animate('100ms', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate('100ms', style({ opacity: 0, transform: 'translateY(25px)' }))
      ])
    ]),
  ]
})
export class AboutMeComponent implements OnInit {
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
      'envision myself working as a voluntary police officer to optimise the translation step between end-user and ' +
      'developer, as well as satisfy my desire to help people and fight crime directly.']
    ),
    new SkillExperience('hsleiden', '/assets/img/hogeschool-leiden.webp',
      [
        'I studied Computer Science at the University of Applied Sciences Leiden from 2019 to 2023. During my ' +
        'study I got introduced to the basic concepts of programming, requirement analysis, collaborating in ' +
        'Software Engineering and much more. In projects during the second year, we got to collaborate with ' +
        'companies to get an impression of \'real world problems\' and how to tackle them with Software Engineering.' +
        'These projects really helped with my understanding of translating user wishes (stories) to ' +
        'something that can be fixed or resolved in software. It is also where I got in contact with my current ' +
        'employer.',
        'During my time at the university I also spent two years 8(-ish) hours a week as a ' +
        'student-assistant where I had several responsibilities. First of all I supported lecturers in first year ' +
        'classes by providing practical explainations for certain topics as well as support in lesson preparations. ' +
        'In the second year I developed an application, the HSLeiden Challengeweek Scoreboard application, which was ' +
        '(and still is) used in challengeweeks (pressurecooker style project weeks for mostly first year projects), ' +
        'where teachers could create scoreboards with achievements and teams of students. Students could get points ' +
        'by satisfying the requirements of the achievements and consequently move up a scoreboard. Lastly, I ' +
        'supported in establishing new guidelines for certain courses which needed to be renewed.'
      ]
    ),
    new SkillExperience('gcs', '/assets/img/gcs.png',
      [
        'During my time at De Groene Computershop I learned a lot of important skills that I employ during my work. ' +
        'I started in 2018 as someone who liked tinkering with his own computer and knew the basics of building a ' +
        'computer system. During the four years that I worked there (every saturday, sometimes an extra day), I ' +
        'learned to diagnose consumer and business systems with software and/or hardware issues and also learned to ' +
        'repair a lot of these issues. Besides that I learned how to build efficient systems that met the customers ' +
        'expectations.',
        'During my last year at this store, I built an application that allowed customers to pick their own PC with ' +
        'parts that the store could supply. The software would often be used by other employees as well in ' +
        'cooperation with the customer to select the ideal system. This software is still is use today, ' +
        'alleviating the logistics of sorting out what parts are available for the store and giving customers a ' +
        'user-friendly interface with which to customise their own future PC.'
      ]
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
}
