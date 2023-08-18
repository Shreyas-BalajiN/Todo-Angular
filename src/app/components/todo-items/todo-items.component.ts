import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/requirements/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent {
  handleClick(title:Todo){
    this.deleteEvent.emit(title)
  }
  @Input() todo!:Todo
  @Output() deleteEvent: EventEmitter<Todo>=new EventEmitter();
}
