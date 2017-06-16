import { Component } from '@angular/core';
import {FirstpagePage} from "../firstpage/firstpage";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
firstpage=FirstpagePage;
  constructor(public navCtrl: NavController) {

  }
  goto()
  {


    this.navCtrl.push(FirstpagePage,{"name":"nihar"});
  }
}
