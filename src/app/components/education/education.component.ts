import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { TimelineModule } from "primeng/timeline";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.css", "../../../styles.css"],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    TimelineModule,
    CardModule,
    ButtonModule,
  ],
})
export class EducationComponent implements OnInit {
  educationList: any[] = [];
  selectedEducation: any = null;

  constructor(private translate: TranslateService) {
	const educationIds = [1, 2, 3]; // to update when adding new education entries
	
	this.educationList = educationIds.map((id) => {
	  return {
		title: this.translate.instant(`education_${id}_title`),
		institution: this.translate.instant(`education_${id}_institution`),
		date: this.translate.instant(`education_${id}_date`),
		keyCourses: this.translate.instant(`education_${id}_key_courses`),
		courses: this.translate.instant(`education_${id}_courses`).split(",").sort(),
		color: this.translate.instant(`education_${id}_color`),
		icon: this.translate.instant(`education_${id}_icon`),
	  };
	});
  }

  ngOnInit() {
	//this.updateEducation();
    if (this.educationList.length > 0) {
      this.selectedEducation = this.educationList[0];
    }

	/* this.translate.onLangChange.subscribe((event: any) => {
		this.updateEducation();
	}); */
  }

  selectEducation(edu: any) {
    this.selectedEducation = edu;

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

  /* updateEducation() {
	} */
}
