import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/requirements/Todo';

@Component({
  selector: 'app-todos-parent',
  templateUrl: './todos-parent.component.html',
  styleUrls: ['./todos-parent.component.css']
})
export class TodosParentComponent {
  display!:string;
  todos: Todo[];
  title!: string;
  description!: string;
  constructor(){
    this.todos=[
      {
        sno:1,
        title:"Read",
        desc: "Read a book",
        active:true
      },
      {
        sno:2,
        title:"Meditate",
        desc: "Do Meditation",
        active:true
      },
      {
        sno:3,
        title:"Workout",
        desc: "Go to gym",
        active:true
      },
      {
        sno:4,
        title:"Study",
        desc: "Study programming",
        active:true
      }
    ]
  }
handleEvent(input:Todo){
  this.todos.splice(this.todos.indexOf(input),1)
}
handleadd(){
  const task={
    sno:4,
    title:this.title,
    desc: this.description,
    active:true
  }
  this.todos.push(task)
  console.log(this.todos)
}
}
