import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

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

  // todos = [
  //   new Todo(1, 'Learn to Paint', false, new Date()),
  //   new Todo(2, 'Learn to Sing', false, new Date()),
  //   new Todo(3, 'Learn to Cook', false, new Date())
  // ]

  todos: Todo[];
  message: string;

  constructor(
    private todoDataService: TodoDataService,
    private router:Router
  ) {}

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoDataService.retrieveAllTodos('Tatha').subscribe (
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id) {
    console.log(`Delete Todo ${id}`);
    this.todoDataService.deleteTodo('Tatha', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} was successful.`
        this.refreshTodos();
      }
    )
  }

  updateTodo(id) {
    console.log(`Update Todo ${id}`);
    this.router.navigate(['todos', id])
  }

  addTodo(){
    this.router.navigate(['todos', -1])
  }
}
