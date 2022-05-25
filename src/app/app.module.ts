import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CountUpModule } from 'ngx-countup';
import { LightboxModule } from 'ngx-lightbox';
import { HttpClientModule } from '@angular/common/http';
import {NgxTypedJsModule} from 'ngx-typed-js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginbarComponent } from './componentes/loginbar/loginbar.component';
import { SidesearchComponent } from './componentes/sidesearch/sidesearch.component';
import { HeroComponent } from './componentes/hero/hero.component';
import { AboutComponent } from './componentes/about/about.component';
import { FactsComponent } from './componentes/facts/facts.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ResumeComponent } from './componentes/resume/resume.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SkillComponent } from './componentes/skill/skill.component';
import { TarjetafactsComponent } from './componentes/tarjetafacts/tarjetafacts.component';
import { ResumeEducacionCardComponent } from './componentes/resume-educacion-card/resume-educacion-card.component';
import { ResumeExperienciaCardComponent } from './componentes/resume-experiencia-card/resume-experiencia-card.component';
import { InputshowComponent } from './componentes/inputshow/inputshow.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginbarComponent,
    SidesearchComponent,
    HeroComponent,
    AboutComponent,
    FactsComponent,
    SkillsComponent,
    ResumeComponent,
    PorfolioComponent,
    FooterComponent,
    SkillComponent,
    TarjetafactsComponent,
    ResumeEducacionCardComponent,
    ResumeExperienciaCardComponent,
    InputshowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CountUpModule,
    LightboxModule,
    HttpClientModule,
    NgxTypedJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
