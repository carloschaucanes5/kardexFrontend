import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn } from '@angular/router';
import { AuthService } from './auth.service';
import { map,tap } from 'rxjs/operators';
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  //return authService.loginIn();
  return authService.revalidateToken().pipe(
    tap(res=>!res?authService.closeSession():false)
  );
 
};
