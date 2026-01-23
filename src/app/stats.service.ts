import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StatsService {
  private googleSheetUrl =
    "https://script.google.com/macros/s/AKfycbwBOWdZYEoNBlq0uACEVuCwf2OOtrs3BDmMCfxvt7jIFAhdz5o7smu4GjXHCsMTaGkQ/exec";

  private statsSubject = new BehaviorSubject<{ visits: number; likes: number }>(
    { visits: 0, likes: 0 }
  );

  public stats$ = this.statsSubject.asObservable();

  constructor(private http: HttpClient) {}

  initializeStats() {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      this.incrementVisits();
      sessionStorage.setItem("hasVisited", "true");
    } else {
      this.fetchStats();
    }
  }

  private fetchStats() {
    this.http.get<any>(this.googleSheetUrl).subscribe({
      next: (data) =>
        this.statsSubject.next({ visits: data.visits, likes: data.likes }),
      error: (err) => console.error("Error fetching stats:", err),
    });
  }

  private incrementVisits() {
    this.http.get<any>(`${this.googleSheetUrl}?action=visit`).subscribe({
      next: (data) =>
        this.statsSubject.next({ visits: data.visits, likes: data.likes }),
    });
  }

  like() {
    const hasLiked = localStorage.getItem("hasLiked");
    if (!hasLiked) {
      this.http.get<any>(`${this.googleSheetUrl}?action=like`).subscribe({
        next: (data) => {
          this.statsSubject.next({ visits: data.visits, likes: data.likes });
          localStorage.setItem("hasLiked", "true");
        },
      });
    } else {
      alert("You have already liked this portfolio!");
    }
  }
}
