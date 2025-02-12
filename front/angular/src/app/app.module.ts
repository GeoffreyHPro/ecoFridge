import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserTemplateComponent } from './authentified_section/user-template/user-template.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './authentified_section/navbar/navbar.component';
import { HomeComponent } from './unidentified_section/home/home.component';
import { LoginComponent } from './unidentified_section/login/login.component';
import { SignUpComponent } from './unidentified_section/sign-up/sign-up.component';
import { UserHomeComponent } from './authentified_section/user-home/user-home.component';
import { UserMyfridgeComponent } from './authentified_section/user-myfridge/user-myfridge.component';
import { PostFoodComponent } from './authentified_section/post-food/post-food.component';
import { PopupMessageComponent } from './utils/popup-message/popup-message.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { UserModifyComponent } from './authentified_section/user-modify/user-modify.component';
import { FormsModule } from '@angular/forms';
import { FoodCardComponent } from './authentified_section/user-home/food-card/food-card.component';
import { FoodCarrousselComponent } from './authentified_section/user-home/food-carroussel/food-carroussel.component';
import { FormAddFoodbatchComponent } from './authentified_section/post-food/form-add-foodbatch/form-add-foodbatch.component';
import { FormAddFoodComponent } from './authentified_section/user-modify/form-add-food/form-add-food.component';
import { FormUpdateFoodComponent } from './authentified_section/user-modify/form-update-food/form-update-food.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserTemplateComponent,
    UserHomeComponent,
    NavbarComponent,
    PostFoodComponent,
    UserMyfridgeComponent,
    SignUpComponent,
    PopupMessageComponent,
    UserModifyComponent,
    FoodCardComponent,
    FoodCarrousselComponent,
    FormAddFoodbatchComponent,
    FormAddFoodComponent,
    FormUpdateFoodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
