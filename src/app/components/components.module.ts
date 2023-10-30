import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { BackButtonComponent } from './back-button/back-button.component';
import { FormsModule } from '@angular/forms';
import { SampleCardComponent } from './sample-card/sample-card.component';

@NgModule({
  declarations: [
    BackButtonComponent,
    SampleCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports: [
    BackButtonComponent,
    SampleCardComponent
  ],
})
export class ComponentsModule { }
