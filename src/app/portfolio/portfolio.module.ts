import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component'; 
import { MaterialModule } from "./../material/material/material.module";

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    AboutMeComponent,
    SkillsComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent, 
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    MaterialModule
  ]
})
export class PortfolioModule { }
