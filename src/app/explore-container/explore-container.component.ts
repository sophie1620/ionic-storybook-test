import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedModule } from '../shared.module';
import { IonicModule } from '@ionic/angular';
import { BackButtonComponent } from '../components/back-button/back-button.component';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  isDarkMode = false;

  color: 'primary' | 'secondary' = 'secondary';
  size: 'small' | 'default' | 'large' = 'default';
  fill: 'clear' | 'solid' | 'outline' = 'clear';

  btnCTA = 'Go back';

  darkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

}
