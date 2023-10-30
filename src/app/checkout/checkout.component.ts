import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConcertService } from '../concert.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cid: any = ""
  cdata: any = {}
  uid: any = ""
  isSticky: boolean = false
  message: any = ""
  msgClr: any = true

  ticketbookingForm = this.fb.group({

    email: ['', [Validators.email]],
    mobile: ['', [Validators.required, Validators.pattern('^[0-9]{1,10}$')]],
    ticketCount: ['', [Validators.required, Validators.pattern('[0-9]+')]],


  })
  user: any = ""
  email:any=""
  bookedTicket: any = null


  constructor(private ar: ActivatedRoute, private cs: ConcertService, private rout: Router, private fb: FormBuilder) { }

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


  bookTicket() {

    if (localStorage.getItem("currentemail")) {
      this.uid = localStorage.getItem("currentemail")
      this.cs.bookTicketApi(this.uid, this.cid).subscribe({
        next: (result: any) => {
          this.message = result.message
          this.msgClr = true
          this.ticketbookingForm.reset()
        },
        error: (result: any) => {
          this.message = result.error.message
          this.msgClr = false
          this.ticketbookingForm.reset()

        }
      })
    }


    else {
      alert("Please Login First")
      this.rout.navigateByUrl('user-login')

    }
  }

  profile() {

    if (localStorage.getItem("currentemail")) {
      this.email = JSON.parse(localStorage.getItem("currentemail") || "")

    }
  }

  Logout() {
    //to logout from the account
    localStorage.removeItem('currentemail');
    localStorage.removeItem('currentUname');

    this.rout.navigateByUrl('')
  }

}


