import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSidenavModule } from "@angular/material/sidenav";
import { RouterModule, RouterLinkActive } from "@angular/router";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { FormsModule } from "@angular/forms";
import { StatsService } from "./stats.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [
    MatSidenavModule,
    CommonModule,
    RouterModule,
    RouterLinkActive,
    TranslateModule,
    FormsModule,
  ],
})
export class AppComponent implements OnInit {
  currentLang: string;
  searchQuery: string = "";

  private translateService = inject(TranslateService);
  private statsService = inject(StatsService);

  constructor() {
    this.currentLang = "en";
    this.translateService.setDefaultLang("en");
    this.translateService.use("en");
  }

  ngOnInit() {
    this.statsService.initializeStats();
  }

  toggleLanguage(): void {
    this.currentLang = this.currentLang === "en" ? "fr" : "en";
    this.translateService.use(this.currentLang);
  }
}
