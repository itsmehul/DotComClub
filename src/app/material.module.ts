import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule,MatCardModule,MatExpansionModule,MatFormFieldModule,MatInputModule],
  exports: [MatCardModule,MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule],
})
export class MaterialModule { }