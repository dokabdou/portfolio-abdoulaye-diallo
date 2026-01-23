import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { StatsComponent } from './components/stats/stats.component';
import { TranslateModule, TranslateService } from "@ngx-translate/core";

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "education", component: EducationComponent },
  { path: "experience", component: ExperienceComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "stats", component: StatsComponent },
  { path: "", redirectTo: "/about", pathMatch: "full" },
  { path: "**", redirectTo: "/about" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }