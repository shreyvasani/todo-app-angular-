import { Component, OnInit } from '@angular/core';
import {Todo} from "../../model/todo";
import {v4 as uuidv4} from "uuid";

import {TodoserviceService} from "../../service/todoservice.service";


@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {
  todoTitle:string;
  constructor(private todoservice:TodoserviceService) { }

  ngOnInit(): void {
  }
  handleAdd=()=>{
    const newTodo:Todo = {
      id:uuidv4(),
      title:this.todoTitle,
      isCompleted:false,
      date:new Date()

    }
    this.todoservice.addTodo(newTodo);
    this.todoTitle = ""
  }

}
