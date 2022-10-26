import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { IProduto, produtos } from '../produtos';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-produtos',
    templateUrl: './produtos.component.html',
    styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
    produtos: IProduto[] | undefined;

    constructor(private readonly produtosService: ProdutosService, private readonly route:ActivatedRoute) {
        const produtos = this.produtosService.getAll();
        
        this.route.queryParamMap.subscribe((params) => {
            const descricao = params.get('descricao')?.toLocaleLowerCase();
            console.log(descricao)
            descricao
                ? this.produtos = produtos.filter((produto) => produto.descricao.toLowerCase().includes(descricao))
                : this.produtos = produtos;
        });
    }

    ngOnInit = (): void => {
        
    };


}
