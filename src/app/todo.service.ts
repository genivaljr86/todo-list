import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Todo } from 'src/model/Todo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = 'http://localhost:3000/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(apiUrl).pipe(
      tap(todos => console.log('leu os todos')),
    )
  }

  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(apiUrl + "/" + id).pipe(
      tap(todos => console.log(`Leu o id ${id}`)),
    )
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(apiUrl, todo, httpOptions).pipe()
  }

  editTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(apiUrl + "/" + todo.id, todo, httpOptions).pipe()
  }

  removeTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(apiUrl + "/" + id).pipe(
      tap(todos => console.log(`Removeu o id ${id}`)),
    )
  }
}
