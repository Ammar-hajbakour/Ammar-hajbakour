import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  texts = [
    "I'm a passionate front-end developer with a knack for creating stunning, user-friendly web experiences. With 5 years of hands-on experience, I'm dedicated to crafting perfect websites that not only look great but also perform seamlessly.",
    `My expertise includes:\n
    HTML5, CSS3, JavaScript\n
    - Responsive Web Design\n
    - UI/UX Design\n
    - Web Accessibility\n
    - Performance Optimization\n
    - Cross-Browser Compatibility\n
    - Version Control (Git)\n
    - Angular\n
    - React\n
    - Word press`,
    "I'm truly passionate about staying up-to-date with the latest web technologies and trends. My goal is to create web solutions that not only meet but exceed client expectations while delivering seamless user experiences. I'm also an advocate for web accessibility and believe in making the web inclusive for all users.",
    "I'm always open to connecting with fellow developers, designers, and professionals in the tech industry. Let's connect and discuss how we can collaborate on exciting projects or share insights about the ever-evolving world of front-end development.",
    "Feel free to reach out to me if you're interested in working together or if you'd like to discuss web development trends and best practices. Let's y ability to tackle complex challenges, meet deadlines, and deliver high-quality code.make the web a better place",

  ]
  constructor() {

  }

  ngOnInit(): void {
  }


}



