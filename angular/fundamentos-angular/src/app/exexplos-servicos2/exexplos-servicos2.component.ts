import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
    selector: 'app-exexplos-servicos2',
    templateUrl: './exexplos-servicos2.component.html',
    styleUrls: ['./exexplos-servicos2.component.css'],
})
export class ExexplosServicos2Component {
    constructor(
        public logger: LoggerService
    ){}

    descricao = '';

    adicionadescricao() {
        this.logger.logal(`A descricao ${this.descricao} foi adicionada`);
    }
}
