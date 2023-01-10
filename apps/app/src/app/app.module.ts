import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        {
          path: 'enzym-wechselwirkungen',
          loadComponent: () =>
            import('./enzym-wechselwirkungen/enzym-wechselwirkungen.component'),
          title: 'Wechselwirkungen-Checker | Enzyme',
        },
        {
          path: 'interaktionen',
          loadComponent: () =>
            import('./interaktionen/interaktionen.component'),
          title: 'Wechselwirkungen-Checker | Interaktionen',
        },
        {
          path: '',
          loadComponent: () => import('./main/main.component'),
          title: 'Wechselwirkungen-Checker',
        },
        {
          path: '**',
          redirectTo: '/',
        },
      ],
      { useHash: true }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
