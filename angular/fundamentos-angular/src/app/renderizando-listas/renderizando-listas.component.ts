import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/celuar';

@Component({
    selector: 'app-renderizando-listas',
    templateUrl: './renderizando-listas.component.html',
    styleUrls: ['./renderizando-listas.component.css'],
})
export class RenderizandoListasComponent {
    celulares: Celular[] = [
        {
            id: 1,
            nome: 'Xiaome Redme note 6 Pro',
            descricao: 'Celular que eu tenho',
            esgotado: true,
        },
        {
            id: 2,
            nome: 'Xiaome Redme note 5',
            descricao: 'Celular de Alessandro',
            esgotado: true,
        },
        {
            id: 3,
            nome: 'Motorola MotoG 7 Power',
            descricao: 'Celular de Leandro',
            esgotado: false,
        },
        {
            id: 4,
            nome: 'Sansung A20',
            descricao: 'Celular da Mãe',
            esgotado: false,
        },
        {
          id: 5,
          nome: 'Nokia c5-03',
          esgotado:true,
      },
    ];
}
