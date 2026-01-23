import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, OnInit } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { RouterModule, RouterLinkActive } from "@angular/router";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

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
export class AppComponent {
  currentLang: string;
  searchQuery: string = "";

	constructor(
		private translateService: TranslateService,
		private router: Router
	) {
		this.currentLang = "en";
		this.translateService.setDefaultLang("en");
		this.translateService.use("en");
	}

	onSearch(): void {
		if (this.searchQuery.trim()) {
			console.log("Searching for:", this.searchQuery);
		
			const query = this.searchQuery.trim().toLowerCase();

			if (query) {
			if (query.includes("about") || query.includes("à propos") || query.includes("propos") || query.includes("a") || query.includes("à")) {
					this.router.navigate(["/about"]);
				} else if (query.includes("education") || query.includes("éducation")) {
					this.router.navigate(["/education"]);
				} else if (query.includes("experience") || query.includes("expérience")) {
					this.router.navigate(["/experience"]);
				} else if (query.includes("projects") || query.includes("projets")) {
					this.router.navigate(["/projects"]);
				} else if (query.includes("skills") || query.includes("compétences") || query.includes("technique")) {
					this.router.navigate(["/skills"]);
				} else if (query.includes("contact")) {
					this.router.navigate(["/contact"]);
				} else if (query.includes("stats") || query.includes("statistiques")) {
					this.router.navigate(["/stats"]);
				}
			}
		}
	}

	toggleLanguage(): void {
		this.currentLang = this.currentLang === "en" ? "fr" : "en";
		this.translateService.use(this.currentLang);
	}
}
