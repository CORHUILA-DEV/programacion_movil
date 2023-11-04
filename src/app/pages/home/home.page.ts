import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PersonaEntity } from 'src/app/entities/persona.entity';
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

  validateAge(age: number) {

  }

  goToDetailPage(itemId: number) {
    const dataUser: PersonaEntity = {
      name: 'Carlos',
      lastName: 'Cuellar',
      address: 'Calle 45 #45',
      cc: 344433443
    }

    console.log(dataUser)

    const data: NavigationExtras = {
      queryParams: { id: 123, name: 'Ejemplo' }
    };
    this.router.navigate(['/detail'], data);

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
