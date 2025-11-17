// 1. Import AdminService
import { AdminService } from '../../../admin/services/admin.service';
import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-take-test',
  imports: [SharedModule],
  templateUrl: './take-test.component.html',
  styleUrl: './take-test.component.scss',
})
export class TakeTestComponent {

    questions: any[] = [];
  testId:any;

  // 2. Inject AdminService here (you can still call the variable 'testService')
  constructor(private testService: AdminService,
    private activatedRoute: ActivatedRoute,
    private message: NzMessageService,
    private router: Router
    ){}

       ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params => {
      const idParam = params.get('id'); 
      
      if (idParam) { 
        this.testId = +idParam; 
  
        // 3. This method call will now work correctly
        this.testService.getTestQuestionsById(this.testId).subscribe(res => {
          this.questions = res.questions;
          console.log(this.questions);
        });
      }
    });
  }
}
