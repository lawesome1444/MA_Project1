import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SteamService {

  constructor(private http:HttpClient) { }

  /*
  This, if the API was working, would've in one way or another been assigned the gameID of one of the
  relevant game that sent the http request. It would then have been added to the end of
  SteamSearch()'s http.get() in order to find the relevant entry for that game in CheapShark's API.
  Unfortunately, no matter what I did, I couldn't get APIs to work.

  I am leaving remnants of these attemps (unless they break the app) as a visible attempt at the feature.

  CheapShark's API documentation can be found below.
  https://apidocs.cheapshark.com/
  */
 //Using the gameID got from gameX.page.ts, use this to find the relevant game in CheapShark's API
  SteamSearch(gameID: number):Observable<any>{
    return this.http.get('https://www.cheapshark.com/api/1.0/games?id='+gameID);
  }
  
}
