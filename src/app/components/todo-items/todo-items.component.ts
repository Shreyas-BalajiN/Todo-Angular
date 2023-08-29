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
  handleDone(todo:Todo){
    this.doneEvent.emit(todo)
  }
  @Input() todo!:Todo
  @Input() i!: number;
  @Output() deleteEvent: EventEmitter<Todo>=new EventEmitter();
  @Output() doneEvent: EventEmitter<Todo>=new EventEmitter();
}
