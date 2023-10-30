import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConcertService } from '../concert.service';

@Component({
  selector: 'app-adminconcertmng',
  templateUrl: './adminconcertmng.component.html',
  styleUrls: ['./adminconcertmng.component.css']
})
export class AdminconcertmngComponent implements OnInit {

  isSticky: boolean = false;

  cdata: any = []


  constructor(private rout: Router, private cs: ConcertService) { }

  ngOnInit(): void {
    this.cs.getAllConcertsApi().subscribe({
      next: (result: any) => {
        console.log(result.message);
        this.cdata = result.message

      }
    })
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const threshold = 200; // Adjust this value to your needs
    this.isSticky = window.scrollY >= threshold;
  }


  editconcert(id: any) {
    this.rout.navigateByUrl(`admin-edit/${id}`)
  }

  deleteconcert(id: any) {
    this.cs.deleteConcertApi(id).subscribe({

      next: (result: any) => {
        alert(result.message)

        this.cs.getAllConcertsApi().subscribe({
          next: (result: any) => {
            console.log(result.message);
            this.cdata = result.message
          }
        })
      }
    })
  }


}
