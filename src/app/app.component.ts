import { Component } from '@angular/core';
import { fader, slider } from './page-transitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slider,fader]
})
export class AppComponent {

}
