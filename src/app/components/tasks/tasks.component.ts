import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service'



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks = new Array;
  newTask;
  
  constructor(private taskService: TasksService,) { }

  check(task){
    task.done = !task.done;
    console.log(task.done);
  }

  addToList() { 
    this.taskService.addToList(this.newTask);
    this.newTask = '';
} 

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

}
