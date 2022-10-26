import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
    providedIn: 'root',
})
export class ProdutosService {
    produtos: IProduto[] = produtos;

    constructor() {}

    getAll = () => this.produtos;

    getOne = (id: string) =>
        this.produtos.find((produto) => produto.id === +id);
}
