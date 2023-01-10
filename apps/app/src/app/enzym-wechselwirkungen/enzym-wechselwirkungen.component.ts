import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTreeModule } from '@angular/material/tree';
import { EnzymWechselwirkungenService } from '../state/EnzymWechselwirkungen.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'medinfwiss2-enzym-wechselwirkungen',
  standalone: true,
  imports: [CommonModule, MatTreeModule, MatIconModule, MatButtonModule],
  templateUrl: './enzym-wechselwirkungen.component.html',
  styleUrls: ['./enzym-wechselwirkungen.component.scss'],
})
export class EnzymWechselwirkungenComponent {
  readonly enzyme$ = this.enzymWechselwirkungenService.enzymWechselwirkungen;

  constructor(
    private readonly enzymWechselwirkungenService: EnzymWechselwirkungenService
  ) {}
}

export default EnzymWechselwirkungenComponent;
