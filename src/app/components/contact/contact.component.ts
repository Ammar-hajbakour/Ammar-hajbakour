import { faMobile, faMessage } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { faCodepen, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  githubIcon = faGithub
  linkedinIcon = faLinkedin
  codepenIcon = faCodepen
  mobileIcon = faMobile
  messageIcon = faMessage
  whatsapp = faWhatsapp
  constructor() { }

  ngOnInit(): void {
  }

}
