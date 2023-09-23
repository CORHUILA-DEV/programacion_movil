import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isChecked = false;
  disableButton = true;
  isShow = true;
  products = [
    'product1',
    'product2',
    'product3',
    'product4',
    'product5',
    'product6',
  ];
  people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
    { name: 'Andres', age: 55 },
    { name: 'Paula', age: 44 },
    { name: 'Laura', age: 77 },
  ];

  constructor(private router: Router, private navCtrl: NavController) {}

  public showMessage() {
    alert('Se presionó el botón');
  }

  public clickCheck() {
    this.isChecked = !this.isChecked;
    this.disableButton = this.isChecked ? false : true;
  }

  public show() {
    this.isShow = !this.isShow;
  }

  public productDetail(product: string, position: number) {
    console.log(
      'Producto ' + product + '  se encuentra en la posición ' + position
    );
  }

  public personDetail(person: any) {
    console.log(person);
  }

  /*   navigate() {vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-sandbox/workbench/workbench.html
      this.router.navigate(['/detail'])
    } */

  goToDetailPage(itemId: number) {
    this.navCtrl.navigateForward('/detail', {
      queryParams: {
        itemId: itemId,
      },
    });

    /*     const params: NavigationExtras = {
          queryParams: { id: 123, name: 'Ejemplo' }
        };
        this.router.navigate(['/detail'], params);
     */
  }
}
