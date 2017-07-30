import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { Obras } from './obras.component';
import { UsuariosTable } from './components/obras-table/obras-table.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Obras,
    children: [
      { path: 'obras-table', component: UsuariosTable }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
