import { Injectable } from '@angular/core';
import { Teams } from '../team.model';
import { Players } from '../player.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  tms:Teams=new Teams();
  plyr:Players[]=[];
  private static baseUrl: string="http://localhost:3000";
  constructor(private http:HttpClient) { }

  listTeam(){
    return this.http.get<Teams[]>(UserService.baseUrl+"/teams/");
  }

  async listTeamById(tmId : number) {
    return await this.http.get<Teams>(UserService.baseUrl+"/teams/"+tmId);
  }

  listPlayer(tmId:Number):Players[]{
    let team:Teams=new Teams();
     this.http.get<Teams>(UserService.baseUrl+"/teams/"+tmId).subscribe(data=>team=data);
     return team.player;
  }
}
