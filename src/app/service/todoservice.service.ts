import { Injectable } from '@angular/core';
import {of} from "rxjs"
import {Todo} from "../model/todo"

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  todo:Todo[];
  constructor() {
    this.todo = [
      {
        id:'111',
        title:'learn',
        isCompleted:true,
        date:new Date()

      },
      {
        id:'222',
        title:'learn react',
        isCompleted:true,
        date:new Date()

      },
      {
        id:'333',
        title:'learn angular',
        isCompleted:false,
        date:new Date()

      },
    ]
   }

   getTodos(){
     return of(this.todo);
   }

   addTodo(todo:Todo){
     this.todo.push(todo)
   }

   changeStatus(todo:Todo){
      this.todo.map(singletodo=>{
        if(singletodo.id == todo.id){
          todo.isCompleted = !todo.isCompleted;
        }
      })
   }

   deleteTodo(todo:Todo){
     const indextodo = this.todo.findIndex(
       (currentobject) => currentobject.id === todo.id
     )
     this.todo.splice(indextodo,1)
   }
}
