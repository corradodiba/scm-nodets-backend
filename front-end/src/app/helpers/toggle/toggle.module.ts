import { NgModule } from "@angular/core";

import { MatMenuModule, MatIconModule } from "@angular/material";
import { ToggleComponent } from "./toggle.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ToggleComponent],
  imports: [MatMenuModule, MatIconModule, CommonModule],
  exports: [ToggleComponent]
})
export class ToggleModule {}
