import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.page.html',
  styleUrls: ['./game2.page.scss'],
})
export class Game2Page implements OnInit {

  userReview:number = 0;

  constructor() { }

  async openBrowser() {
    await Browser.open({ url: 'https://store.steampowered.com/app/1237970/Titanfall_2/' });
    };

  ngOnInit() {
  }

}
