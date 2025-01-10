import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserTemplateComponent } from './user-template/user-template.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { PostFoodComponent } from './post-food/post-food.component';
import { UserMyfridgeComponent } from './user-myfridge/user-myfridge.component';
import { HomeComponent } from './unauthentied_section/home/home.component';
import { LoginComponent } from './unauthentied_section/login/login.component';
import { SignUpComponent } from './unauthentied_section/sign-up/sign-up.component';

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
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
