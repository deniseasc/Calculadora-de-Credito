import { Component, OnInit } from '@angular/core';
import { CreditoService } from '../../services';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.css']
})
export class CreditoComponent implements OnInit {

  constructor(private credito: CreditoService) { }

  private valorCredito:number;

  ngOnInit() {
    this.valorCredito = 0;
  }

  addCredito(valorRecebido){
    this.valorCredito = this.credito.sumCredito(this.valorCredito,valorRecebido)
  }

  updateCredito(){
    this.valorCredito = this.valorCredito - 1;
  }

  get pegaCredito(){
    return this.valorCredito;
  }

}
