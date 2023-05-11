import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-game3',
  templateUrl: './game3.page.html',
  styleUrls: ['./game3.page.scss'],
})
export class Game3Page implements OnInit {


  userReview:number = 0;

  constructor() { }

  async openBrowser() {
    await Browser.open({ url: 'https://store.steampowered.com/app/1378990/Crash_Bandicoot_4_Its_About_Time/' });
    };

  ngOnInit() {
  }

}
