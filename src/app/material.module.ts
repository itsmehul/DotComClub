import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule,MatExpansionModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule,MatCardModule,MatExpansionModule],
  exports: [MatCardModule,MatButtonModule,MatExpansionModule],
})
export class MaterialModule { }