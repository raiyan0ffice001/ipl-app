import { Component } from '@angular/core';
import { Teams } from '../team.model';
import { UserService } from '../services/user.service';
import { Players } from '../player.model';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.css']
})
export class ListPlayerComponent {
 team:Teams = new Teams();
 players:Players[]=[];
 tmId:number=0;
 constructor(private service: UserService){};
 
 show(){
  // this.player=this.service.listPlayer(this.tmId);
  this.service.listTeamById(this.tmId).then(response => response.subscribe(data => this.team = data));
  this.players = this.team.player;
 }
}
