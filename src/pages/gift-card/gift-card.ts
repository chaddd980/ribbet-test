import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the GiftCardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gift-card',
  templateUrl: 'gift-card.html',
})
export class GiftCardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  active : string = "giftCard";

  ionViewDidLoad() {
    console.log('ionViewDidLoad GiftCardPage');
  }

}
