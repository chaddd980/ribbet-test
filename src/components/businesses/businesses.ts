import { Component } from '@angular/core';
import { MyDataService } from "../../app/my-data.service";


/**
 * Generated class for the BusinessesComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'businesses',
  templateUrl: 'businesses.html'
})
export class BusinessesComponent {

  cards = [];
  types = ["","Cafe", "Retail", "Restaurant", "Restaurant"]

  constructor(private newService: MyDataService) {
    console.log('Hello BusinessesComponent Component');
  }

  ngOnInit(){
    this.newService.fetchData().subscribe(responseData => this.cards = responseData.cards);
  }

}
