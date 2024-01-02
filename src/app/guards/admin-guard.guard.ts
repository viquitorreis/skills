import { CanActivateFn } from '@angular/router';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  const userRole = localStorage.getItem("ADMIN")
  if (userRole === 'true') {
    return true;
  }
  return false
};
