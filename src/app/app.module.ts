import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { ListTeamComponent } from './list-team/list-team.component';
import { ListPlayerComponent } from './list-player/list-player.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { SearchTeamComponent } from './search-team/search-team.component';
import { SearchPlayerComponent } from './search-player/search-player.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddTeamComponent,
    AddPlayerComponent,
    ListTeamComponent,
    ListPlayerComponent,
    EditPlayerComponent,
    SearchTeamComponent,
    SearchPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
