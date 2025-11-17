import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-view-test-results',
  imports: [SharedModule],
  templateUrl: './view-test-results.component.html',
  styleUrl: './view-test-results.component.scss',
})
export class ViewTestResultsComponent {

  resultsData: any;
  errorMessage: string | null = null; // Add this property

  constructor(private testService: AdminService) {

  }

  ngOnInit() {
    this.getTestResults();
  }

  getTestResults() {
    this.testService.getTestResults().subscribe(
      (res: any) => { // Added (res: any)
        this.resultsData = res;
        console.log(this.resultsData);
        this.errorMessage = null; // Clear error on success
      },
      (error: any) => { // Add this error handling block
        console.error(error); // Log the full error
        // Display a user-friendly message or the actual error
        this.errorMessage = `Error loading results. Status: ${error.status}. Message: ${error.message || 'Unknown server error.'}`;
        
        // Try to get the specific error message from the backend
        if (error.error && typeof error.error === 'string') {
            this.errorMessage = `Error: ${error.error}`;
        } else if (error.message) {
            this.errorMessage = `Error: ${error.message}`;
        }
      }
    );
  }
} 