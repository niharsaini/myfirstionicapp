import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {DatafetchProvider} from "../../providers/datafetch/datafetch";
import {Http, RequestOptions, Headers} from "@angular/http";
import { Geolocation } from "@ionic-native/geolocation";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

update:any;
  username: string;
  password: string;
  pass : string;
  addcomment: String;
  comment: any = ["xyz", "qrl", "abc"];
lat:any;
long:any;
  student_name: string;
  student_batch: string;
  student_year: string;
students:any;
students_all:any;
  constructor(public navCtrl: NavController, public alertctrl: AlertController,public datafetch:DatafetchProvider,public http:Http,
              private geolocation: Geolocation)

  {
  }
geoloc(){
  this.geolocation.getCurrentPosition().then((resp) => {
  this.lat=resp.coords.latitude
  this.long=resp.coords.longitude
}).catch((error) => {
  console.log('Error getting location', error);
});

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
      password:this.password
    }
    console.log("data sending");
    var headers = new Headers();

    headers.append('content-type','application/json;charset=UTF-8');
    headers.append('Access-Control-Allow-Origin','*');
    let options = new RequestOptions({headers:headers});
    this.http.post("https://veh.herokuapp.com/insert",JSON.stringify(this.update),options)
      .map(res=>res.json()).subscribe(data=> {
      console.log(data)
    },err=>{
      console.log("ERROR!:");
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
