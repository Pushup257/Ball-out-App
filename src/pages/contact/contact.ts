import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  Profile = "Me";
  gender =0;

  constructor(public navCtrl: NavController) {

  }

}
