import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministracionComponent } from './pages/administracion/administracion.component';

const routes: Routes = [
  {
    path: '',
    component: AdministracionComponent,
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      },{
        path: 'users',
        loadChildren: () => import('./../app/pages/administracion/users/users-routing.module').then(m => m.UsersRoutingModule)
      },
      {
        path: 'roles',
        loadChildren: () => import('./../app/pages/administracion/roles/roles.module').then(m => m.RolesModule)
      }
    ]
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
