import { Component, OnInit } from '@angular/core';

import { TODOS } from '../mock-todos';
import { Todo } from '../todos';



@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.scss']
})
export class SelectedComponent implements OnInit {
  

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
