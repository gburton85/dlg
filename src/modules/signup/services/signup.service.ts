import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';

import { SignupForm } from '../models/signup.model';

@Injectable()
export class SignupService {
  isSignedUp$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) {}

  signup(form: SignupForm): void {
    this.httpClient
      .post<SignupForm>(
        'https://65b5010041db5efd28672bef.mockapi.io/api/signup/form',
        form
      )
      .pipe(take(1))
      .subscribe(() => {
        this.isSignedUp$.next(true);
      });
  }
}
