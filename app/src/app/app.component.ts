import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Daan Sneep - Everythin about me!';
  interests = [
    'https://www.politie.nl/',
    'https://nlaic.com/',
    'https://www.hsleiden.nl/',
    'https://www.tesla.com/',
    'https://www.youtube.com/user/SimonOxfPhys'
  ]

  generateInterest = () => {
    window.location.href = this.interests[Math.floor(Math.random() * Math.floor(this.interests.length))]
  }
}
