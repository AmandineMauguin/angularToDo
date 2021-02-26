import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks = [];
  constructor() { }

  getTasks(){
    return this.tasks;
  }

  addToList(newTask){
    let task = {
      id : this.tasks.length+1,
      name: newTask,
      done: false,
   }
   this.tasks.push(task);
  }

  deleteTask(id){
    this.tasks.splice(id, 1);
  }
}
