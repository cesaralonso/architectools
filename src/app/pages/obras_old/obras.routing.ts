import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { Obras } from './obras.component';
import { DataTables } from './components/dataTables/dataTables.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Obras,
    children: [
      { path: 'datatables', component: DataTables }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
