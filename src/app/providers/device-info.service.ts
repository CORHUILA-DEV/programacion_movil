import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceInfoService {

  constructor() { }

  async info() {
    const info = await Device.getInfo();
    console.log(info);
  }

  async batteryInfo() {
    const info = await Device.getBatteryInfo();
    console.log(info);
  }
}
