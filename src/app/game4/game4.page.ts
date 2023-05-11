import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-game4',
  templateUrl: './game4.page.html',
  styleUrls: ['./game4.page.scss'],
})
export class Game4Page implements OnInit {

  userReview:number = 0;

  constructor() { }

  async openBrowser() {
    await Browser.open({ url: 'https://store.steampowered.com/app/736260/Baba_Is_You/' });
    };
    

  ngOnInit() {
  }

}
