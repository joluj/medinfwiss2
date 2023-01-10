import { Injectable } from '@angular/core';
import { map, Observable, of, shareReplay } from 'rxjs';
import {
  EnzymWechselwirkungen,
  IEnzymWechselwirkungen,
} from '../EnzymWechselwirkungen';
import {
  createInteraktionsList,
  Interaktionen,
  InteraktionsList,
} from '../Interaktionen';

export interface Wirkstoff {
  name: string;
  isProDrug?: boolean;

  children?: Wirkstoff[];
}

export type Wirkstoffe = Wirkstoff[];

function mapToWirkstoff(wirkstoffe: IEnzymWechselwirkungen): Wirkstoffe {
  return Object.entries(wirkstoffe).reduce((prev, [key, value]) => {
    const children: Wirkstoff[] = value
      .map((w) => {
        if (typeof w === 'string') {
          return { name: w, isProDrug: w.endsWith('*') };
        }
        return mapToWirkstoff(w);
      })
      .flat();

    return prev.concat({ name: key, children });
  }, [] as Wirkstoffe);
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  readonly enzymWechselwirkungen$: Observable<Wirkstoffe> = of(
    EnzymWechselwirkungen
  ).pipe(
    map((ww) => {
      return mapToWirkstoff(ww);
    }),
    shareReplay(1)
  );

  readonly interaktionen$: Observable<InteraktionsList> = of(
    Interaktionen
  ).pipe(map(createInteraktionsList));
}