import { Injectable } from '@angular/core';
import { PushNotifications } from '@capacitor/push-notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  constructor() { }

  public async register() {
    await PushNotifications.addListener('registration', token => {
      console.info('Registration token: ', token.value);
    });

    await PushNotifications.addListener('registrationError', err => {
      console.error('Registration error: ', err.error);
    });
  }

  public async checkPermission() {
    let permStatus = await PushNotifications.checkPermissions();
    console.log("paso 1: ", permStatus)
    if (permStatus.receive === 'prompt') {
      permStatus = await PushNotifications.requestPermissions();
    }
    console.log("paso 2: ", permStatus)
    if (permStatus.receive !== 'granted') {
      throw new Error('User denied permissions!');
    }

    console.log("PushNotifications.register")
    await PushNotifications.register();

    this.register()
  }
}
