import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

import { TODOS } from '../mock-todos';
import { Todo } from '../todos';



@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.scss']
})
export class SelectedComponent implements OnInit {
  todo$?: Observable<Todo>
  form = new FormGroup({
    text: new FormControl(),
    checked: new FormControl(false)
  })


  constructor(
    private route: ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => Number(params.get('index'))),
      map(index => TODOS[index])
    ).subscribe(todo => this.form.reset(todo))
  }

  update() {
    const index = Number(this.route.snapshot.paramMap.get("index"))
    TODOS[index] = this.form.value
    this.router.navigate(["/"])
  }
}
