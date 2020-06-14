import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Blog2PageRoutingModule } from './blog2-routing.module';

import { Blog2Page } from './blog2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Blog2PageRoutingModule
  ],
  declarations: [Blog2Page]
})
export class Blog2PageModule {}
