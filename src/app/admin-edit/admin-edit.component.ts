import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConcertService } from '../concert.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  cid: any = ""
  cdata: any = {}

  constructor(private rout: Router, private cs: ConcertService, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.cid = data.id

      this.cs.getConcertApi(this.cid).subscribe({
        next: (result: any) => {
          this.cdata = result.message
          console.log(this.cdata);

        }
      })
    })
  }

  isSticky: boolean = false;

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
  editconcert() {
    this.cs.editConcertApi(this.cid, this.cdata).subscribe({
      next: (result: any) => {
        alert(result.message)
      }
    })
  }


}
