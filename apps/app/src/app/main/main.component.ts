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
import { combineLatestWith, map } from 'rxjs';

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
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export default class MainComponent {
  substrateControl = new FormControl('');

  readonly filteredOptions$ = this.stateService.allSubstrate$.pipe(
    combineLatestWith(
      this.substrateControl.valueChanges,
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
