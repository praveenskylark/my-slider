import { convertFromMaybeForwardRefExpression } from '@angular/compiler/src/render3/util';
import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-slider';
  images = ["../assets/coffee.jpg","../assets/coffee1.jpg","../assets/coffee2.jpg"];
  public isMenuCollapsed = true;
}
