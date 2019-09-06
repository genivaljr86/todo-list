import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';


const routes: Routes = [
  {  
    path: 'todo',
    component: TodoComponent
  },
  {  
    path: 'todo-edit/:id',
    component: TodoEditComponent
  },
  {  
    path: '',
    redirectTo:'/todo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
