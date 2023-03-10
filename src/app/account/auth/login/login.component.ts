import { Component, OnInit } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { first } from "rxjs/operators";
import { AuthService } from "src/app/core/services/auth.service";
import { ToastService } from "src/app/shared/toast-service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm!: UntypedFormGroup;
  submitted = false;
  fieldTextType!: boolean;
  error = "";
  returnUrl!: string;
  toast!: false;
  year: number = new Date().getFullYear();

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    public toastService: ToastService
  ) {
    if (this.authService.currentUserValue) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem("currentUser")) {
      this.router.navigate(["/"]);
    }

    this.loginForm = this.formBuilder.group({
      email: ["admin@themesbrand.com", [Validators.required, Validators.email]],
      password: ["123456", [Validators.required]],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService
      .login(this.f["email"].value, this.f["password"].value)
      .pipe(first())
      .subscribe(
        (data: any) => {
          localStorage.setItem("toast", "true");
          localStorage.setItem("currentUser", JSON.stringify(data));
          localStorage.setItem("token", data.jwt);
          this.router.navigate(["/"]);
        },
        (error) => {
          this.error = error ? error : "";
          this.toastService.show(error, {
            classname: "bg-danger text-white",
            delay: 1500,
          });
        }
      );
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
