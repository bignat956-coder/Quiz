import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// 1. CHANGED THIS LINE:
//    Now it's a relative path to trigger the proxy.conf.json.
const BASIC_URL = '/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
    
    // 2. CHANGED THIS LINE:
    //    Removed the extra "/api" to prevent a duplicate path.
    //
    //    This now correctly creates the URL: "/api/auth/sign-up"
    //    The proxy will catch this and send it to:
    //    http://localhost:8080/api/auth/sign-up
    
    return this.http.post(BASIC_URL + '/auth/sign-up', data);
  }
}
