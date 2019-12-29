import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IToggleItem } from "src/app/interfaces/toggle-item.model";

@Component({
  selector: "app-toggle",
  templateUrl: "./toggle.component.html",
  styleUrls: ["./toggle.component.scss"]
})
export class ToggleComponent implements OnInit {
  @Input() item: IToggleItem;
  @Output() logout = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.logout.emit(true);
  }
}
