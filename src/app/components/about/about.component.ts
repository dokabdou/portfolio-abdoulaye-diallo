import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css", "../../../styles.css"],
  standalone: true,
  imports: [MatCardModule, TranslateModule, RouterModule, MatButtonModule],
})
export class AboutComponent {
  constructor(private translateService: TranslateService) {}

  downloadResume(): void {
    const lang = this.translateService.currentLang || "en";

    let filePath = "./assets/resumes/";
    if (lang === "fr") {
      filePath += "ADiallo_CV_FR_.pdf";
    } else {
      filePath += "ADiallo_Eng_.pdf";
    }
    const fileName = `Abdoulaye_DIALLO_Resume_${lang.toUpperCase()}.pdf`;

    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    link.click();
  }
}
