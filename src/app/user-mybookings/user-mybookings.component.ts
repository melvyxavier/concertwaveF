import { Component, HostListener, OnInit } from '@angular/core';
import { ConcertService } from '../concert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-mybookings',
  templateUrl: './user-mybookings.component.html',
  styleUrls: ['./user-mybookings.component.css']
})
export class UserMybookingsComponent implements OnInit {

  isSticky: boolean = false;

  userId: any = ""
  cdatas: any = []
  user: any = ""
  email: any = ""
  id:any=""

  constructor(private cs: ConcertService, private rout: Router) { }

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

    this.bookings()


  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const threshold = 200; // Adjust this value to your needs
    this.isSticky = window.scrollY >= threshold;
  }


  bookings(){
    if (localStorage.getItem("currentemail")) {
      this.userId = localStorage.getItem("currentemail")
      this.cs.bookingList(this.userId).subscribe({
        next: (data: any) => {
          this.cdatas = data.message
          console.log(this.cdatas);
          
        }
      })
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

  

  

  cancel(id: any) {
    this.cs.cancel(id).subscribe({
      next: (result: any) => {
        alert(result.message)
        this.bookings()
      }
    })
  }

}
