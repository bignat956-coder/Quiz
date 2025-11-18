// src/app/modules/user/services/user.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from '../../auth/services/user-storage.service';

const BASIC_URL = "/api"; // Your base API path

@Injectable({
  providedIn: 'root'
})
export class UserService {
  testId: any;
  testService: any;
  message: any;
  router: any;

  constructor(private http: HttpClient) { }

  // This calls your new backend endpoint: GET /api/test/tests/class/{studentClass}
  getTestsByStudentClass(studentClass: string): Observable<any> {
    return this.http.get(BASIC_URL + `/test/tests/class/${studentClass}`);
  }


    getTestQuestionsById(id: number): Observable<any>{
    return this.http.get(BASIC_URL + `/test/${id}`);
  }

    submitTest(data: any): Observable<any>{
    return this.http.post(BASIC_URL + '/test/submit-test', data);
  }

 
  getMyTestResults(): Observable<any>{
    return this.http.get(BASIC_URL + `/test/test-result/${UserStorageService.getUserId()}`);
  }

}
