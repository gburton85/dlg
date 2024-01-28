import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { SignupService } from '../../services/signup.service';

@Component({
  standalone: true,
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, ReactiveFormsModule],
})
export class SignupFormComponent {
  signupForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  isSubmitting: boolean;

  constructor(private readonly signupService: SignupService) {}

  onSubmit(): void {
    this.isSubmitting = true;
    this.signupService.signup(this.signupForm.getRawValue());
  }
}
