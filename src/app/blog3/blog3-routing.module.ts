import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Blog3Page } from './blog3.page';

const routes: Routes = [
  {
    path: '',
    component: Blog3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Blog3PageRoutingModule {}
