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
import {
  calculateWechselwirkung,
  createInteraktionenMap,
} from '../calculateWechselwirkung';
import { DataService } from './data.service';

const STORAGE_KEYS = {
  PATIENTS: 'PATIENTS',
  SELECTED_PATIENT_ID: 'SELECTED_PATIENT_ID',
} as const;

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private readonly _patients$ = new BehaviorSubject<{ [id: string]: Patient }>(
    {}
  );

  readonly patients$: Observable<Patient[]> = this._patients$.pipe(
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
  ]).pipe(
    map(([id, patients]) => (id ? patients[id] : undefined)),
    tap((p) => {
      if (p) {
        localStorage.setItem(STORAGE_KEYS.SELECTED_PATIENT_ID, p.id);
      } else {
        localStorage.removeItem(STORAGE_KEYS.SELECTED_PATIENT_ID);
      }
    })
  );

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

  readonly allWirkstoffeWithInteraktionen$ =
    this.dataService.interaktionen$.pipe(
      map((s) =>
        Array.from(createInteraktionenMap(s).values())
          .map((s) => Object.keys(s))
          .flat()
      ),
      // Remove stars
      map((s) => s.map((s) => s.replace('*', ''))),
      // No duplicates
      map((s) => Array.from(new Set(s).values())),
      // Sort
      map((s) => s.sort())
    );

  constructor(private readonly dataService: DataService) {
    const patients = localStorage.getItem(STORAGE_KEYS.PATIENTS);
    if (patients) {
      this._patients$.next(JSON.parse(patients));
    }
    const id = localStorage.getItem(STORAGE_KEYS.SELECTED_PATIENT_ID);
    if (id) {
      this.selectPatient(id);
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
    this.selectedPatientId$.next(id);
  }

  removePatient(id: string) {
    const pats = { ...this._patients$.value };
    delete pats[id];
    this._patients$.next(pats);
  }

  addMedikation(id: string, name: string) {
    const patient = this._patients$.value[id];
    if (!patient) return;

    this._patients$.next({
      ...this._patients$.value,
      [id]: { ...patient, medikation: patient.medikation.concat(name).sort() },
    });
  }
  removeMedikation(id: string, name: string) {
    const patient = this._patients$.value[id];
    if (!patient) return;

    this._patients$.next({
      ...this._patients$.value,
      [id]: {
        ...patient,
        medikation: patient.medikation.filter((m) => m !== name),
      },
    });
  }
}
