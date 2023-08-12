import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosParentComponent } from './todos-parent.component';

describe('TodosParentComponent', () => {
  let component: TodosParentComponent;
  let fixture: ComponentFixture<TodosParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodosParentComponent]
    });
    fixture = TestBed.createComponent(TodosParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
