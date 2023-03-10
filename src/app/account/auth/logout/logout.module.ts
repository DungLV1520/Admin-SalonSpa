import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { defineElement } from "lord-icon-element";
import { LogoutRoutingModule } from "./logout-routing.module";
import { BasicComponent } from "./basic/basic.component";
import lottie from "lottie-web";

@NgModule({
  declarations: [BasicComponent],
  imports: [
    CommonModule,
    NgbCarouselModule,
    ReactiveFormsModule,
    FormsModule,
    LogoutRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LogoutModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
