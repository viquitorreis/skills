import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  constructor(
  ) {

  }

  userProfile: any
  ngOnInit() {
    // const user = sessionStorage.getItem("loggedInUser") || ""
    // this.userProfile = JSON.parse(user)
  }
}
