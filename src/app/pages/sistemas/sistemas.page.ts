import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { DataPhotos, DetailPhotos } from 'src/app/entities/data-photos.entity';
import { PersonInteractorService } from 'src/app/interactor/person.interactor.service';
import { CameraService } from 'src/app/providers/camera.service';
import { ClipboardService } from 'src/app/providers/clipboard.service';
import { DeviceInfoService } from 'src/app/providers/device-info.service';

@Component({
  selector: 'app-sistemas',
  templateUrl: './sistemas.page.html',
  styleUrls: ['./sistemas.page.scss'],
})
export class SistemasPage implements OnInit {
  program: string = 'SOFTWARE';
  data: DetailPhotos[] = [];
  pathImage = 'assets/img/android.png';
  file = '';
  imageElement = '';

  constructor(
    private loadingCtrl: LoadingController,
    private clipboardService: ClipboardService,
    private deviceInfoService: DeviceInfoService,
    private cameraService: CameraService,
    private personInteractorService: PersonInteractorService
  ) {}

  ngOnInit() {
    /*     this.showDeviceInfo();
    this.showBatteryInfo(); */
  }

  async getData() {
    await this.showLoading();
    try {
      const data = await this.personInteractorService.getData<DataPhotos>();
      console.log('R4spuesta: ');
      console.log(data);
      this.data = data.photos;
    } catch (error: any) {
      console.log(`Pailas:::`);
      console.log(error.message);
      this.closeLoading();
    }

    this.closeLoading();
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'circles',
    });

    loading.present();
  }

  closeLoading() {
    this.loadingCtrl.dismiss();
  }

  showInfo(indice: number) {
    this.clipboardService.copy(
      `La imagen seleccionada fue la No. ${indice.toString()}`
    );
  }

  showDeviceInfo() {
    this.deviceInfoService.info();
  }

  showBatteryInfo() {
    this.deviceInfoService.batteryInfo();
  }

  async openCamera() {
    this.imageElement = await this.cameraService.takePicture();
  }
}
