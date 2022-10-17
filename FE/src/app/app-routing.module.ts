import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EducationDetailsComponent } from './pages/education-details/education-details.component';
import { EducationComponent } from './pages/education/education.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { SubcribeComponent } from './pages/subcribe/subcribe.component';
import { TeamComponent } from './pages/team/team.component';
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'service', component: ServicesComponent},
  {path: 'team', component: TeamComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'education-details', component: EducationDetailsComponent},
  {path: 'education', component: EducationComponent},
  {path: 'subcribe', component: SubcribeComponent },
  {path: 'news', component: NewsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
