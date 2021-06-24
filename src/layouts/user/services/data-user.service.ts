import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataUserService {
  constructor(private http: HttpClient) {
  }

  getData(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts?_limit=2')
      .subscribe((response) => {
        console.log(response);
      });
  }

  deleteData(id: number): void {
    this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  postData(newPost: object): void {
    this.http.post('https://jsonplaceholder.typicode.com/posts', newPost)
      .subscribe((post) => {
        console.log('post', post);
      });
  }

  updateData(id: number, updatedPost: object): void {
    this.http.put(`https://jsonplaceholder.typicode.com/posts/${id}`, updatedPost);
  }
}
