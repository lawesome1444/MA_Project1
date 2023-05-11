import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SteamService {

  constructor(private http:HttpClient) { }

  SteamSearch():Observable<any>{
    return this.http.get('http://www.omdbapi.com/?apikey=b0102157&s=%27war%27');
  }
  
}
