import { Component, Input, Output, EventEmitter } from "@angular/core";

import { IList } from "../../interfaces/list.model";
import { IListCardModel } from "../../interfaces/list-card.model";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent {
  @Input() items: IList[] = [];
  @Input() listCardsTemplate: IListCardModel;
  @Output() showItem = new EventEmitter<{ _id: string; action: string }>();

  onSelectedItem(id: string, action: string) {
    this.showItem.emit({ _id: id, action });
  }
}
