import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConcertService {

  search = new BehaviorSubject("")


  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:5757"


  //api adminlogin
  adminLogin(uname: any, psw: any) {
    const body = { uname, psw }
    return this.http.post(`${this.baseUrl}/admin-login`, body)
  }

  //addConcert
  addConcertApi(body: any) {
    return this.http.post(`${this.baseUrl}/admin/add-concert`, body)
  }

  //to get all concerts
  getAllConcertsApi() {
    return this.http.get(`${this.baseUrl}/concerts-access`)
  }

  //editconcert
  editConcertApi(id: any, bodyData: any) {
    return this.http.put(`${this.baseUrl}/concert-edit/${id}`, bodyData)
  }

  //delete concert
  deleteConcertApi(id: any) {
    return this.http.delete(`${this.baseUrl}/concert-delete/${id}`)
  }

  //api to get single concert data
  getConcertApi(id: any) {
    return this.http.get(`${this.baseUrl}/concert-single/${id}`)
  }

  //signupuser
  userSignupApi(userName: any, email: any, psw: any) {
    const body = { userName, email, psw }
    return this.http.post(`${this.baseUrl}/user-signup`, body)
  }

  //userlogin
  userLoginApi(email: any, psw: any) {
    const body = { email, psw }
    return this.http.post(`${this.baseUrl}/user-login`, body)
  }

  //bookTicket
  bookTicketApi(userId: any, cId: any) {
    const body = { userId, cId }
    return this.http.post(`${this.baseUrl}/bookingdata`, body)
  }

  //to get all users
  getAllUsers() {
    return this.http.get(`${this.baseUrl}/user-access`)
  }

  deleteUser(id: any) {
    return this.http.delete(`${this.baseUrl}/user-delete/${id}`)
  }

  //bookinglist
  bookingList(userId: any) {
    return this.http.get(`${this.baseUrl}/booked-list/${userId}`)
  }

  cancel(id: any) {
    return this.http.delete(`${this.baseUrl}/cancelbooking/${id}`)
  }

}

