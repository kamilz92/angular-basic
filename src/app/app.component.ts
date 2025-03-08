import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  //
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  //whats get renderd to the view, could be templateURL
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
  `,
  styles: [
    `
      //style writen within component stay within the component, due to attributes styles are not leaking
      main {
        margin: 0 auto;
        width: 500px;
      }
    `,
  ],
})
export class AppComponent {}
