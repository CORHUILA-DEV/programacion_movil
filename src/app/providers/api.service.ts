import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { lastValueFrom } from 'rxjs';
import { MessageToast } from '../constants/messages.constants';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private httpClient: HttpClient,
    private toastController: ToastController
  ) {}

  async getData<T = unknown>(url: string): Promise<T> {
    let source$ = this.httpClient.get<T>(url);
    //const source$ = interval(2000).pipe(take(10));
    try {
      const data = await lastValueFrom(source$);
      this.showAlert(MessageToast.SUCCESS, 'success');
      return data;
    } catch (error) {
      await this.handleError(error);

      throw error;
    }
  }

  private handleError(error: any) {
    this.showAlert(MessageToast.ERROR, 'danger');

    throw new Error(MessageToast.ERROR);
  }

  async showAlert(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
      mode: 'ios',
      color: color,
      cssClass: `toast-icon toast-message`,
      buttons: [
        {
          side: 'end', // Coloca el icono al lado derecho
          icon: 'warning', // Cambia 'heart' por el nombre del icono que desees usar
        },
      ],
    });

    await toast.present();
  }
}
