// 1. Import AdminService
import { AdminService } from '../../../admin/services/admin.service';
import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormsModule } from '@angular/forms';
import { UserStorageService } from '../../../auth/services/user-storage.service';
import { UserService } from '../../services/test.service';
import { interval } from 'rxjs';
// 2. Removed the incorrect UserService import

@Component({
  selector: 'app-take-test',
  imports: [SharedModule, FormsModule],
  templateUrl: './take-test.component.html',
  styleUrl: './take-test.component.scss',
})
export class TakeTestComponent {

  questions: any[] = [];
  testId: any;

  // 3. Kept only ONE declaration of selectedAnswers
  selectedAnswers: { [key: string]: string } = {};
  timeRemaining: number = 0;
  interval: any;

  // 4. Injected AdminService, but kept the variable name 'testService'
  //    so the rest of your code works.
  constructor(private testService: UserService,
    private activatedRoute: ActivatedRoute,
    private message: NzMessageService,
    private router: Router
  ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params => {
      const idParam = params.get('id');

      if (idParam) {
        this.testId = +idParam;

        this.testService.getTestQuestionsById(this.testId).subscribe((res: any) => { // Added type
          this.questions = res.questions;
          console.log(this.questions);

          this.timeRemaining = res.testDTO.time  || 0;
          this.startTimer();
        });
      }
    });
  }
  startTimer(){
    this.interval = setInterval(()=>{
      if(this.timeRemaining > 0){
        this.timeRemaining--;
      } else {
        clearInterval(this.interval);
        this.submitAnswers();
      }
    }, 1000)
  }


    getFormattedTime(): string {
    const minutes = Math.floor(this.timeRemaining / 60);
    const seconds = this.timeRemaining % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // 05:02
  }


  onAnswerChange(questionId: number, selectedOption: string) {
    // A number key is automatically coerced to a string in JS objects
    this.selectedAnswers[questionId] = selectedOption;
    console.log(this.selectedAnswers);
  }

  // 5. This is the 'submitAnswers' function
  submitAnswers() {
    const answerList = Object.keys(this.selectedAnswers).map(questionId => { // questionId is a string
      return {
        questionId: +questionId, // Convert the string key back to a number
        selectedOption: this.selectedAnswers[questionId] 
      }
    })

    const data = {
      testId: this.testId,
      userId: UserStorageService.getUserId(),
      responses: answerList
    }

    // 6. Added 'any' type to res and error
    this.testService.submitTest(data).subscribe((res: any) => {
      this.message
        .success(
          'Test Submitted Successfully',
          { nzDuration: 5000 }
        );
      this.router.navigateByUrl("/user/view-test-results");
    }, (error: any) => {
      this.message
        .error(
          `${error.error}`,
          { nzDuration: 5000 }
        )
    })
  }
  
}