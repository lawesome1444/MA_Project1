import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { SteamService } from '../Services/steam.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.page.html',
  styleUrls: ['./game1.page.scss'],
})
export class Game1Page implements OnInit {

  //Creating the userReview variable
  userReview:number = 0;
  
  //Both of these are used together to form a link to this page's specific game's Steam Page.
  steamStore:string ="https://store.steampowered.com/app/";
  gameID:string = "337000";
 
  gameInfo: any = [];

  //API: This is where the Image url and game price would've been stored if the API worked correctly
 // gameImage:string = "";
  //gamePrice:string = "";

  //Stores hardcoded links to the game's image and price value
  steamImage:string = "https://cdn.cloudflare.steamstatic.com/steam/apps/337000/header.jpg?t=1675708510";
  steamPrice:string = "29.99";

  constructor(private storage:Storage, private steamService: SteamService) { }
  //API: constructor(private storage:Storage, private ss:SteamService) { }

  //Saves the user's review to this specific page's save file
  async onSave(){
    await this.storage.create();
    await this.storage.set("review1", this.userReview);
  }
  
  //Clears the user review value from the save file then sets the value to null (aka so it'll display nothing)
  async onDelete(){
    await this.storage.create();
    await this.storage.set("review1", null);
    this.userReview = await this.storage.get('review1');
  }

  //BROWSER PLUGIN: Using the SteamStore template + this game's specific Steam Game ID,
  //                when called this will open the user's browser on the relevant Steam Store Page
  async openBrowser() {
    await Browser.open({ url: this.steamStore + this.gameID });
    };
        

    //When this specific page is loaded, assign userReview the value of the save file (If it's null, it'll show up empty as there is no review)
    async ionViewWillEnter(){
      await this.storage.create();
      this.userReview = await this.storage.get('review1');
    }
    
    /*
    The closest I ever got to getting the CheapShark API to work. Successfully passes the gameID to the API,
    but the API never seems to get to the target destinations.

    SteamSearch(gameID: number): void {
      this.steamService.SteamSearch(gameID).subscribe(
        (data: any) => {
          gameImage = data.info.thumb;
          gamePrice = data.cheapestPriceEver.price;
          this.gameImage = gameImage;
          this.gamePrice = gamePrice;
        }
      );
    }
*/
  ngOnInit() {
    //API: This was supposed to, on startup, call SteamSearch to assign gameImage and gamePrice on this specific page their respected values
    //gameID = 337000;
    //this.SteamSearch(gameID);
  }

}
