import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  shareReplay,
  tap,
} from 'rxjs';
import { v4 as uuid } from 'uuid';
import { Patient } from './patient';
import { calculateWechselwirkung } from '../calculateWechselwirkung';
import { DataService } from './data.service';

const STORAGE_KEYS = {
  PATIENTS: 'PATIENTS',
} as const;

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private readonly _patients$ = new BehaviorSubject<{ [id: string]: Patient }>(
    {}
  );

  readonly patients$ = this._patients$.pipe(
    tap((ps) =>
      localStorage.setItem(STORAGE_KEYS.PATIENTS, JSON.stringify(ps))
    ),
    map((ps) => Object.values(ps)),
    shareReplay(1)
  );

  private readonly selectedPatientId$ = new BehaviorSubject<string | null>(
    null
  );

  readonly selectedPatient$: Observable<Patient | undefined> = combineLatest([
    this.selectedPatientId$,
    this._patients$,
  ]).pipe(map(([id, patients]) => (id ? patients[id] : undefined)));

  readonly wechselwirkungen$ = combineLatest([
    this.dataService.substrate$,
    this.dataService.interaktionen$,
    this.selectedPatient$,
  ]).pipe(
    map(([substrate, interaktionen, patient]) => {
      if (!patient) return null;
      return calculateWechselwirkung(
        substrate,
        interaktionen,
        patient.medikation
      );
    })
  );

  constructor(private readonly dataService: DataService) {
    const patients = localStorage.getItem(STORAGE_KEYS.PATIENTS);
    if (patients) {
      this._patients$.next(JSON.parse(patients));
    }
  }

  selectPatient(id: string | null) {
    this.selectedPatientId$.next(id);
  }

  addPatient(name: string) {
    const id = uuid();
    this._patients$.next({
      ...this._patients$.value,
      [id]: { id, name, medikation: [] },
    });
  }

  addMedikation(id: string, name: string) {
    const patient = this._patients$.value[id];
    if (!patient) return;

    this._patients$.next({
      ...this._patients$.value,
      [id]: { ...patient, medikation: patient.medikation.concat(name) },
    });
  }
}
