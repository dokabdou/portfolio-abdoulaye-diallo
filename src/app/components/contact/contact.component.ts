import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css", "../../../styles.css"],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    TranslateModule,
    RouterModule,
    CardModule,
    ButtonModule,
  ],
})
export class ContactComponent {
  private googleSheetUrl =
    "https://script.google.com/macros/s/AKfycbwBOWdZYEoNBlq0uACEVuCwf2OOtrs3BDmMCfxvt7jIFAhdz5o7smu4GjXHCsMTaGkQ/exec";
  contactData = {
    name: "",
    email: "",
    message: "",
  };

  submitted: boolean = false;
  loading: boolean = false;

  constructor(private http: HttpClient) {}

  onSubmit() {
    // TODO : to finish
	if (this.loading) return;
	this.loading = true;

	const headers = new HttpHeaders({ "Content-Type": "text/plain" });

	this.http.post(this.googleSheetUrl, this.contactData, { headers, responseType: "text" })
      .subscribe({
        next: (response) => {
          console.log("Response from Google Apps Script:", response);
          this.submitted = true;
          this.loading = false;
        },
        error: (error) => {
          console.error("Error submitting form:", error);
          this.submitted = true;
          this.loading = false;
        }
      });
  }
}
