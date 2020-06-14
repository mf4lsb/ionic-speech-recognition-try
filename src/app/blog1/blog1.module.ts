import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Blog1PageRoutingModule } from './blog1-routing.module';

import { Blog1Page } from './blog1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Blog1PageRoutingModule
  ],
  declarations: [Blog1Page]
})
export class Blog1PageModule {}
