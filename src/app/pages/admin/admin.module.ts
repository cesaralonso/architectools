import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular2-datatable';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './admin.routing';
import { Admin } from './admin.component';

import { Users } from './components/users/users.component';
import { ProfileEdit } from './components/profile-edit/profile-edit.component';

import { UserAddModal } from './components/users/components/usuarios-table/user-add-modal/user-add-modal.component';
import { UserEditModal } from './components/users/components/usuarios-table/user-edit-modal/user-edit-modal.component';
import { UserService } from './components/users/components/usuarios-table/user.service';

import { UsuariosEditForm } from './components/profile-edit/components/usuarios-edit-form';
import { UsuariosTable } from './components/users/components/usuarios-table/usuarios-table.component';
import { DataFilterPipe } from './components/users/components/usuarios-table/data-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    AppTranslationModule,
    ReactiveFormsModule,
    NgaModule,
    NgbRatingModule,
    routing,
    DataTableModule,
    NgbModalModule
  ],
  declarations: [
    Users,
    ProfileEdit,
    Admin,
    UsuariosEditForm,
    UsuariosTable,
    DataFilterPipe,
    UserAddModal,
    UserEditModal
  ],
  entryComponents: [
    UserAddModal,
    UserEditModal
  ],
  providers: [
    UserService
  ]
})
export class AdminModule {
}
