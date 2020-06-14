import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Blog2Page } from './blog2.page';

const routes: Routes = [
  {
    path: '',
    component: Blog2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Blog2PageRoutingModule {}
