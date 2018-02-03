import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule,MatSidenavModule,MatCardModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule,MatSidenavModule,MatCardModule],
  exports: [MatButtonModule, MatToolbarModule,MatSidenavModule,MatCardModule],
})
export class MaterialModule { }