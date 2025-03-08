import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.type';

@Pipe({
  name: 'filterTodos',
})
export class FilterTodosPipe implements PipeTransform {
  transform(todos: Todo[], searchTerm: string): Todo[] {
    if (!searchTerm) {
      return todos;
    }
    const text = searchTerm.toLocaleLowerCase();
    return todos.filter((todo) =>
      todo.title.toLocaleLowerCase().includes(text)
    );
  }
}
