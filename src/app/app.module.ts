import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GhibliService } from './services/ghibli.service';
import { HttpClientModule } from '@angular/common/http';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Brightness } from '@ionic-native/brightness/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GhibliService,
    Flashlight,
    Camera,
    Brightness
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
