import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AddEditModalComponent } from "./add-edit-modal.component";

@NgModule({
  declarations: [AddEditModalComponent],
  imports: [CommonModule, FormsModule],
  exports: [AddEditModalComponent]
})
export class AddEditModalModule {}
