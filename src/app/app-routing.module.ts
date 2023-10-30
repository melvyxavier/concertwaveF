import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminuserMngComponent } from './adminuser-mng/adminuser-mng.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ConcertViewComponent } from './concert-view/concert-view.component';
import { UserMybookingsComponent } from './user-mybookings/user-mybookings.component';
import { UserconcertviewComponent } from './userconcertview/userconcertview.component';
import { AdminconcertmngComponent } from './adminconcertmng/adminconcertmng.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "admin-login", component: AdminLoginComponent },
  { path: "user-login", component: UserLoginComponent },
  { path: "admin-home", component: AdminHomeComponent },
  { path: "admin-add", component: AdminAddComponent },
  { path: "admin-edit/:id", component: AdminEditComponent },
  { path: "admin-userMng", component: AdminuserMngComponent },
  { path: "user-home", component: UserHomeComponent },
  { path: "concert-view/:id", component: ConcertViewComponent },
  { path: "my-bookings", component: UserMybookingsComponent },
  { path: "Uconcertview/:id", component: UserconcertviewComponent },
  { path: "admin-manageconcert", component: AdminconcertmngComponent },
  { path: "checkout/:id", component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
