import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { StateService } from '../state/state.service';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  BehaviorSubject,
  combineLatestWith,
  map,
  startWith,
  combineLatest,
} from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { WechselwirkungResult } from '../calculateWechselwirkung';
import { MatSortModule, Sort } from '@angular/material/sort';

@Component({
  selector: 'medinfwiss2-main',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    RouterLink,
    MatListModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export default class MainComponent {
  substrateControl = new FormControl('');

  readonly wechselwirkungenColumns: (keyof WechselwirkungResult)[] = [
    'substrat',
    'wert',
    'reason',
    'enzym',
  ];
  readonly filteredOptions$ = this.stateService.allSubstrate$.pipe(
    combineLatestWith(
      this.substrateControl.valueChanges.pipe(startWith('')),
      this.stateService.selectedPatient$
    ),
    map(([all, input, patient]) =>
      patient
        ? all
            .filter((s) => !patient.medikation.includes(s))
            .filter((s) => s.includes(input ?? ''))
        : []
    )
  );

  readonly sorting = new BehaviorSubject<Sort>({
    active: 'enzym',
    direction: '',
  });
  readonly wechselwirkungen$: typeof this.stateService.wechselwirkungen$ =
    combineLatest([this.stateService.wechselwirkungen$, this.sorting]).pipe(
      map(([wws, sort]) => {
        if (!wws) return null;
        if (!sort.direction) {
          return wws;
        }

        const key = sort.active as keyof WechselwirkungResult;
        const sorted = wws
          .slice()
          .sort((a, b) =>
            a[key].toLocaleString().localeCompare(b[key].toLocaleString())
          );

        if (sort.direction === 'asc') {
          return sorted;
        }
        return sorted.reverse();
      })
    );

  constructor(readonly stateService: StateService) {}

  addPatient() {
    const name = window.prompt('Name');
    if (name) {
      this.stateService.addPatient(name);
    }
  }

  addMedikation(id: string, name: string) {
    this.stateService.addMedikation(id, name);
  }
}
