import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dalenpak';
  todos = [{
    label: 'aa',
    priority: 1,
    done: true
  }];
  addTodo(newTodolabel){
    var newTodo={
      label: newTodolabel,
      priority: 1,
      done: false
    };
    this.todos.push(newTodo);
  }
  deleteTodo(todo) {
    this.todos = this.todos.filter(t => t.label !== todo.label);
  }
  toggle(todo) {
    todo.done = !todo.done;
  }
}
