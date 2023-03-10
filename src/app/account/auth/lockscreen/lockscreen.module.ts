import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

// Component
import { LockScreenRoutingModule } from "./lockscreen-routing.module";
import { BasicComponent } from "./basic/basic.component";

@NgModule({
  declarations: [BasicComponent],
  imports: [
    CommonModule,
    NgbCarouselModule,
    ReactiveFormsModule,
    FormsModule,
    LockScreenRoutingModule,
  ],
})
export class LockscreenModule {}
