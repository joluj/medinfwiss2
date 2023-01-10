import { Injectable } from '@angular/core';
import { map, Observable, of, shareReplay } from 'rxjs';
import { Substrate, SubstratList, toSubstratList } from '../Substrate';
import {
  createInteraktionsList,
  Interaktionen,
  InteraktionsList,
} from '../Interaktionen';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  readonly substrate$: Observable<SubstratList> = of(Substrate).pipe(
    map((ww) => {
      return toSubstratList(ww);
    }),
    shareReplay(1)
  );

  readonly interaktionen$: Observable<InteraktionsList> = of(
    Interaktionen
  ).pipe(map(createInteraktionsList));
}
