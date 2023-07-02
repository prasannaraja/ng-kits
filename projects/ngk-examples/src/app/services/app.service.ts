import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiUrl = 'https://api.example.com';

  constructor(private http: HttpClient) {}

  get field1Items$(): Observable<any> {
    return of('item1', 'item2', 'item3');
  }

  // Example method for making an HTTP GET request
  getData(): Observable<any> {
    const url = `${this.apiUrl}/data`;
    return this.http.get<any>(url);
  }

  // Example method for making an HTTP POST request
  postData(data: any): Observable<any> {
    const url = `${this.apiUrl}/data`;
    return this.http.post<any>(url, data);
  }

  // Example method for making an HTTP PUT request
  updateData(id: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/data/${id}`;
    return this.http.put<any>(url, data);
  }

  // Example method for making an HTTP DELETE request
  deleteData(id: string): Observable<any> {
    const url = `${this.apiUrl}/data/${id}`;
    return this.http.delete<any>(url);
  }
}
