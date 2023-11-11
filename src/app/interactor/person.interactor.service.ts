import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { ApiEnvironment } from '../constants/api-environment.constants';
import { PersonRequest } from '../entities/person.request';
import { ApiService } from '../providers/api.service';

@Injectable({
  providedIn: 'root',
})
export class PersonInteractorService {
  private readonly API = ApiEnvironment;
  constructor(
    private apiService: ApiService,
    private toastController: ToastController
  ) {}

  async getData(): Promise<any> {
    const params: PersonRequest = {
      url: this.API.URL,
      limit: this.API.LIMIT,
    };

    this.apiService.getData(params).pipe(
      tap((response) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => 'Something went wrong; please try again later.');
  }

  async showAlert(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }
}
