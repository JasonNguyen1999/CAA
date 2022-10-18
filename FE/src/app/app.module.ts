import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './containers/header/header.component';
import { FooterComponent } from './containers/footer/footer.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EducationDetailsComponent } from './pages/education-details/education-details.component';
import { EducationComponent } from './pages/education/education.component';
import { SubcribeComponent } from './pages/subcribe/subcribe.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectsDetailsComponent } from './pages/projects-details/projects-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    TeamComponent,
    ContactComponent,
    EducationDetailsComponent,
    EducationComponent,
    SubcribeComponent,
    NewsComponent,
    NewsDetailsComponent,
    ProjectsComponent,
    ProjectsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
