import { Component, Input, Output, EventEmitter } from "@angular/core";

import { IList } from "../../interfaces/list.model";
import { IListCardModel } from "../../interfaces/list-card.model";
import { ActionButton } from "src/app/interfaces/action-button.model";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent {
  @Input() items: IList[] = [];
  @Input() listCardsTemplate: IListCardModel;
  @Output() actionButton = new EventEmitter<ActionButton>();

  onActionButton(action: ActionButton) {
    this.actionButton.emit(action);
  }

  getButtonColor(color: string) {
    return `btn btn-sm m-1 btn-outline-${color}`;
  }
}
