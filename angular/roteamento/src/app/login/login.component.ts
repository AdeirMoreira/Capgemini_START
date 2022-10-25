import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    email: string = '';
    senha: string = '';

    constructor(
        private readonly auth: AuthService,
        private readonly router: Router
    ) {}

    ngOnInit(): void {}

    login() {
        if (this.auth.login(this.email, this.senha)) {
            this.router.navigate(['pagina-protegida']);
        } else {
            alert('login e/ou senha incorretos.');
            this.email = '';
            this.senha = '';
        }
    }
}
