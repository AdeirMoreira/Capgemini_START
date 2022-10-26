import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    constructor(
        public readonly carrinhoService: CarrinhoService,
        public readonly router: Router
    ) {}

    ngOnInit(): void {}
}
