import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IList } from "src/app/interfaces/list.model";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent {
  @Input() items: IList[] = [];
  @Output() showItem = new EventEmitter<any>();

  selectItem(id: string) {
    this.showItem.emit(id);
  }
}
