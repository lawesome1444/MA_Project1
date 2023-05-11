import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.page.html',
  styleUrls: ['./game1.page.scss'],
})

export class Game1Page implements OnInit {

  userReview:number = 0;

  constructor() {
   }

  async openBrowser() {
    await Browser.open({ url: 'https://store.steampowered.com/app/337000/Deus_Ex_Mankind_Divided/' });
    };
    
  ngOnInit() {
  }

}
