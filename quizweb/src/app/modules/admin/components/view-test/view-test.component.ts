import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-view-test',
  imports: [SharedModule],
  templateUrl: './view-test.component.html',
  styleUrl: './view-test.component.scss',
})
export class ViewTestComponent {

    questions: any[] = [];
  testId: any;
tests: any;

  constructor(private adminService: AdminService,
    private activatedRoute: ActivatedRoute
  ) { }

   ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params => {
      const idParam = params.get('id'); // Get the parameter
      
      if (idParam) { // Check if it's not null
        this.testId = +idParam; // Convert it to a number
  
        // Only get questions if the id exists
        this.adminService.getTestQuestionsById(this.testId).subscribe(res => {
          this.questions = res.questions;
          console.log(this.questions);
        });
      }
    });
  }

    getFormattedTime(time: any) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes} minutes ${seconds} seconds`;
  }

}
