import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {DatafetchProvider} from "../../providers/datafetch/datafetch";
import {Http, Request, RequestOptions, Headers} from "@angular/http";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

update:any;
  username: string;
  password: string;
  addcomment: String;
  comment: any = ["xyz", "qrl", "abc"];

  student_name: string;
  student_batch: string;
  student_year: string;
students:any;
students_all:any;
  constructor(public navCtrl: NavController, public alertctrl: AlertController,public datafetch:DatafetchProvider,public http:Http) {
this.getdata()
  }

    getdata(){
    this.datafetch.load().then((data)=>
      {
        this.students= data;
        this.students_all=this.students.students;
console.log(data)
      });
    }

  onclick() {

    if (this.username == "nihar" && this.password == "12345") {
      this.navCtrl.push(LoginPage, {"username": this.username});
    }

  }
  setdata(){
    this.update={
      name:this.username,
      password:this.password,
    }
    console.log("data sending");
    var headers = new Headers();

    headers.append('content-type','application/json;charset=UTF-8');
    headers.append('Access- Control-Allow-Origin','*');
    let options = new RequestOptions({headers:headers});
    this.http.post('',JSON.stringify(this.update),options)
      .map(res=>res.json()).subscribe(data=> {
      console.log(data)
    },err=>{
        console.log("ERROR!:",err.json());
  });
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
