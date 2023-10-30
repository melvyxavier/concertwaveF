import { Component, HostListener } from '@angular/core';
import { ConcertService } from '../concert.service';

@Component({
  selector: 'app-adminuser-mng',
  templateUrl: './adminuser-mng.component.html',
  styleUrls: ['./adminuser-mng.component.css']
})
export class AdminuserMngComponent {

  isSticky: boolean = false;
  users: any = []


  @HostListener('window:scroll', [])
  onScroll(): void {
    const threshold = 200; // Adjust this value to your needs
    this.isSticky = window.scrollY >= threshold;
  }


  constructor(private cs: ConcertService) { }

  ngOnInit(): void {

    this.getusers()
  }

  getusers() {
    this.cs.getAllUsers().subscribe({
      next: (result: any) => {
        this.users = result.message
      }
    })
  }

  deleteuser(id: any) {
    this.cs.deleteUser(id).subscribe({
      next: (result: any) => {
        alert(result.message)
      }
    })
  }

}


