import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  texts = [
    'I am a qualified and professional front end developer with three years of experience in HTML,CSS and JAVASCRIPT\'s frameworks',
    'I have Strong knowledge in data structure, algorithms, problem solving and Web Development Technologies .',
    'I make Modern And Responsive Web Designs and Wordpress Websites...',
    'Single Page Applications Using Angular And React .',
    'I can also handle databases.',
  ]
  constructor() {

  }

  ngOnInit(): void {
  }


}



