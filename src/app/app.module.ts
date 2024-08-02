import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HerosecComponent } from './herosec/herosec.component';
import { PartnersecComponent } from './partnersec/partnersec.component';
import { CollectionComponent } from './collection/collection.component';
import { ChooseusComponent } from './chooseus/chooseus.component';
import { RankComponent } from './rank/rank.component';
import { AboutComponent } from './about/about.component';
import { NevermissComponent } from './nevermiss/nevermiss.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { ArtistsComponent } from './artists/artists.component';
import { AnsweredComponent } from './answered/answered.component';
import { MintingComponent } from './minting/minting.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HerosecComponent,
    PartnersecComponent,
    CollectionComponent,
    ChooseusComponent,
    RankComponent,
    AboutComponent,
    NevermissComponent,
    RoadmapComponent,
    ArtistsComponent,
    AnsweredComponent,
    MintingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
