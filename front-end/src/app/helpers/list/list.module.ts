import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material";

import { ListComponent } from "./list.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ListComponent],
  imports: [MatCardModule, CommonModule],
  exports: [ListComponent]
})
export class ListModule {}
