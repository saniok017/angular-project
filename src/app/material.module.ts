import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatInputModule,
  MatNativeDateModule,
  MatCardModule,
  MatRadioModule,
  MatListModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatSelectModule,
  MatIconModule,
  MatTooltipModule,
  MatToolbarModule,
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatTooltipModule,
  MatNativeDateModule,
  MatCardModule,
  MatRadioModule,
  MatListModule,
  MatToolbarModule,
  MatDatepickerModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MyMaterialModule {}
