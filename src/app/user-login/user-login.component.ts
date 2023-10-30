import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConcertService } from '../concert.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  usersignupForm = this.fb.group({
    userName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    email: ['', [Validators.email]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })

  userloginForm = this.fb.group({
    email: ['', [Validators.email]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })


  constructor(private fb: FormBuilder, private cs: ConcertService, private rout: Router) { }



  signup() {
    this.cs.userSignupApi(this.usersignupForm.value.userName, this.usersignupForm.value.email, this.usersignupForm.value.psw).subscribe({
      next: (result: any) => {
        alert(result.message)
        this.usersignupForm.reset()
      },
      error: (result: any) => {
        alert(result.error.message)
      }
    })

  }

  userlogin() {

    var email = this.userloginForm.value.email
    var psw = this.userloginForm.value.psw
    this.cs.userLoginApi(email, psw).subscribe({
      next: (result: any) => {
        localStorage.setItem("currentemail", JSON.stringify(email))
        localStorage.setItem("currentUname", result.currentUser)
        localStorage.setItem("user", result._id)

        // localStorage.setItem("token", JSON.stringify(result.token))

        alert(result.message)
        this.rout.navigateByUrl("user-home")
      },
      error: (result: any) => {
        alert(result.error.message)
      }
    })
  }

}
