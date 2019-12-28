import { Component, OnInit } from '@angular/core';
import { IList } from '../interfaces/list.model';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  course = [];

  constructor(private coursesService: CoursesService, ) { }

  async ngOnInit() {
    this.course = await this.coursesService.getCourses();
  }

}
