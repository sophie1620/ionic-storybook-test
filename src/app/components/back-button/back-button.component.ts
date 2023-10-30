import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent {

  @Input() btnType  = 'secondary';
  @Input() btnCTA = '';

  size: 'small' | 'default' | 'large' = 'default';
  fill: 'clear' | 'solid' | 'outline' = 'clear';
  disabled: true | false = false;

  variant: 'primary' | 'secondary' | 'warning' | 'danger' = 'primary'

  constructor() { }


}
