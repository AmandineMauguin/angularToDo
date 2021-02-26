import { Component, OnInit } from '@angular/core';

import { TasksService } from '../../services/tasks.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item-task',
  templateUrl: './item-task.component.html',
  styleUrls: ['./item-task.component.css'],
})
export class ItemTaskComponent implements OnInit {
  tasks = new Array();
  newTask;

  constructor(private taskService: TasksService,private http: HttpClient) {}

  check(task) {
    task.done = !task.done;
    console.log(task.done);
  }

  addToList() {
    this.taskService.addToList(this.newTask);
    this.newTask = '';
  }
  deleteTask(id) {
    this.taskService.deleteTask(id);
  }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }
}
