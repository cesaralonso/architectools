import { Routes, RouterModule }  from '@angular/router';

import { ChangePassword } from './change-password.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ChangePassword
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
