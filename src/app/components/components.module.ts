import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { BackButtonComponent } from './back-button/back-button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BackButtonComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports: [
    BackButtonComponent,
  ],
})
export class ComponentsModule { }
