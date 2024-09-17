import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginsrvService {
SERVER = "http://127.0.0.1:8000/login/"
constructor(private http : HttpClient) { }

login(credentials: { username: string; password: string }): Observable<any> {
  return this.http.post<any>(this.SERVER, credentials);
  }
}


