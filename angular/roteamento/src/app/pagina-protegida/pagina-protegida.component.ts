import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-pagina-protegida',
  templateUrl: './pagina-protegida.component.html',
  styleUrls: ['./pagina-protegida.component.css']
})
export class PaginaProtegidaComponent implements OnInit {

  constructor(
    private readonly auth:AuthService,
    private readonly router:Router
  ) { }

  ngOnInit(): void {
  }

  logOut(){
    this.auth.logOut()
    this.router.navigate(['login'])
  }
}
