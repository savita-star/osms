import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

interface students{
  id: Number;
  firstName: string;
  lastname: string;
  attendence: string;
}

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.scss']
})
export class AttendenceComponent implements OnInit {
  students: any = [];

 
  constructor (private httpClient: HttpClient){}

  ngOnInit() {
    this.httpClient.get("assets/students.json").subscribe(data =>{
      console.log(data);
      this.students = data;
    })
  }


}


