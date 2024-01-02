import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  register(data: any) {
    return this.http.post<any>(`${environment.server}/account`, data)
  }

  async login(data: any) {
    return this.http.post<any>(`${environment.server}/login`, data)
  }

  getRole() {
    return localStorage.getItem("ADMIN")
  }
}
