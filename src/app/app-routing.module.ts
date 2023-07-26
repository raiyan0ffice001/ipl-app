import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from './add-player/add-player.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { ListPlayerComponent } from './list-player/list-player.component';
import { ListTeamComponent } from './list-team/list-team.component';
import { SearchPlayerComponent } from './search-player/search-player.component';
import { SearchTeamComponent } from './search-team/search-team.component';

const routes: Routes = [
  {path: "add-player", component:AddPlayerComponent},
  {path: "add-team", component:AddTeamComponent},
  {path: "edit-player", component:EditPlayerComponent},
  {path: "list-player", component:ListPlayerComponent},
  {path: "list-team", component:ListTeamComponent},
  {path: "search-player", component:SearchPlayerComponent},
  {path: "search-team", component:SearchTeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
