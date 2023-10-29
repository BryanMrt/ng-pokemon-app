import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.isLoggedInFn()) {
    router.navigateByUrl("/login");
    console.log("guard appelé");
    return false;
  }
  return true;
};
