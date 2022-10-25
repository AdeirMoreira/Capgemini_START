import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  admEmail:string = 'admin@email.com'
  admSenha:string = 'admin'
  token = 'token'
  constructor() { }

  estaLogando = (): boolean => !!sessionStorage.getItem('token')
  
  login = (email:string, senha:string):boolean => {
    if(email === this.admEmail && senha === this.admSenha){
      sessionStorage.setItem('token',this.token)
      return true
    }
    return false
  }

  logOut = () => sessionStorage.clear() 
}
