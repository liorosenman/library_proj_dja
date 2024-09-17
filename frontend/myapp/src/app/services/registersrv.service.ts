import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistersrvService {
  SERVER = "http://127.0.0.1:8000/customers/register/";
  constructor(private http : HttpClient) { }
 
register(credentials: { username: string; password: string; name:string, city:string, age:number }): Observable<any> {
  return this.http.post<any>(this.SERVER, credentials);
  }
}
