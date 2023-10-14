import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/providers/api.service';

@Component({
  selector: 'app-sistemas',
  templateUrl: './sistemas.page.html',
  styleUrls: ['./sistemas.page.scss'],
})
export class SistemasPage implements OnInit {
  program: string = 'SOFTWARE'

  constructor(private apiService: ApiService,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async getData() {
    await this.showLoading()
    setTimeout(() => {
      this.apiService.getData().subscribe(response => {
        console.log(response)
        this.closeLoading()
      })
    }, 3000);

  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'circles',
    });

    loading.present();
  }

  closeLoading() {
    this.loadingCtrl.dismiss()
  }

}
