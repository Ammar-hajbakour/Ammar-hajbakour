import { Component, OnInit } from '@angular/core';
import { faLinkedin, faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPhone,  } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  show: boolean = false

  linkedinIcon = faLinkedin
  mobileIcon = faPhone
  messageIcon = faGoogle
  whatsapp = faWhatsapp
  constructor() { }

  ngOnInit(): void {
  }
  
  handleListClick() {
    this.show = false
    if (this.show) {
      document.body.style.overflowY = 'hidden'
    } else document.body.style.overflowY = 'scroll'
  }
}
