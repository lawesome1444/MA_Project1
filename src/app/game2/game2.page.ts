import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { SteamService } from '../Services/steam.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.page.html',
  styleUrls: ['./game2.page.scss'],
})
export class Game2Page implements OnInit {

  userReview:number = 0;
  
  steamStore:string ="https://store.steampowered.com/app/";
  
  gameID:string = "1237970";
  gameInfo: any = [];

  constructor(private storage:Storage) { }

  async onSave(){
    await this.storage.create();
    await this.storage.set("review2", this.userReview);
  }
  
  async onDelete(){
    await this.storage.create();
    await this.storage.set("review2", null);
    this.userReview = await this.storage.get('review2');
  }

  async openBrowser() {
    await Browser.open({ url: this.steamStore + this.gameID });
    };
    

    async ionViewWillEnter(){
      await this.storage.create();
      this.userReview = await this.storage.get('review2');
    }

  ngOnInit() {
  }

}
