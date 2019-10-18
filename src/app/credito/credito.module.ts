import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditoComponent } from './components/credito/credito.component';
import { CreditoService } from './services';



@NgModule({
  declarations: [CreditoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CreditoComponent
  ],
  providers: [
    CreditoService
  ]
})
export class CreditoModule { }
