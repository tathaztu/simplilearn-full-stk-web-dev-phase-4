import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  // todos = [
  //   {id: 1, description: 'Learn to Paint'},
  //   {id: 2, description: 'Learn to Sing'},
  //   {id: 3, description: 'Learn to Cook'}
  // ];

  public searchTodo: any = '';

  todos = [
    new Todo(1, 'Learn to Paint', false, new Date()),
    new Todo(2, 'Learn to Sing', false, new Date()),
    new Todo(3, 'Learn to Cook', false, new Date())
  ]

  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

}
