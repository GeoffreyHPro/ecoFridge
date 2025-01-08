import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTemplateComponent } from './user-template/user-template.component';
import { authenticationGuard } from './guards/authentication.guard';
import { authorizationGuard } from './guards/authorization.guard';
import { UserHomeComponent } from './user-home/user-home.component';
import { PostFoodComponent } from './post-food/post-food.component';
import { UserMyfridgeComponent } from './user-myfridge/user-myfridge.component';
import { HomeComponent } from './unauthentied_section/home/home.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "user", component: UserTemplateComponent, canActivate: [authenticationGuard, authorizationGuard], children: [
      { path: "user-home", component: UserHomeComponent },
      { path: "post-food", component: PostFoodComponent },
      { path: "user-myfridge", component: UserMyfridgeComponent }
    ]
  },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
