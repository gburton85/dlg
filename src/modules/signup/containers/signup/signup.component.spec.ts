import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { SignupComponent } from './signup.component';
import { SignupService } from '../../services/signup.service';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  let signupService: SignupService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {
          provide: SignupService,
          useValue: {
            isSignedUp$: new BehaviorSubject(false),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    signupService = TestBed.inject(SignupService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render signup form if isSignedUp$ is false', () => {
    signupService.isSignedUp$.next(false);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-signup-form')).toBeTruthy();
    expect(compiled.querySelector('app-signup-success')).toBeFalsy();
  });
});
