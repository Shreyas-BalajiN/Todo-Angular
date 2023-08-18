import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosParentComponent } from './components/todos-parent/todos-parent.component';
import { TodoItemsComponent } from './components/todo-items/todo-items.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosParentComponent,
    TodoItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
