import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {
  TranslateModule,
  TranslateService,
  LangChangeEvent,
} from "@ngx-translate/core";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { icon } from "leaflet";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css", "../../../styles.css"],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    CardModule,
    ButtonModule,
    RouterModule,
  ],
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];
  upcomingProjects: any[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.updateProjects();

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.updateProjects();
    });
  }

  updateProjects() {
    const projectIds = [6, 5, 4, 3, 2, 1]; // to update when adding new projects
	const upcomingProjectsIds = [2, 1]; // to update when adding new upcoming projects


    this.projects = projectIds.map((id) => {
      return {
        title: this.translate.instant(`project_${id}_title`),
        date: this.translate.instant(`project_${id}_date`),
        description: this.translate.instant(`project_${id}_description`),
        link: this.translate.instant(`project_${id}_link`),
        color: this.translate.instant(`project_${id}_color`),
        icon: this.translate.instant(`project_${id}_icon`),
      };
    });


	this.upcomingProjects = upcomingProjectsIds.map((id) => {
		return {
			title: this.translate.instant(`upcoming_project_${id}_title`),
			date: this.translate.instant(`upcoming_project_${id}_date`),
			description: this.translate.instant(`upcoming_project_${id}_description`),
			link: this.translate.instant(`upcoming_project_${id}_link`),
			color: this.translate.instant(`upcoming_project_${id}_color`),
			icon: this.translate.instant(`upcoming_project_${id}_icon`),
		};
	});
  }
}
