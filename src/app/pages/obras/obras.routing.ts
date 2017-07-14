import { Routes, RouterModule }  from '@angular/router';

import { Obras } from './obras.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Obras
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
