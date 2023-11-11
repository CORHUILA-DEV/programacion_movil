import { Component, OnInit, Output } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { PersonInteractorService } from 'src/app/interactor/person.interactor.service';
import { CameraService } from 'src/app/providers/camera.service';
import { ClipboardService } from 'src/app/providers/clipboard.service';
import { DeviceInfoService } from 'src/app/providers/device-info.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-sistemas',
  templateUrl: './sistemas.page.html',
  styleUrls: ['./sistemas.page.scss'],
})
export class SistemasPage implements OnInit {
  @Output()
  propagar = new EventEmitter();
  program: string = 'SOFTWARE';
  data = [{ title: '', description: '', url: '' }];
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
    this.data = await this.personInteractorService.getData();
    console.log(this.data);
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
