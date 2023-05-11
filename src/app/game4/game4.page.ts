import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { SteamService } from '../Services/steam.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-game4',
  templateUrl: './game4.page.html',
  styleUrls: ['./game4.page.scss'],
})
export class Game4Page implements OnInit {

  userReview:number = 0;
  
  steamStore:string ="https://store.steampowered.com/app/";
  
  gameID:string = "736260";
  gameInfo: any = [];

  constructor(private storage:Storage) { }

  async onSave(){
    await this.storage.create();
    await this.storage.set("review4", this.userReview);
  }

  async openBrowser() {
    await Browser.open({ url: this.steamStore + this.gameID });
    };
    

    async ionViewWillEnter(){
      await this.storage.create();
      this.userReview = await this.storage.get('review4');
    }

    ngOnInit() {
    }

}
