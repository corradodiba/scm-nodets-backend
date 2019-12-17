import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatSnackBar } from '@angular/material';
import { SubjectsService } from './subjects.service';
export interface Subjects {
  name: String;
  hours?: String;
}
@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  subjects: Subjects[] = [];

  constructor(private _snackBar: MatSnackBar, private subjectsService: SubjectsService) {
  }

  async ngOnInit() {
    this.subjects = await this.subjectsService.getSubjects();
  }
  public isHidden = true;
  show() {
    if (this.isHidden) this.isHidden = false;
    else this.isHidden = true;
  }
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];


  // Remove the subject
  remove(subject: Subjects): void {
    let ref = this._snackBar.open(`You eliminated ${subject}`, "Undo", {
      duration: 2000,
    });
    if (ref.afterDismissed) return;
    const index = this.subjects.indexOf(subject);
    if (index >= 0) {
      this.subjects.splice(index, 1);
    }
  }
}
