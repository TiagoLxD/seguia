import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { AuthGuard } from "./auth.guard";
import { AuthService } from "src/app/components/core/services/auth.service";

describe("AuthGuard", () => {
  let guard: AuthGuard;
  let authService: AuthService;
  let router: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuard, AuthService],
    });
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    spyOn(router, "navigate");
  });

  it("should return true if user is not logged in", () => {
    spyOn(authService, "isLoggedIn").and.returnValue(false);
    const canActivate = guard.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);
    expect(canActivate).toBeTrue();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it("should return false and navigate to /dashboard if user is logged in", () => {
    spyOn(authService, "isLoggedIn").and.returnValue(true);
    const canActivate = guard.canActivate({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);
    expect(canActivate).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(["/dashboard"]);
  });
});
