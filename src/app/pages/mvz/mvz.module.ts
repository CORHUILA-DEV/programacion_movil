import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MvzPageRoutingModule } from './mvz-routing.module';

import { ComponentsModule } from 'src/app/components/components.module';
import { MvzPage } from './mvz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MvzPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MvzPage]
})
export class MvzPageModule { }
