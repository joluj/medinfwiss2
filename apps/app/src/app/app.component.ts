import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'medinfwiss2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly title$ = this.router.events.pipe(
    map((e) => {
      if (e instanceof ActivationEnd) {
        return e.snapshot.title;
      }
      return undefined;
    }),
    filter((title) => title != undefined)
  );
  constructor(private readonly router: Router) {}
}
