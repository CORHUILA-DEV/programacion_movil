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
  email = '';
  password = '';

  constructor(private router: Router, private navCtrl: NavController) { }

  public showMessage() {
    alert('Se presionó el botón');
  }

  public clickCheck() {
    this.isChecked = !this.isChecked;
    this.disableButton = this.isChecked ? false : true;
  }

  /*   navigate() {
      this.router.navigate(['/detail'])
    } */

  validateAge(age: number) {

  }

  goToDetailPage(itemId: number) {
    /*    this.navCtrl.navigateForward('/detail', {
      queryParams: {
        itemId: itemId
      }
    });

 */
    /*     const params: NavigationExtras = {
          queryParams: { id: 123, name: 'Ejemplo' }
        };
        this.router.navigate(['/detail'], params);
     */
  }

  login() {
    // Lógica de autenticación aquí
    // Por ejemplo, verifica el correo y la contraseña en una base de datos
    // Si la autenticación es exitosa, redirige al usuario a la página de inicio
    if (
      this.email === 'usuario@example.com' &&
      this.password === 'contraseña'
    ) {
      this.router.navigate(['/home']);
    } else {
      // Manejo de error de autenticación
    }
  }
}
