import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

interface students{
  id: Number;
  firstName: string;
  lastname: string;
  marks:Number;
}
@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss']
})
export class MarksComponent implements OnInit {
  students: any = [];


 
  constructor(private httpClient: HttpClient){}

  ngOnInit() {
    this.httpClient.get("assets/students.json").subscribe(data =>{
      console.log(data);
      this.students = data;
    })
  }
 
}
