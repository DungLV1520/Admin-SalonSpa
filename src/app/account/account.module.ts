import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgbToastModule } from "@ng-bootstrap/ng-bootstrap";
import { defineElement } from "lord-icon-element";
import { ToastsContainer } from "./auth/login/toasts-container.component";
import { AccountRoutingModule } from "./account-routing.module";
import { RegisterComponent } from "./auth/register/register.component";
import { LoginComponent } from "./auth/login/login.component";
import lottie from "lottie-web";

@NgModule({
  declarations: [RegisterComponent, LoginComponent, ToastsContainer],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbToastModule,
    AccountRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AccountModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
