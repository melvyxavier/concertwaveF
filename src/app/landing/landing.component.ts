import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConcertService } from '../concert.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  concerts: any = []

  constructor(private rout: Router, private cs: ConcertService) { }


  ngOnInit(): void {
    this.cs.getAllConcertsApi().subscribe({
      next: (result: any) => {
        this.concerts = result.message
      }
    })
  }

}
