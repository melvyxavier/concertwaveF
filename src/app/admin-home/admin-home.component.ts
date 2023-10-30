import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConcertService } from '../concert.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  isSticky: boolean = false;

  concerts: any = []

  concertCategories: any = []

  searchString: any = ""
  searchData: any = ""

  constructor(private rout: Router, private cs: ConcertService) { }


  ngOnInit(): void {


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

  concertCategory(catId: any) {

    this.concertCategories = this.concerts.filter((item: any) =>
      item["categoryId"] == catId || catId == "")

    console.log(this.concertCategories);

  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const threshold = 200; // Adjust this value to your needs
    this.isSticky = window.scrollY >= threshold;
  }

  Logout() {
    //to logout from the account
    localStorage.removeItem('currentUname');

    this.rout.navigateByUrl('')
  }


}
