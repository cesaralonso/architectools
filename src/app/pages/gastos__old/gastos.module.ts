import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AppTranslationModule } from '../../app.translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { Gastos } from './gastos.component';
import { GastosService } from './gastos.service';

import { routing }       from './gastos.routing';
import { HoverTable } from './components/hoverTable';


@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule
  ],
  declarations: [
    Gastos,
    HoverTable
  ],  
  providers: [
    GastosService
  ]
})
export class GastosModule {}


