import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Blog1Page } from './blog1.page';

const routes: Routes = [
  {
    path: '',
    component: Blog1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Blog1PageRoutingModule {}
