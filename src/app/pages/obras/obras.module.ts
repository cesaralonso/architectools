import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AppTranslationModule } from '../../app.translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { Obras } from './obras.component';
import { ObrasService } from './obras.service';

import { routing }       from './obras.routing';


@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
  ],
  declarations: [
    Obras
  ],  
  providers: [
    ObrasService
  ]
})
export class ObrasModule {}


