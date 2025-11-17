// src/app/modules/user/services/user.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "/api"; // Your base API path

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // This calls your new backend endpoint: GET /api/test/tests/class/{studentClass}
  getTestsByStudentClass(studentClass: string): Observable<any> {
    return this.http.get(BASIC_URL + `/test/tests/class/${studentClass}`);
  }


    getTestQuestionsById(id: number): Observable<any>{
    return this.http.get(BASIC_URL + `/test/${id}`);
  }

}
