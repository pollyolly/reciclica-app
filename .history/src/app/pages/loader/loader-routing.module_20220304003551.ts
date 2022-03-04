import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoaderPage } from './loader.page';

const routes: Routes = [
  {
    path: 'test',
    component: LoaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoaderPageRoutingModule {}
