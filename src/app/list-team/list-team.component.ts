import { Component } from '@angular/core';
import { Teams } from '../team.model';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css']
})
export class ListTeamComponent {
team:Teams[]=[];
constructor(private service:UserService,private http:HttpClient){
}
ngOnInit():void{
  this.service.listTeam().subscribe(data=>this.team=data);
}
}
