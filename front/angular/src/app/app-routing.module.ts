import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTemplateComponent } from './authentified_section/user-template/user-template.component';
import { authenticationGuard } from './guards/authentication.guard';
import { authorizationGuard } from './guards/authorization.guard';
import { HomeComponent } from './unidentified_section/home/home.component';
import { SignUpComponent } from './unidentified_section/sign-up/sign-up.component';
import { UserHomeComponent } from './authentified_section/user-home/user-home.component';
import { UserMyfridgeComponent } from './authentified_section/user-myfridge/user-myfridge.component';
import { PostFoodComponent } from './authentified_section/post-food/post-food.component';
import { UserModifyComponent } from './authentified_section/user-modify/user-modify.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "signup", component: SignUpComponent },
  {
    path: "user", component: UserTemplateComponent, canActivate: [authenticationGuard, authorizationGuard], children: [
      { path: "user-home", component: UserHomeComponent },
      { path: "post-food", component: PostFoodComponent },
      { path: "user-myfridge", component: UserMyfridgeComponent },
      { path: "modify", component: UserModifyComponent }
    ]
  },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
