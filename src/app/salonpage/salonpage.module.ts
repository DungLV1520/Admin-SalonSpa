import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExtrapagesRoutingModule } from "./salonpage-routing.module";
import { MaintenanceComponent } from "./maintenance/maintenance.component";
import { ComingSoonComponent } from "./coming-soon/coming-soon.component";

@NgModule({
  declarations: [MaintenanceComponent, ComingSoonComponent],
  imports: [CommonModule, ExtrapagesRoutingModule],
})
export class SalonpageModule {}
