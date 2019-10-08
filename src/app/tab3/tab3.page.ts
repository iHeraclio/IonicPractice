import { Component, ViewChild, Renderer } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Brightness } from '@ionic-native/brightness/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  isOn: boolean = false;
  public image: any;
  base64Image: any;
  canvasElement: any;
  elemento: number = 0.8;
  brightnessValue = 0.8;
  options: CameraOptions = {
    quality: 100,
    destinationType: this._camera.DestinationType.FILE_URI,
    encodingType: this._camera.EncodingType.JPEG,
    mediaType: this._camera.MediaType.PICTURE
  }

  constructor(
    private _camera: Camera,
    private _renderer: Renderer, 
    public navCtrl: NavController,
    public flashlight: Flashlight
  ) {
    this.takePhoto()
  }
  takePhoto() {
    this.image = [];
    var image = new Image();

    const options: CameraOptions = {
      quality: 50, // picture quality

      destinationType: this._camera.DestinationType.DATA_URL,
      encodingType: this._camera.EncodingType.JPEG,
      mediaType: this._camera.MediaType.PICTURE
    }
    this._camera.getPicture(options).then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
      image.src = this.base64Image;
      this.image.push(this.base64Image);
      this.image.reverse();
      // ctx.drawImage(image, 0, 0, image.width,image.height,     // source rectangle
      //   0, 0,  this.canvasElement.width, this.canvasElement.height);

    }, (err) => {
      console.log(err);
    });
  }

  async isAvailable():Promise<boolean>{
    try{
      return await this.flashlight.available();
    }catch(e){
      console.log(e);
    }
  }

  async toggleFlash():Promise<void>{
    try{
      let available = await this.isAvailable();
      if(available){
        await this.flashlight.toggle();
        this.isOn = !this.isOn;
      }else{
        alert("Flash not available...");
      }
    }catch(e){
      console.log(e);
    }
  }

}
