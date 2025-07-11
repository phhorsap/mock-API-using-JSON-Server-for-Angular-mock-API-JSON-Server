import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data {
  private http = inject(HttpClient);

  getAllData() {
    return this.http.get('http://localhost:3000/students');
  }
  
}
