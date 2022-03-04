import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoaderPageRoutingModule } from './loader-routing.module';

import { LoaderPage } from './loader.page';
import { FolderPage } from 'src/app/folder/folder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoaderPageRoutingModule
  ],
  declarations: [LoaderPage]
})
export class LoaderPageModule {}
