import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { OffersPage } from '../pages/offers/offers';
import { GiftCardPage } from '../pages/gift-card/gift-card';
import { DiscoverPage } from '../pages/discover/discover';
import { NavigationComponent } from '../pages/navigation/navigation';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BusinessesComponent } from '../components/businesses/businesses';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OffersPage,
    GiftCardPage,
    DiscoverPage,
    NavigationComponent,
    BusinessesComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OffersPage,
    GiftCardPage,
    DiscoverPage,
    NavigationComponent,
    BusinessesComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
