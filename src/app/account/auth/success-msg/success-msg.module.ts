import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SuccessMsgRoutingModule } from "./success-msg-routing.module";
import { BasicComponent } from "./basic/basic.component";

@NgModule({
  declarations: [BasicComponent],
  imports: [
    CommonModule,
    NgbCarouselModule,
    ReactiveFormsModule,
    FormsModule,
    SuccessMsgRoutingModule,
  ],
})
export class SuccessMsgModule {}
