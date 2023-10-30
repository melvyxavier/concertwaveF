import { Component, HostListener, OnInit } from '@angular/core';
import { ConcertService } from '../concert.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {


  isSticky: boolean = false;
  concerts: any = []
  concertCategories: any = []
  user: any = ""
  email: any = ""

  users: any = []
  id: any = ""

  searchString: any = ""
  searchData: any = ""


  constructor(private cs: ConcertService, private rout: Router, private ar: ActivatedRoute) { }

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


    this.cs.getAllConcertsApi().subscribe({
      next: (result: any) => {
        this.concerts = result.message

        this.concertCategories = this.concerts
        console.log(this.concertCategories);
      }
    })

    this.cs.search.subscribe((data: any) => {
      this.searchString = data
    })


  }

  accessData(event:any){
    this.searchData=event.target.value
    // console.log(this.searchData);
    this.cs.search.next(this.searchData)
    
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const threshold = 200; // Adjust this value to your needs
    this.isSticky = window.scrollY >= threshold;
  }

  concertview(id: any) {
    this.rout.navigateByUrl(`Uconcertview/${id}`)
  }

  concertCategory(catId: any) {

    this.concertCategories = this.concerts.filter((item: any) =>
      item["categoryId"] == catId || catId == "")

    console.log(this.concertCategories);

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
