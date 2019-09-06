import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Todo } from 'src/model/Todo';


@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent implements OnInit {

  todoForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private api: TodoService) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      'id': [null],
      'content' : ["", Validators.required],
      'done': [0]
    })
  }

  createTodo(form: Todo) {
    this.api.createTodo(form)
      .subscribe(res =>{
        console.log("Criou")
      })
  }

}
