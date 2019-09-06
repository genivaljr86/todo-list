import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from 'src/model/Todo';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  todoForm : FormGroup

  constructor(private api: TodoService, private route : ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      'id': [null],
      'content': [null, Validators.required],
      'done': [null]
    })
    
    this.api.getTodo(this.route.snapshot.params['id']).subscribe(res =>{
      this.todoForm.setValue({
        'id': res.id,
        'content': res.content,
        'done': res.done
      })
    })
  }

  editTodo(todo:Todo){
    this.api.editTodo(todo).subscribe(res =>{
      this.router.navigate(['/todo'])
    })
  }

}
