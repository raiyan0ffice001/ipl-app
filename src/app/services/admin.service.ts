import { Injectable } from '@angular/core';
import { Teams } from '../team.model';
import { HttpClient } from '@angular/common/http';
import { Players } from '../player.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  tms:Teams[]=[];
  private static baseUrl: string="http://localhost:3000";
  constructor(private http:HttpClient) { }

  

  persist(tm:Teams){
    this.http.post(AdminService.baseUrl+"/teams/",tm).subscribe(data=>data=tm);
  }

  mod(tm:Teams){
    this.http.put(AdminService.baseUrl+"/teams/",tm).subscribe(data=>data=tm);
  }

}
