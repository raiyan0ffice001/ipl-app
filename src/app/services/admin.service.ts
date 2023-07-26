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

  persistPlayer(plyr:Players[]){
    let tm:Teams=new Teams();
    this.http.get<Teams>(AdminService.baseUrl+"/teams")
  
  }
}
