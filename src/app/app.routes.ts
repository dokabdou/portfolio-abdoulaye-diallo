import { Routes } from "@angular/router";
import { COMPS_ROUTES } from "./components/components.routes";

export const APP_ROUTES: Routes = [
  {
    path: "",
    redirectTo: "about",
    pathMatch: "full",
  },
  ...COMPS_ROUTES,
];
