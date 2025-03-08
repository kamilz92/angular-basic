import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Adjust the path as necessary
import { TodosComponent } from './todos/todos.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    //lazy loading, only load the component when the route is visited on larger apps to optimize performance
    // loadComponent: () =>
    //   import('./home/home.component').then((m) => m.HomeComponent),
    //eager loading
    component: HomeComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
  }
];
