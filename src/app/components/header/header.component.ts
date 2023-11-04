import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() programa: string = '';
  @Input() isEngineer: boolean = false;
  @Input() isAdmin: boolean = false
  constructor() { }

  ngOnInit() {
    this.isEngineer = this.programa == 'SOFTWARE' ? true : false
  }

}
