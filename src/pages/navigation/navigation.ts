import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OffersPage } from "../offers/offers";
import { GiftCardPage } from "../gift-card/gift-card";
import { DiscoverPage } from "../discover/discover";
import { HomePage } from "../home/home";

@Component({
  selector: 'navigation',
  templateUrl: 'navigation.html'
})
export class NavigationComponent {

  constructor(public navCtrl: NavController) {

  }
  activeHome
  activeOffer
  activeGiftCard
  activeDiscover

  onLoadHome(event){
    // this.activeHome = "active"
    this.navCtrl.push(HomePage)
  }
  onLoadOffers(event){
    this.navCtrl.push(OffersPage)
  }
  onLoadGiftCard(){
    this.navCtrl.push(GiftCardPage)
  }
  onLoadDiscover(){
    this.navCtrl.push(DiscoverPage)
  }

  @Input('active') active: string;

  ngOnInit(){
    console.log(this.active)
    if(this.active === "home") {
      this.activeHome = "active";
      this.activeOffer = "inactive";
      this.activeGiftCard = "inactive";
      this.activeDiscover = "inactive";
    } else if(this.active === "offers"){
      this.activeHome = "inactive";
      this.activeOffer = "active";
      this.activeGiftCard = "inactive";
      this.activeDiscover = "inactive";
    } else if(this.active === "giftCard"){
      this.activeHome = "inactive";
      this.activeOffer = "inactive";
      this.activeGiftCard = "active";
      this.activeDiscover = "inactive";
    } else {
      this.activeHome = "inactive";
      this.activeOffer = "inactive";
      this.activeGiftCard = "inactive";
      this.activeDiscover = "active";
    }
  }

}
