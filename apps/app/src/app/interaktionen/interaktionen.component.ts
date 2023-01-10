import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../state/data.service';

@Component({
  selector: 'medinfwiss2-interaktionen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interaktionen.component.html',
  styleUrls: ['./interaktionen.component.scss'],
})
export class InteraktionenComponent {
  readonly interaktionen$ = this.dataService.interaktionen$;

  constructor(private readonly dataService: DataService) {}
}

export default InteraktionenComponent;
