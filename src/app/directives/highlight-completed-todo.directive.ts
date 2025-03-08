import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
})
export class HighlightCompletedTodoDirective {
  isCompleted = input(false);
  el = inject(ElementRef);
  constructor() {}

  stylesEffect = effect(() => {
    if (this.isCompleted()) {
      //could be dont with css its just for trening porpouse
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.color = '#6c757d';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.color = '#000';
    }
  });
}
