import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import {
  TranslateModule,
  TranslateService,
  LangChangeEvent,
} from "@ngx-translate/core";
import { MatCardModule } from "@angular/material/card";
import { TimelineModule } from "primeng/timeline";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.css", "../../../styles.css"],
  imports: [
    CommonModule,
    MatCardModule,
    TranslateModule,
    RouterModule,
    TimelineModule,
    CardModule,
    ButtonModule,
  ],
})
export class ExperienceComponent implements OnInit {
  experienceList: any[] = [];
  selectedExperience: any = null;
  experienceIds = [3, 2, 1]; // to update when adding new experiences

  constructor(private translate: TranslateService) {}
  
  ngOnInit() {
    this.updateExperienceData();

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.updateExperienceData();
    });

    if (this.experienceList.length > 0) {
      this.selectedExperience = this.experienceList[0];
    }
  }

  updateExperienceData() {
    const newData = this.experienceIds.map((id) => {
      return {
        title: this.translate.instant(`experience_${id}_title`),
        company: this.translate.instant(`experience_${id}_company`),
        date: this.translate.instant(`experience_${id}_date`),
        description: this.translate.instant(`experience_${id}_description`),
        highlight: this.translate.instant(`exp_${id}_highlight`),
        color: this.translate.instant(`experience_${id}_color`),
        icon: this.translate.instant(`experience_${id}_icon`),
      };
    });

    const currentlySelectedIndex = this.selectedExperience
      ? this.experienceList.indexOf(this.selectedExperience)
      : 0;

    this.experienceList = newData;

    if (this.experienceList.length > 0) {
      this.selectedExperience =
        this.experienceList[
          currentlySelectedIndex !== -1 ? currentlySelectedIndex : 0
        ];
    }
  }

  selectExperience(experience: any) {
    this.selectedExperience = experience;

    setTimeout(() => {
      const element = document.getElementById("details-section");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  }
}
