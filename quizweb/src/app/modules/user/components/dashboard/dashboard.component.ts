// src/app/modules/user/components/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UserService } from '../../services/test.service'; // Import your new UserService
import { UserStorageService } from '../../../auth/services/user-storage.service'; // To get the user's class

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  tests: any[] = []; // This will hold our list of tests

  constructor(
    private notification: NzNotificationService,
    private userService: UserService // Inject the new UserService
  ) { }

  ngOnInit() {
    this.getAllTestsForClass();
  }

  getAllTestsForClass() {
    // 1. Get the current user's info from storage
    const currentUser = UserStorageService.getUser();
    
    // 2. Check if they have a class
    if (currentUser && currentUser.studentClass) {
      // 3. Call the service to get tests for that class
      this.userService.getTestsByStudentClass(currentUser.studentClass).subscribe(
        (res) => {
          this.tests = res; // Save the list of tests
        },
        (error) => {
          this.notification.error(
            'ERROR',
            'Failed to load tests. Please try again.',
            { nzDuration: 5000 }
          );
        }
      );
    } else {
      this.notification.error(
        'ERROR',
        'Could not determine your class. Please log in again.',
        { nzDuration: 5000 }
      );
    }
  }

  // Helper function to format the time
  getFormattedTime(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes} minutes ${seconds} seconds`;
  }
}
