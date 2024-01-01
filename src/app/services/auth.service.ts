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

  async register(data: any) {
    this.http.post<any>(`${environment.server}/account`, data).subscribe((user) => {
      console.log("Novo user:", user)
      return user
    })
  }

}
