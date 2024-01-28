import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-signup-success',
  templateUrl: './signup-success.component.html',
  styleUrl: './signup-success.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupSuccessComponent {}
