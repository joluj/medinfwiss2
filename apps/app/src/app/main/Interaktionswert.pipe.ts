import { Pipe, PipeTransform } from '@angular/core';
import { Interaktionswert } from '../Interaktionen';

@Pipe({
  standalone: true,
  name: 'Interaktionswert',
})
export class InteraktionswertPipe implements PipeTransform {
  transform(value: Interaktionswert): string {
    const typ = value > 0 ? 'Verstärkung' : 'Hemmung';
    switch (value) {
      case -1:
      case 1:
        return `schwache oder undefinierte ${typ}`;
      case -2:
      case 2:
        return `mittlere ${typ}`;
      case 3:
      case -3:
        return `ausgeprägte ${typ}`;
    }
  }
}
