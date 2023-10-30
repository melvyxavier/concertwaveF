import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminuserMngComponent } from './adminuser-mng/adminuser-mng.component';
import { ConcertViewComponent } from './concert-view/concert-view.component';
import { UserMybookingsComponent } from './user-mybookings/user-mybookings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserconcertviewComponent } from './userconcertview/userconcertview.component';
import { AdminconcertmngComponent } from './adminconcertmng/adminconcertmng.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AdminLoginComponent,
    UserLoginComponent,
    AdminHomeComponent,
    UserHomeComponent,
    AdminAddComponent,
    AdminEditComponent,
    AdminuserMngComponent,
    ConcertViewComponent,
    UserMybookingsComponent,
    UserconcertviewComponent,
    AdminconcertmngComponent,
    CheckoutComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
