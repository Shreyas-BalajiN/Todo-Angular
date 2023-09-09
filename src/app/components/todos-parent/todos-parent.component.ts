import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/requirements/Todo';

@Component({
  selector: 'app-todos-parent',
  templateUrl: './todos-parent.component.html',
  styleUrls: ['./todos-parent.component.css']
})
export class TodosParentComponent {
  localItem: string;
  display!:string;
  todos: Todo[];
  title!: string;
  description!: string;
  constructor(){
    this.localItem = localStorage.getItem("todos")!;
    if(this.localItem == null){
    this.todos = [];
    }
    else{ 
      this.todos = JSON.parse(this.localItem); 
    }

  }
ngOnInit(){
  console.log(this.todos)
}
handleDone(todo:Todo){
  this.todos[this.todos.indexOf(todo)].active=!this.todos[this.todos.indexOf(todo)].active
  localStorage.setItem("todos", JSON.stringify(this.todos));
}
handleDelete(input:Todo){
  this.todos.splice(this.todos.indexOf(input),1)
  localStorage.setItem("todos", JSON.stringify(this.todos));
}
handleadd(){
  const task={
    title:this.title,
    desc: this.description,
    active:true
  }
  this.todos.push(task)
  console.log(this.todos)
  localStorage.setItem("todos", JSON.stringify(this.todos));
}
}
