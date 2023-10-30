import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConcertService } from '../concert.service';

@Component({
  selector: 'app-concert-view',
  templateUrl: './concert-view.component.html',
  styleUrls: ['./concert-view.component.css']
})
export class ConcertViewComponent implements OnInit {

  cid: any = ""
  cdata: any = {}
  uid: any = ""
  isSticky: boolean = false;


  constructor(private ar: ActivatedRoute, private cs: ConcertService, private rout: Router) { }

  ngOnInit(): void {


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
      alert("Please login as our user member to have access to ticket boking!")
      this.rout.navigateByUrl('user-login')

    }

  }

  Logout() {
    //to logout from the account
    localStorage.removeItem('uname');
    localStorage.removeItem('psw');

    this.rout.navigateByUrl('')
  }


}
