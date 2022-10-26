import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent  {
  nome= "Jair"
  nascimento= "1955/03/21"
  urlImage= "/assets/JB.jpg"

  mostrarDataNascimento(){
    alert(`O Mito nasceu dia ${this.nascimento}`)
  }
}
