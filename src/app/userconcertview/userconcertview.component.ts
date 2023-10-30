import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConcertService } from '../concert.service';

@Component({
  selector: 'app-userconcertview',
  templateUrl: './userconcertview.component.html',
  styleUrls: ['./userconcertview.component.css']
})
export class UserconcertviewComponent implements OnInit {

  cid: any = ""
  cdata: any = {}
  uid: any = ""
  isSticky: boolean = false;
  user: any = ""
  email: any = ""

  constructor(private ar: ActivatedRoute, private cs: ConcertService, private rout: Router) { }

  ngOnInit(): void {


    //check if data present/not in local storage
    if (localStorage.getItem("currentUname")) {
      this.user = localStorage.getItem("currentUname")
    }

    //login or not
    if (!localStorage.getItem("currentemail")) {
      alert("Please login to continue")
      this.rout.navigateByUrl("user-login")
    }


    this.ar.params.subscribe((data: any) => {
      this.cid = data.id
      this.cs.getConcertApi(this.cid).subscribe({
        next: (result: any) => {
          this.cdata = result.message
          // console.log(this.pdata);

        }
      })
    })
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const threshold = 200; // Adjust this value to your needs
    this.isSticky = window.scrollY >= threshold;
  }

  checkOut(id: any) {

    if (localStorage.getItem("currentemail")) {
      this.uid = localStorage.getItem("currentemail")
      this.rout.navigateByUrl((`checkout/${id}`))
    }
    else {
      alert("Please login to have access to ticket boking!")
      this.rout.navigateByUrl('user-login')

    }

  }

  Logout() {
    //to logout from the account
    localStorage.removeItem('currentemail');
    localStorage.removeItem('currentUname');

    this.rout.navigateByUrl('')
  }
  profile() {

    if (localStorage.getItem("currentemail")) {
      this.email = JSON.parse(localStorage.getItem("currentemail") || "")

    }
  }

}
