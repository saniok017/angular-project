import { NgModule } from '@angular/core';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';

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

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 0,
  hideDelay: 1000,
  touchendHideDelay: 1000,
};

@NgModule({
  imports: modules,
  exports: modules,
  providers: [{ provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }],
})
export class MyMaterialModule {}
