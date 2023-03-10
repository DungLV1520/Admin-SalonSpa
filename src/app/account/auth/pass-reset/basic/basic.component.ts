import { Component, OnInit } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-basic",
  templateUrl: "./basic.component.html",
  styleUrls: ["./basic.component.scss"],
})
export class BasicComponent implements OnInit {
  passresetForm!: UntypedFormGroup;
  submitted = false;
  fieldTextType!: boolean;
  error = "";
  returnUrl!: string;
  year: number = new Date().getFullYear();

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.passresetForm = this.formBuilder.group({
      email: ["", [Validators.required]],
    });
  }

  get f() {
    return this.passresetForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.passresetForm.invalid) {
      return;
    }
  }
}
