import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateModule } from "@ngx-translate/core";
import { RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.css", "../../../styles.css"],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    MatCardModule,
    HttpClientModule, // Ensure this is imported here or in your main app config
  ],
})
export class StatsComponent implements OnInit {
  visits: number = 0;
  likes: number = 0;

  private googleSheetUrl =
    "https://script.google.com/macros/s/AKfycbwBOWdZYEoNBlq0uACEVuCwf2OOtrs3BDmMCfxvt7jIFAhdz5o7smu4GjXHCsMTaGkQ/exec";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.initialLoad();
  }

  initialLoad() {
    // Check if user has already visited in this session to avoid double counting
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      // If new session, increment visit count on Google Sheet
      this.incrementVisits();
      sessionStorage.setItem("hasVisited", "true");
    } else {
      // If already visited, just read the data without incrementing
      this.fetchStats();
    }
  }

  fetchStats() {
    this.http.get<any>(this.googleSheetUrl).subscribe({
      next: (data) => {
        this.visits = data.visits;
        this.likes = data.likes;
      },
      error: (err) => console.error("Error fetching stats:", err),
    });
  }

  incrementVisits() {
    this.http.get<any>(`${this.googleSheetUrl}?action=visit`).subscribe({
      next: (data) => {
        this.visits = data.visits;
        this.likes = data.likes;
      },
    });
  }

  like() {
    const hasLiked = localStorage.getItem("hasLiked");

    if (!hasLiked) {
      this.http.get<any>(`${this.googleSheetUrl}?action=like`).subscribe({
        next: (data) => {
          this.likes = data.likes;
          this.visits = data.visits;
          localStorage.setItem("hasLiked", "true");
        },
      });
    } else {
      alert("You have already liked this portfolio!");
    }
  }
}
