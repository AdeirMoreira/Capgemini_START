import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
	selector: 'app-curso',
	templateUrl: './curso.component.html',
	styleUrls: ['./curso.component.css'],
})
export class CursoComponent implements OnInit {
  cursos:Curso[] = []
  curso = new Curso()
	constructor(private readonly cursoService: CursoService) {}

	ngOnInit(): void {
    this.buscar()
  }

	buscar() {
    this.cursoService.buscarCursos().subscribe(
      ((res: Curso[]) => {
      this.cursos = res
      })
    )
  }
	cadastrar() {
    this.cursoService.cadastrarCurso(this.curso).subscribe(
      ((res:Curso[]) => {
        this.cursos = res

        this.curso.nomeCurso = undefined
        this.curso.valorCurso = undefined

        this.buscar()
      })
    )
  }
	atualizar() {
    this.cursoService.atualizarCurso(this.curso).subscribe(
      ((res:Curso[]) => {
        this.cursos = res

        this.curso.nomeCurso = undefined
        this.curso.valorCurso = undefined

        this.buscar()
      })
    )
  }
	deletar() {
    this.cursoService.deletarCurso(this.curso).subscribe(
      ((res:Curso[]) => {
        this.cursos = res

        this.curso.nomeCurso = undefined
        this.curso.valorCurso = undefined
      })
    )
  }

  selecionarCurso(c:Curso){
    this.curso.idCurso = c.idCurso
    this.curso.nomeCurso = c.nomeCurso
    this.curso.valorCurso = c.valorCurso
  }
}
