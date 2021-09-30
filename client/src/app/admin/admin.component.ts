import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  unappTimes: any;
  topTimes: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getUnappTimes();
    this.getTopTimes();
  }

  getUnappTimes() {
    this.dataService.getUnappTimes().subscribe(response => {
      this.unappTimes = response;
    }, error => {
      console.log(error);
    })
  }

  getTopTimes() {
    this.dataService.getTopTimes().subscribe(response => {
      this.topTimes = response;
    }, error => {
      console.log(error);
    })
  }

}
