import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sistemas',
  templateUrl: './sistemas.page.html',
  styleUrls: ['./sistemas.page.scss'],
})
export class SistemasPage implements OnInit {
  program: string = 'SOFTWARE'

  constructor() { }

  ngOnInit() {
  }

}
