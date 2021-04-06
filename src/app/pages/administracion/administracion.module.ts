import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersModule } from './users/users.module';
import { AdministracionRoutingModule } from './administracion-routing.module';

import { AdministracionComponent } from './administracion.component';

@NgModule({
  declarations: [
    AdministracionComponent
  ],
  imports: [
    CommonModule,
    UsersModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
