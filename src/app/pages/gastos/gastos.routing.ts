import { Routes, RouterModule }  from '@angular/router';

import { Gastos } from './gastos.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Gastos
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
