import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  itemId!: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log("QueryParams")
      console.log(params)
      this.itemId = params['itemId'];
    });

    this.activatedRoute.params.subscribe(params => {
      console.log("Params")
      console.log(params)
    });
  }
}
