import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Data } from './services/data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mockApi');
  private ds = inject(Data);
  students: any;

  constructor() {
    this.ds.getAllData().subscribe(data => {
      this.students = data;
      console.log(data);
    });
  }
  ngOnInit() {
    this.getStudents() 
  }
  getStudents() {
    return console.log('Students List',this.students);  
  }
}
