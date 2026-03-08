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

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css", "../../../styles.css"],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    CardModule,
    ButtonModule,
    RouterModule,
  ],
})
export class SkillsComponent implements OnInit {
  skillCategories: any[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.updateSkills();

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.updateSkills();
    });
  }

  updateSkills() {
    this.skillCategories = [
      {
        title: this.translate.instant("frontend_dev"),
        icon: "pi pi-desktop",
        color: "#2196F3",
        skillsList: this.getSkillsArray("skills_frontend"),
      },
      {
        title: this.translate.instant("backend_dev"),
        icon: "pi pi-server",
        color: "#4CAF50",
        skillsList: this.getSkillsArray("skills_backend"),
      },
      {
        title: this.translate.instant("frameworks"),
        icon: "pi pi-box",
        color: "#9C27B0",
        skillsList: this.getSkillsArray("skills_frameworks"),
      },
      {
        title: this.translate.instant("tools"),
        icon: "pi pi-wrench",
        color: "#FF9800",
        skillsList: this.getSkillsArray("skills_tools"),
      },
    ];
  }

  private getSkillsArray(key: string): string[] {
    const rawString = this.translate.instant(key);
    if (!rawString) return [];

    return rawString.split(";").map((s: string) => s.trim());
  }
}
