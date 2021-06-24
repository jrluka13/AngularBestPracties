import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataUserService {
  constructor(private http: HttpClient) {
  }

  getData(): void {
    this.http.get('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .subscribe((response) => {
        console.log(response);
      });
  }

  deleteData(): void {

  }
}
