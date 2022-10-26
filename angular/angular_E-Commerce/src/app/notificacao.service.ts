import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class NotificacaoService {
    constructor(private readonly snackBar: MatSnackBar) {}

    notificar(menssagem: string) {
        this.snackBar.open(menssagem, 'ok', {
            duration: 2000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
        });
    }
}
