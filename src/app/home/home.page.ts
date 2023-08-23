import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isChecked = false
  disableButton = true

  constructor(private router: Router, private navCtrl: NavController) { }

  public showMessage() {
    alert("Se presionó el botón")
  }

  public clickCheck() {
    this.isChecked = !this.isChecked
    this.disableButton = this.isChecked ? false : true
  }

  /*   navigate() {
      this.router.navigate(['/detail'])
    } */


  goToDetailPage(itemId: number) {
    this.navCtrl.navigateForward('/detail', {
      queryParams: {
        itemId: itemId
      }
    });


    /*     const params: NavigationExtras = {
          queryParams: { id: 123, name: 'Ejemplo' }
        };
        this.router.navigate(['/detail'], params);
     */

  }

}
