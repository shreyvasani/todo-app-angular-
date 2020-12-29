import { Component, OnInit } from '@angular/core';
import {TodoserviceService} from "../../service/todoservice.service"
import {Todo} from "../../model/todo"
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  todos:Todo[]

  constructor(private TodoserviceService:TodoserviceService) { }

  ngOnInit(): void {
    this.TodoserviceService.getTodos().subscribe(todos=>{
      this.todos = todos;
    })
  }


  changeTodoStatus(todo:Todo){
    this.TodoserviceService.changeStatus(todo)
  }
  deleteTodo(todo:Todo){
    this.TodoserviceService.deleteTodo(todo)
  }

}
