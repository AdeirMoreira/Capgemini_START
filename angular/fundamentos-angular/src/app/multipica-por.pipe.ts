import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multipicaPor'
})
export class MultipicaPorPipe implements PipeTransform {

  transform(valor: number, multiplicador: number): number {
    return valor * multiplicador
  }

}
