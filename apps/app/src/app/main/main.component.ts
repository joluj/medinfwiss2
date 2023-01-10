import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { StateService } from '../state/state.service';
import { MatListModule } from '@angular/material/list';

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
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export default class MainComponent {
  constructor(readonly stateService: StateService) {}

  addPatient() {
    const name = window.prompt('Name');
    if (name) {
      this.stateService.addPatient(name);
    }
  }

  addMedikation(id: string) {
    const name = window.prompt('Medikation');
    if (name) {
      this.stateService.addMedikation(id, name);
    }
  }
}
