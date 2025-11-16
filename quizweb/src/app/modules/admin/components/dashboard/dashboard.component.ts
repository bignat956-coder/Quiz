import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AdminService } from '../../services/admin.service';


@Component({
  selector: 'app-dashboard',
  standalone: true, // <-- ADD THIS
  imports: [SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})

export class DashboardComponent {

    tests: any= [];

  constructor(private notification: NzNotificationService,
    private testService: AdminService
  ) { }

  ngOnInit() {
    this.getAllTests();
  }

  getAllTests() {
    this.testService.getAllTest().subscribe(res => {
 this.tests = res;
    }, error => {
      this.notification
        .error(
          'ERROR',
          'Something Went Wrong, Try Again',
          { nzDuration: 5000 }
        )
    })
  }

  getFormattedTime(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes} minutes ${seconds} seconds`;
  }

  // ADD THIS NEW FUNCTION
    deleteTest(testId: number) {
    this.testService.deleteTest(testId).subscribe(res => {
      this.notification.success(
        'SUCCESS',
        'Test deleted successfully!',
        { nzDuration: 5000 }
      );
      this.getAllTests();
      
    }, error => {
      
      // THIS IS THE NEW, SMARTER ERROR HANDLER
      let errorMessage = "Something went wrong.";
      if (error.error) {
        // If the error has a body, stringify it
        errorMessage = JSON.stringify(error.error);
      } else if (error.message) {
        errorMessage = error.message;
      }

      this.notification.error(
        'ERROR',
        'Failed: ' + errorMessage, // This will show the REAL backend error
        { nzDuration: 5000 }
      );
    });
  }


  
  }
