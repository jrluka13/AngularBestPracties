import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  body: string;
  id: number;
  userId: number;
  title: string;
}

@Injectable()
export class DataUserService {
  constructor(private http: HttpClient) {
  }

  getData(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=5');
  }

  deleteData(id: number): void {
    this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  postData(newPost: object): void {
    this.http.post('https://jsonplaceholder.typicode.com/posts', newPost)
      .subscribe((post) => {
      });
  }

  updateData(id: number, updatedPost: object): void {
    this.http.put(`https://jsonplaceholder.typicode.com/posts/${id}`, updatedPost);
  }
}
