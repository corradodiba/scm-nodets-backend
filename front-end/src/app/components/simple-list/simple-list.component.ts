import { Component, OnInit, Input } from "@angular/core";
import { ISimpleList } from "src/app/interfaces/new/simple-list.model";

@Component({
  selector: "app-simple-list",
  templateUrl: "./simple-list.component.html",
  styleUrls: ["./simple-list.component.scss"]
})
export class SimpleListComponent implements OnInit {
  @Input() assets: ISimpleList;
  constructor() {}

  ngOnInit() {}
}
