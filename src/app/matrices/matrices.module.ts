import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatrizComponent } from './matriz/matriz.component';

const componentes = [MatrizComponent];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [componentes],
  exports: [componentes]
})
export class MatricesModule { }