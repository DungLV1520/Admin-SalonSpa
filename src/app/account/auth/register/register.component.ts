import { Component, OnInit } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  signupForm!: UntypedFormGroup;
  submitted = false;
  successmsg = false;
  error = "";
  year: number = new Date().getFullYear();

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      name: ["", [Validators.required]],
      password: ["", Validators.required],
    });
  }

  get f() {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.signupForm.invalid) {
      return;
    }
    this.authService
      .register(this.signupForm.value)
      .pipe(first())
      .subscribe(
        () => {
          this.successmsg = true;
          if (this.successmsg) {
            this.router.navigate(["/auth/login"]);
          }
        },
        (error: any) => {
          this.error = error ? error : "";
        }
      );
  }
}
