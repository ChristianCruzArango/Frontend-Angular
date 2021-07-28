import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';

import { RolesComponent } from './roles.component';

@NgModule({
  declarations: [
    RolesComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    FormsModule
  ],
  exports: [
    RolesComponent
  ]
})
export class RolesModule { }
