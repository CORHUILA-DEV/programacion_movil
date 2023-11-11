import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NotificationsService } from './providers/notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private notificationsService: NotificationsService,
    private platform: Platform
  ) {
    this.init();
    //
  }
  private init() {
    this.platform.ready().then(() => {
      if (
        (this.platform.is('android') || this.platform.is('ios')) &&
        !this.platform.is('mobileweb')
      ) {
        this.notificationsService.checkPermission();
      }
      /*       if (this.platform.is('ios')) {
        console.log('running on iOS device!');
      }
      if (this.platform.is('mobileweb')) {
        console.log('running in a browser on mobile!');
      } */
    });
  }

  ngOnInit(): void {}
}
