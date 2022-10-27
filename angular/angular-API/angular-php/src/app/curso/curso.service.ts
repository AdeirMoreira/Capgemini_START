import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private readonly UrlBase: string = 'http://localhost/api/php/';
  private cursos:Curso[] = []

  constructor(private readonly http:HttpClient) { }

  buscarCursos():Observable<Curso[]>{
    return this.http.get(this.UrlBase+'listar').pipe(
      map((res:any)=> {
        this.cursos = res['cursos'];
        return this.cursos
      })
    )
  }

  cadastrarCurso(c:Curso):Observable<Curso[]>{
    return this.http.post(this.UrlBase+'cadastrar',{cursos:c}).pipe(
      map((res:any)=> {
        this.cursos.push(res['cursos']);
        return this.cursos
      })
    )
  }

  atualizarCurso(c:Curso):Observable<Curso[]>{
    return this.http.put(this.UrlBase+'alterar',{cursos:c}).pipe(
      map(res => {
        const cursoAterado = this.cursos.find(curso => c.idCurso === curso.idCurso)
        if( cursoAterado) {
          cursoAterado.nomeCurso = c.nomeCurso
          cursoAterado.valorCurso = c.valorCurso
        }
        return this.cursos
      })
    )
  }

  deletarCurso(c:Curso):Observable<Curso[]>{
    const params = new HttpParams().set('idCurso', c.idCurso?.toString() as string)

    return this.http.delete(this.UrlBase+'excluir',{params}).pipe(
      map((res) => {
        const filtro = this.cursos.filter(curso => curso.idCurso !== c.idCurso)
        return this.cursos = filtro
      })
    )
  }
}
