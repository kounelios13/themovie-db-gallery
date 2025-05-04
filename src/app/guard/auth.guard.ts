import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenSrv = inject(TokenService);
  const router = inject(Router);
  console.warn('authGuard', tokenSrv.getToken());
  if (!tokenSrv.getToken()) {
    router.navigate(['/token']);
    return false;
  }
  return true;
};
