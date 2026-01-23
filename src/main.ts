import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import { provideTranslateService } from "@ngx-translate/core"; // Updated import
import { provideTranslateHttpLoader } from "@ngx-translate/http-loader"; // New helper
import { APP_ROUTES } from "./app/app.routes";

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(APP_ROUTES),
    provideHttpClient(),
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: "./assets/i18n/",
        suffix: ".json",
      }),
    }),
  ],
}).catch((err) => console.error(err));
