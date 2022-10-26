import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = []

  obtemCarrinho  ():IProdutoCarrinho[]   {
    const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]')
    return carrinho
  }

  adicionarAoCarrinho(produto:IProdutoCarrinho): void{
    console.log(this.itens)
    this.itens.push(produto) && localStorage.setItem('carrinho', JSON.stringify(this.itens))
  }

  removerDoCarrinho(produtoId:number){
    this.itens = this.itens.filter(produto => produto.id !== produtoId)
    let newCart = JSON.parse(localStorage.getItem('carrinho') || '').filter((produto:any) => produto.id !== produtoId)
    localStorage.setItem('carrinho', JSON.stringify(newCart))
  }

  limparCarrinho  ():void  {
    this.itens = []  
    localStorage.clear()
  }
}
