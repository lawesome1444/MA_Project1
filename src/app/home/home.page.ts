import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
stories:any[]=[];
  constructor() {}

  gameImage1:string = "https://cdn.cloudflare.steamstatic.com/steam/apps/337000/header.jpg?t=1675708510";
  gameImage2:string = "https://cdn.cloudflare.steamstatic.com/steam/apps/1237970/header.jpg?t=1668565264";
  gameImage3:string = "https://cdn.cloudflare.steamstatic.com/steam/apps/1378990/header.jpg?t=1666113934";
  gameImage4:string = "https://cdn.cloudflare.steamstatic.com/steam/apps/736260/header.jpg?t=1656225237";
  
}