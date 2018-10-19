import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ContentComponent } from "./content/content.component";
import { PolicyManagerComponent } from "./policy-manager/policy-manager.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProcessQuoteComponent } from "./process-quote/process-quote.component";
import { UniversalGuard } from "./universal.guard";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "register",
    component: RegistrationComponent,
    canActivate: [UniversalGuard]
  },
  {
    path: "home",
    component: ContentComponent,
    canActivate: [UniversalGuard]
  },
  {
    path: "policy",
    component: PolicyManagerComponent,
    canActivate: [UniversalGuard]
  },
  { path: "logout", component: LogoutComponent },
  {
    path: "quote",
    component: ProcessQuoteComponent,
    canActivate: [UniversalGuard]
  },
  { path: "**", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
