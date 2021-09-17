import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

import { Todo } from '../todos';
import { TODOS } from '../mock-todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = TODOS
  form = new FormGroup({
    text: new FormControl(),
    checked: new FormControl()
  })
  index?: number


  constructor(
  ) { }

  ngOnInit(): void {
  }

  addTask(event: Event) {
    event.preventDefault()
    const text = this.form.value
    this.todos.push(text)
    this.form.reset()
  }


  select(index: number) {
    this.index = index
  }

}
