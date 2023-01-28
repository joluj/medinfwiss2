import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        {
          path: 'enzym-wirkstoffe',
          loadComponent: () =>
            import('./enzym-wechselwirkungen/enzym-wechselwirkungen.component'),
          title: 'Wechselwirkungswarner | Wirkstoffe',
        },
        {
          path: 'interaktionen',
          loadComponent: () =>
            import('./interaktionen/interaktionen.component'),
          title: 'Wechselwirkungswarner | Interaktionen',
        },
        {
          path: 'app',
          loadComponent: () => import('./main/main.component'),
          title: 'Wechselwirkungswarner',
        },
        {
          path: 'about',
          loadComponent: () => import('./about/about.component'),
          title: 'Wechselwirkungswarner | About',
        },
        {
          path: '**',
          redirectTo: '/app',
        },
      ],
      { useHash: true }
    ),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
