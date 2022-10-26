import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-com-paramentro',
  templateUrl: './pagina-com-paramentro.component.html',
  styleUrls: ['./pagina-com-paramentro.component.css']
})
export class PaginaComParamentroComponent implements OnInit {
  id: number | null = null
  nome: string | null = null
  idade: number | null = null 

  constructor(
    private readonly route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => this.id = Number(param.get('id')))
    
    this.route.queryParamMap.subscribe(param => {
      this.nome = param.get('nome')
      this.idade = Number(param.get('idade'))
    })
  }

}
