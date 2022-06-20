import { Component } from '@angular/core';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'osms';

  constructor(private studentService: StudentService) {
    this.studentService.getStudents().subscribe((students) => {
      console.log('Get Students From Service', students);
      console.log(
        'Before Add New Student',
        this.studentService.getStudentsData()
      );
      this.studentService.addStudent({
        id: 10,
        firstName: 'Test',
        lastname: 'Test',
        marks: 0,
        attendence: false,
      });
      console.log(
        'After Add New Student',
        this.studentService.getStudentsData()
      );

      console.log(
        'Before Remove Student',
        this.studentService.getStudentsData()
      );
      this.studentService.removeStudent(10);
      console.log(
        'After Remove Student',
        this.studentService.getStudentsData()
      );

      console.log(
        'Get Single Student Record',
        this.studentService.getStudent(5)
      );
    });
  }
}
