import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SistemasPageRoutingModule } from './sistemas-routing.module';

import { ComponentsModule } from 'src/app/components/components.module';
import { SistemasPage } from './sistemas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SistemasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SistemasPage]
})
export class SistemasPageModule { }
