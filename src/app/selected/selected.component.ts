import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
 
import { TODOS } from '../mock-todos';
import { Todo } from '../todos';



@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.scss']
})
export class SelectedComponent implements OnInit {
todo$?: Observable<Todo>
  

  constructor(
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.todo$ = this.route.paramMap.pipe(
      map(params => Number(params.get('index'))),
      map(index =>  TODOS[index])
    )
  }

}
