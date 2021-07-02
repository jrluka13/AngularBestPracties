import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from 'src/layouts/user/enums/API_ENDPOINTS';

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
    return this.http.get<Post[]>(API_ENDPOINTS.getData);
  }

  deleteData(id: number): void {
    this.http.delete(API_ENDPOINTS.deleteData + id);
  }

  postData(newPost: object): void {
    this.http.post(API_ENDPOINTS.postData, newPost);
  }

  updateData(id: number, updatedPost: object): void {
    this.http.put(API_ENDPOINTS.updateData + id, updatedPost);
  }
}
