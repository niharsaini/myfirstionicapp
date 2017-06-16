import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {LoginPage} from "../login/login";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string;
  password: string;
  addcomment: String;
  comment: any = ["xyz", "qrl", "abc"];
  students: any = [{"name": "nihar", "batch": "2014", "year": "3rd"}, {
    "name": "sandy",
    "batch": "2013",
    "year": "4th"
  }, {"name": "shubu", "batch": "2014", "year": "2nd"}];
  student_name: string;
  student_batch: string;
  student_year: string;


  constructor(public navCtrl: NavController, public alertctrl: AlertController) {

  }

  onclick() {

    if (this.username == "nihar" && this.password == "12345") {
      this.navCtrl.push(LoginPage, {"username": this.username});
    }

  }

  addcomments() {
    this.comment.push(this.addcomment);
    this.addcomment = "";
  }

  deleteitem(i) {
    this.comment.splice(i, 1)
  }

  addstudent() {
    this.students.push({"name":this.student_name, "batch":this.student_batch,"year":this.student_year});
this.student_name="";
    this.student_batch="";
    this.student_year="";
  }
}
