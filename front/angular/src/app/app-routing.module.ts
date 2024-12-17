import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserTemplateComponent } from './user-template/user-template.component';
import { authenticationGuard } from './guards/authentication.guard';
import { authorizationGuard } from './guards/authorization.guard';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "user", component: UserTemplateComponent, canActivate: [authenticationGuard, authorizationGuard], children: [
      { path: "list", component: UserHomeComponent }
    ]
  },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
