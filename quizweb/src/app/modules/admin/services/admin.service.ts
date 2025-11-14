import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = " /api";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


  createTest(testDto: any): Observable<any>{
    return this.http.post(BASIC_URL + "/test", testDto);

  }
  // ADD THIS NEW METHOD:
getAllTestsByClass(studentClass: string): Observable<any> {
  // We'll use simple string addition to match your createTest style
  return this.http.get(BASIC_URL + "/tests/class/" + studentClass);
}

// ... (rest of your file) ...

  
}
