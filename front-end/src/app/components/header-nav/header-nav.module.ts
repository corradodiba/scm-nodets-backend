import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderNavComponent } from "./header-nav.component";

@NgModule({
  declarations: [HeaderNavComponent],
  imports: [CommonModule],
  exports: [HeaderNavComponent]
})
export class HeaderNavModule {}
