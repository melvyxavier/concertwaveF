import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConcertService } from '../concert.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  adminloginForm = this.fb.group({
    auname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    apsw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+')]]
  })

  constructor(private fb: FormBuilder, private rout: Router, private cs: ConcertService) { }

  adminlogin() {
    var auname = this.adminloginForm.value.auname
    var apsw = this.adminloginForm.value.apsw
    this.cs.adminLogin(auname, apsw).subscribe({
      next: (result: any) => {
        localStorage.setItem("currentUname", result.admin)

        this.rout.navigateByUrl("admin-home")
      },
      error: (result: any) => {
        alert(result.error.message)
      }
    })
  }


}
