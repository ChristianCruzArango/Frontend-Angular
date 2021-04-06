import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { UsersComponent } from './users.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    CommonModule,
    NgSelectModule,
    UsersRoutingModule,
  ]
})
export class UsersModule { }
