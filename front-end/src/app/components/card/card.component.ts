import { Component, OnInit, Input } from "@angular/core";
import { ICard } from "src/app/interfaces/card.model";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() card: ICard;
  constructor() {}

  ngOnInit() {}

  getBackgroundClass() {
    let CSSClass = "card border-0 ";
    CSSClass = this.card
      ? CSSClass.concat(this.card.background)
      : CSSClass.concat("bg-gradient-default");
    return CSSClass;
  }
}
