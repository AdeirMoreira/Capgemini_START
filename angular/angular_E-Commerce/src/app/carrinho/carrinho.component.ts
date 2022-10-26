import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = []
  total:number = 0 

  constructor(public readonly carrinhoService: CarrinhoService, private readonly router:Router) { 
    this.itensCarrinho = this.carrinhoService.obtemCarrinho()
  }

  ngOnInit(): void {
    this.calcularTotal()
  }

  calcularTotal(){
    this.total = this.itensCarrinho.reduce((acc, current) => acc + current.preco * current.quantidadeComprada, 0)
  }

  removerDoCarrinho(produtoId:number){
    this.carrinhoService.removerDoCarrinho(produtoId)
    this.itensCarrinho = this.itensCarrinho.filter(produto => produto.id !== produtoId)
    this.calcularTotal()
  }

  comprar(){
    alert(`compra finalizada!`)
    this.carrinhoService.limparCarrinho()
    this.router.navigate(['produtos'])
  }
}
