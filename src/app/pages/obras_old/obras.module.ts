import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslationModule } from '../../app.translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { DataTableModule } from "angular2-datatable";

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DefaultModal } from './components/dataTables/default-modal/default-modal.component';

import { Obras } from './obras.component';
import { ObrasService } from './obras.service';
import { DataTables } from './components/dataTables/dataTables.component';
import { DataTablesService } from './components/dataTables/dataTables.service';
import { DataFilterPipe } from './components/dataTables/data-filter.pipe';

import { routing } from './obras.routing';



@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
    DataTableModule,
    NgbModalModule
  ],
  declarations: [
    Obras,
    DataTables,
    DataFilterPipe,
    DefaultModal
  ],
  entryComponents: [
    DefaultModal
  ],
  providers: [
    ObrasService,
    DataTablesService
  ]
})
export class ObrasModule {}


