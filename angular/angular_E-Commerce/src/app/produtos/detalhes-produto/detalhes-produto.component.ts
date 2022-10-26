import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
    selector: 'app-detalhes-produto',
    templateUrl: './detalhes-produto.component.html',
    styleUrls: ['./detalhes-produto.component.css'],
})
export class DetalhesProdutoComponent {
    produto: IProduto | undefined;
    
    quantidadeComparada: number = 1;

    constructor(
        private readonly produtoService: ProdutosService,
        private readonly route: ActivatedRoute,
        private readonly notificacaoService: NotificacaoService,
        private readonly carrinhoService: CarrinhoService
    ) {
        const routeParams = this.route.snapshot.paramMap.get('id');
        this.produto = this.produtoService.getOne(routeParams as string);
    }

    adicionarAoCarrinho(produto: IProduto ) {
        this.carrinhoService.adicionarAoCarrinho({
            ...produto,
            quantidadeComprada: this.quantidadeComparada
        });
        this.notificacaoService.notificar(
            `O produto ${produto.descricao} foi adicionado ao carrinho`
        );
    }
}
