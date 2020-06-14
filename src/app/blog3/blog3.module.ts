import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Blog3PageRoutingModule } from './blog3-routing.module';

import { Blog3Page } from './blog3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Blog3PageRoutingModule
  ],
  declarations: [Blog3Page]
})
export class Blog3PageModule {}
