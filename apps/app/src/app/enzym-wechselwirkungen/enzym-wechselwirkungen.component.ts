import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTreeModule } from '@angular/material/tree';
import { DataService } from '../state/data.service';
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
  readonly enzyme$ = this.dataService.enzymWechselwirkungen$;

  constructor(private readonly dataService: DataService) {}
}

export default EnzymWechselwirkungenComponent;
