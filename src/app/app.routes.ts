import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/signup',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('../modules/signup/containers/signup/signup.component').then(
        (m) => m.SignupComponent
      ),
  },
];
