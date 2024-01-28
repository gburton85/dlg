import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { SignupService } from '../../services/signup.service';
import { SignupSuccessComponent } from '../../components/signup-success/signup-success.component';
import { SignupFormComponent } from '../../components/signup-form/signup-form.component';

@Component({
  standalone: true,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SignupService],
  imports: [
    CommonModule,
    SignupSuccessComponent,
    SignupFormComponent,
    HttpClientModule,
  ],
})
export class SignupComponent implements OnDestroy {
  private unsubscribe$ = new Subject();

  isSignedUp$ = this.signupService.isSignedUp$.pipe(
    takeUntil(this.unsubscribe$)
  );

  constructor(private readonly signupService: SignupService) {}

  ngOnDestroy(): void {
    this.unsubscribe$.complete();
  }
}
