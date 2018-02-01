import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule,MatSidenavModule,MatCheckboxModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule,MatSidenavModule,MatCheckboxModule],
  exports: [MatButtonModule, MatToolbarModule,MatSidenavModule,MatCheckboxModule],
})
export class MaterialModule { }