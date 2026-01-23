import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { StatsService } from "../../stats.service";

@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.css", "../../../styles.css"],
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule, MatCardModule],
})
export class StatsComponent implements OnInit {
  visits: number = 0;
  likes: number = 0;

  private statsService = inject(StatsService);

  ngOnInit() {
    this.statsService.stats$.subscribe((data) => {
      this.visits = data.visits;
      this.likes = data.likes;
    });
  }

  like() {
    this.statsService.like();
  }
}
