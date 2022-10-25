import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  mensagens: string[] = []
  logal(mensagem:string){
    console.log(mensagem)
    this.mensagens.push(mensagem)
  }
  
  mostraLogs(){
    console.log(this.mensagens)
  }
}
