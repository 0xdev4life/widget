import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  todoForm: FormGroup;

  todoList = [
    {
      label: 'Поесть',
      edit: false
    },
    {
      label: 'Попить',
      edit: false
    },
    {
      label: 'Поспать',
      edit: false
    }
  ];

  ngOnInit(): void {

    this.todoForm = new FormGroup({
      task     : new FormControl(null, [Validators.required]),
    });

  }

  removeTask(task): void {
    const idx = this.todoList.indexOf(task);

    if (idx > -1) {
      this.todoList.splice(idx, 1);
    }
  }

  addTask(): void {
    this.todoList.push({
      label: this.todoForm.get('task').value,
      edit: false
    });
    this.todoForm.reset();
  }
}
