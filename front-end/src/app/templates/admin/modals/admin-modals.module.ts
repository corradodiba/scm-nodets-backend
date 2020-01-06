import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminModalsComponent } from "./admin-modals.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AdminModalsComponent],
  imports: [CommonModule, FormsModule],
  exports: [AdminModalsComponent]
})
export class AdminModalsModule {}
