import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';

const matModules = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
];

@NgModule({
  imports: [...matModules],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  exports: [...matModules],
})
export class MaterialModule {}
