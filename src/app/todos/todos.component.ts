import { Component, signal, inject, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../models/todo.type';
import { catchError } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  loading = signal<boolean>(true);
  searchTerm = signal('');

  ngOnInit(): void {
    this.todoService
      .getTodos()
      .pipe(
        catchError((err) => {
          console.error(err);
          this.loading.set(false);
          return [];
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos.slice(0, 5));
        this.loading.set(false);
      });
  }

  todoToggled(todoItem: Todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  }
}
