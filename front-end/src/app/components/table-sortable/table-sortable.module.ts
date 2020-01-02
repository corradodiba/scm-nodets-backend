import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableSortableComponent } from "./table-sortable.component";

@NgModule({
  declarations: [TableSortableComponent],
  imports: [CommonModule],
  exports: [TableSortableComponent]
})
export class TableSortableModule {}
