import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatrizComponent } from './matriz/matriz.component';
import { TableroComponent } from './tablero/tablero.component';

const componentes = [MatrizComponent, TableroComponent];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [componentes],
  exports: [componentes]
})
export class MatricesModule { }