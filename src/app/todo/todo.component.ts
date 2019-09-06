import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from 'src/model/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[]

  constructor(private api: TodoService) { }

  ngOnInit() {
    this.api.getTodos().subscribe(res=>{
      this.todos = res;

    })
  }

  deleteTodo(id:number){
    return this.api.removeTodo(id).subscribe(res =>{
      this.api.getTodos().subscribe(res=>{
        this.todos = res;
      })
    })
  }

}
