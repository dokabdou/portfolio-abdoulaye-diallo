import { Routes } from "@angular/router";

export const COMPS_ROUTES: Routes = [
	{
		path: "stats",
		loadComponent: () =>
			import("./stats/stats.component").then((m) => m.StatsComponent),
	},
	{
		path: "contact",
		loadComponent: () =>
			import("./contact/contact.component").then((m) => m.ContactComponent),
	},
	{
		path: "skills",
		loadComponent: () =>
			import("./skills/skills.component").then((m) => m.SkillsComponent),
	},
	{
		path: "about",
		loadComponent: () =>
			import("./about/about.component").then((m) => m.AboutComponent),
	},
	{
		path: "education",
		loadComponent: () =>
			import("./education/education.component").then((m) => m.EducationComponent),
	},
	{
		path: "experience",
		loadComponent: () =>
			import("./experience/experience.component").then((m) => m.ExperienceComponent),
	},
	{
		path: "projects",
		loadComponent: () =>
			import("./projects/projects.component").then((m) => m.ProjectsComponent),
	},
	{
		path: "",
		redirectTo: "about",
		pathMatch: "full",
	},
	{
		path: "**",
		redirectTo: "about",
	},
];
