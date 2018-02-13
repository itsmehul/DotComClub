import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,MatDatepickerModule, MatNativeDateModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule,MatCardModule,MatExpansionModule,MatFormFieldModule,MatInputModule,MatDatepickerModule, MatNativeDateModule],
  exports: [MatCardModule,MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,MatDatepickerModule, MatNativeDateModule],
})
export class MaterialModule { }