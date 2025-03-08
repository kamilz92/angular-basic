import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  //basic binding, wihtout a fnc invocation: {{ titlebBascic }}
  titlebBascic: string = 'Basic Angular App';
  // A signal is the modern way of data binding in Angular 16+.
  // In the template, you can use {{ titleSignal() }} because it's a signal function.
  titleSignal = signal('Basic Angular App');
}
