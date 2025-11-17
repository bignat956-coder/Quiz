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

  getAllTest(): Observable<any>{
    return this.http.get(BASIC_URL + '/test');
  }



    deleteTest(testId: number): Observable<any> {
    // Add { responseType: 'text' } to tell Angular to expect text
    return this.http.delete(BASIC_URL + '/test/' + testId, { responseType: 'text' });
  }


    addQuestionInTest(questionDto: any): Observable<any>{
    return this.http.post(BASIC_URL + '/test/question', questionDto);
  }

    getTestQuestionsById(id: number): Observable<any>{
    return this.http.get(BASIC_URL + `/test/${id}`);


  }


    getTestResults(): Observable<any>{
    return this.http.get(BASIC_URL + '/test/test-result');
  }

}
