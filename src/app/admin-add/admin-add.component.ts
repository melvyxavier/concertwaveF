import { Component, HostListener } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConcertService } from '../concert.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent {

  addconcertForm = this.fb.group({

    Cname: ['', [Validators.required, Validators.pattern("[a-zA-Z '-]+")]],
    categoryId: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    venue: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z :/,._-]+')]],
    dateTime: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z :/,._-]+')]],
    price: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    image: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z:/._-]+')]]


  })

  constructor(private fb: FormBuilder, private rout: Router, private cs: ConcertService) { }


  isSticky: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const threshold = 200; // Adjust this value to your needs
    this.isSticky = window.scrollY >= threshold;
  }

  addNewConcert() {
    const path = this.addconcertForm.value

    const bodyData = {
      Cname: path.Cname,
      categoryId: path.categoryId,
      venue: path.venue,
      dateTime: path.dateTime,
      price: path.price,
      image: path.image
    }

    this.cs.addConcertApi(bodyData).subscribe({
      next: (result: any) => {
        alert("New Concert Uploaded")
        this.addconcertForm.reset()
      }
    })
  }

  Logout() {
    //to logout from the account
    localStorage.removeItem('currentUname');

    this.rout.navigateByUrl('')
  }




}
