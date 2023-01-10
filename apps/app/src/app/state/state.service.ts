import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, shareReplay, tap } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { Patient } from './patient';

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

  readonly selectedPatient$ = combineLatest([
    this.selectedPatientId$,
    this._patients$,
  ]).pipe(map(([id, patients]) => (id ? patients[id] : undefined)));

  constructor() {
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
