import { Component, OnInit } from '@angular/core';
import { PersonInteractorService } from 'src/app/interactor/person.interactor.service';

@Component({
  selector: 'app-mvz',
  templateUrl: './mvz.page.html',
  styleUrls: ['./mvz.page.scss'],
})
export class MvzPage implements OnInit {
  constructor(private personInteractorService: PersonInteractorService) {}

  ngOnInit() {
    this.personInteractorService.getData();
  }
}
