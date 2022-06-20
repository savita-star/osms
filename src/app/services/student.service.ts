import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IStudent } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private _students: BehaviorSubject<Array<IStudent> | any> =
    new BehaviorSubject(null);
  students$: Observable<IStudent[]> = this._students.asObservable();

  constructor(private httpClient: HttpClient) {}

  getStudents(): Observable<IStudent[]> {
    return this.httpClient.get<IStudent[]>('/assets/students.json').pipe(
      tap((students) => {
        this._students.next(students);
      }),
      map((students) => students ?? [])
    );
  }

  getStudentsData(): IStudent[] {
    return this._students.getValue() ?? [];
  }

  clearStudentData(): void {
    this._students.next([]);
  }

  getStudent(studentId: number): IStudent {
    return this._students
      .getValue()
      ?.find((student: IStudent) => student.id === studentId);
  }

  addStudent(student: IStudent) {
    this._students.next([...(this._students.getValue() ?? []), student]);
  }

  removeStudent(studentId: number) {
    const filteredList = this._students
      .getValue()
      .filter((item: IStudent) => item.id !== studentId);
    this._students.next([]);
    this._students.next(filteredList);
  }
}
