import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() username: string;
  password: string;

  ngOnInit(): void {
  }

  login() : void {
    if (this.username === "admin" && this.password === "supersecretpassword") {
      this.router.navigateByUrl("administration", {skipLocationChange: true});
    }
  }
}
