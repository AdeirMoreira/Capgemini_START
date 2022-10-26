import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
    selector: 'app-exexplos-servicos1',
    templateUrl: './exexplos-servicos1.component.html',
    styleUrls: ['./exexplos-servicos1.component.css'],
})
export class ExexplosServicos1Component {
  constructor(
    private readonly logsServico:LoggerService
  ){}

  nome = ""
  adicionaNome () {
    this.logsServico.logal(`O nome ${this.nome} foi adcionado!`)
  }
}
