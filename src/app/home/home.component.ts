import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from "../components/counter/counter.component";

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  //data from parent to a child component
  homeMessage = signal('Hello, Angular!');

  keyUpHandler = (event: KeyboardEvent) => console.log((event.view));

  //data from child to parent component
}
